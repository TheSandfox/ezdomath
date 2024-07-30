import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Noti } from "../../../datas/noti_data";
import './NoticeWrite.css';

export function NoticeEdit() {
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const noticeIndex = Noti.findIndex(noti => noti.notiId === parseInt(noticeId));
    const notice = Noti[noticeIndex];

    const [title, setTitle] = React.useState('');
    const [important, setImportant] = React.useState(false);
    const [content, setContent] = React.useState('');

    React.useEffect(() => {
        if (notice) {
            setTitle(notice.title);
            setImportant(notice.important);
            setContent(notice.item[0].content);
        }
    }, [notice]);

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedNotice = {
            ...notice,
            title,
            important,
            item: [{ type: "text", content }],
        };
        Noti[noticeIndex] = updatedNotice;
        navigate('/notice');
    };

    const handleCancel = () => {
        navigate('/notice');
    };

    return (
        <div className="notice_wrap">
            <h2>공지사항 수정</h2>
            <form className="notice_form" onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>중요 여부</label>
                    <select
                        name="important"
                        value={important.toString()}
                        onChange={(e) => setImportant(e.target.value === 'true')}
                        required
                    >
                        <option value="false">일반</option>
                        <option value="true">중요</option>
                    </select>
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="buttons">
                    <button type="button" className="cancel_button" onClick={handleCancel}>취소</button>
                    <button type="submit" className="submit_button">수정하기</button>
                </div>
            </form>
        </div>
    );
}
