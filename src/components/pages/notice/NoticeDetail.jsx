import { useNavigate, useParams } from 'react-router-dom';
import { Noti } from '../../../datas/noti_data';
import "./NoticeDetail.css"

export function NoticeDetail() {
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const notice = Noti.find(noti => noti.notiId === parseInt(noticeId));

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

    const handleEditClick = () => {
        navigate(`/notice/edit/${notice.notiId}`);
    };

    const handleDeleteClick = () => {
        const confirmed = window.confirm('정말 삭제하시겠습니까?');
        if (confirmed) {
            const index = Noti.findIndex(noti => noti.notiId === parseInt(noticeId));
            Noti.splice(index, 1);
            navigate('/notice');
        }
    };

    const handleListClick = () => {
        navigate('/notice');
    };

    const formatContent = (content) => {
        return content.split('\n').map((line, index) => (
            <div key={index}>{line}<br /></div>
        ));
    };

    return (
        <div className="notice_detail_wrap">
            <div className="notice_detail_header">
                <h3>{notice.title}</h3>
                <p>{notice.time}</p>
            </div>
            <div className="notice_detail_content">
                {notice.item.map((item, index) => (
                    <div key={index}>{formatContent(item.content)}</div>
                ))}
            </div>
            <div className="notice_detail_buttons">
				<div>
                	<button onClick={handleListClick}>목록</button>
				</div>
				<div>
                	<button onClick={handleEditClick}>수정</button>
                	<button onClick={handleDeleteClick}>삭제</button>
				</div>
            </div>
        </div>
    );
}
