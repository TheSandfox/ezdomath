import { Noti } from '../../../datas/noti_data';
import { useNavigate } from 'react-router-dom';

export function NoticeWrite() {
    const navigate = useNavigate();

    const formatDate = (date) => {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${year}.${month}.${day}`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newNotice = {
            notiId: Noti.length,
            title: formData.get('title'),
            time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
            important: formData.get('important') === 'true',
            item: [
                {
                    type: "text",
                    content: formData.get('content'),
                },
            ],
        };
        Noti.push(newNotice);
        navigate('/notice');
    };

    return (
        <div>
            <h2>공지사항 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label>중요 여부</label>
                    <select name="important" required>
                        <option value="false">일반</option>
                        <option value="true">중요</option>
                    </select>
                </div>
                <div>
                    <label>내용</label>
                    <textarea name="content" required></textarea>
                </div>
                <button type="submit">작성하기</button>
            </form>
        </div>
    );
}