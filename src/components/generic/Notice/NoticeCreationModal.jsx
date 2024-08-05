import React from 'react';
import './NoticeCreationModal.css';

const NoticeCreationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal_overlay">
            <div className="modal_content">
                <p>{message}</p>
                <div className="modal_buttons">
                    <button onClick={onConfirm}>확인</button>
                    <button onClick={onClose}>취소</button>
                </div>
            </div>
        </div>
    );
};

export default NoticeCreationModal;