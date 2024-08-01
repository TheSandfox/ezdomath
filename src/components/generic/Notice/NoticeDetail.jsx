import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Noti, saveNoticesToLocalStorage } from '../../../datas/noti_data';
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
            saveNoticesToLocalStorage(Noti);  // 로컬스토리지에 변경사항 저장
            navigate('/notice');
        }
    };

    const handleListClick = () => {
        navigate('/notice');
    };

    return (
        <div className="notice_detail_wrap">
            <div className="notice_detail_header">
                <div></div>
                <p className='notice_detail_title font_medium'>{notice.title}</p>
                <p className='font_small'>작성일 | {notice.time}</p>
            </div>
            <div className="notice_detail_content">
                {notice.item.map((item, index) => (
                    <div key={index} className="notice_content font_main">
                        {item.content}
                    </div>
                ))}
            </div>
            <div className="notice_detail_buttons">
                <div>
                    <button className='font_small' onClick={handleListClick}>목록</button>
                </div>
                <div className='noti_detail_btn_box'>
                    <button className='font_small' onClick={handleEditClick}>수정</button>
                    <button className='font_small' onClick={handleDeleteClick}>삭제</button>
                </div>
            </div>
        </div>
    );
}
