// NoticeDetail.js
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Noti, saveNoticesToLocalStorage } from '../../../datas/noti_data';
import { userContext } from '../../../App'; // userContext 가져옴
import { USER_TYPE_ADMIN } from '../../../datas/usertypes'; // 관리자 유저만 작성하기 쓸 수 있게 가져옴
import NoticeCreationModal from './NoticeCreationModal'; // Modal 컴포넌트 임포트
import "./NoticeDetail.css"

export function NoticeDetail() {
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(userContext); // userContext 적용
    const notice = Noti.find(noti => noti.notiId === parseInt(noticeId));
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
    const [modalMessage, setModalMessage] = useState(''); // 모달 메시지 상태 추가
    const [modalConfirmAction, setModalConfirmAction] = useState(null); // 모달 확인 동작 상태 추가

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

    const handleEditClick = () => {
        navigate(`/notice/edit/${notice.notiId}`);
    };

    const handleDeleteClick = () => {
        setModalMessage('정말 삭제하시겠습니까?');
        setModalConfirmAction(() => confirmDelete);
        setIsModalOpen(true); // 모달 열기
    };

    const confirmDelete = () => {
        const index = Noti.findIndex(noti => noti.notiId === parseInt(noticeId));
        Noti.splice(index, 1);
        saveNoticesToLocalStorage(Noti);  // 로컬스토리지에 변경사항 저장
        navigate('/notice');
    };

    const handleListClick = () => {
        navigate('/notice');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
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
                {user && user.userTypeId === USER_TYPE_ADMIN && (
                    <div className='noti_detail_btn_box'>
                        <button className='font_small' onClick={handleEditClick}>수정</button>
                        <button className='font_small' onClick={handleDeleteClick}>삭제</button>
                    </div>
                )}
            </div>
            <NoticeCreationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={() => {
                    modalConfirmAction();
                    handleCloseModal();
                }}
                message={modalMessage}
            />
        </div>
    );
}
