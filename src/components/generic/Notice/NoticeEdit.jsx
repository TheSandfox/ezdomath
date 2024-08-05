// NoticeEdit.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Noti, saveNoticesToLocalStorage } from '../../../datas/noti_data';
import NoticeCreationModal from './NoticeCreationModal'; // Modal 컴포넌트 임포트
import './NoticeWrite.css';

export function NoticeEdit() {
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const noticeIndex = Noti.findIndex(noti => noti.notiId === parseInt(noticeId));
    const notice = Noti[noticeIndex];

    const [title, setTitle] = useState('');
    const [important, setImportant] = useState(false);
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
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
        if (validateForm()) {
            setIsModalOpen(true); // 모달 열기
        }
    };

    const handleConfirm = () => {
        const updatedNotice = {
            ...notice,
            title,
            important,
            item: [{ type: "text", content }],
        };
        Noti[noticeIndex] = updatedNotice;
        saveNoticesToLocalStorage(Noti); // 로컬스토리지에 변경사항 저장
        navigate('/notice');
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const validateForm = () => {
        let valid = true;
        if (title.length > 18) {
            setTitleError('제목은 최대 18글자까지 가능합니다.');
            valid = false;
        } else {
            setTitleError('');
        }
        if (content.length > 1500) {
            setContentError('내용은 최대 1500자까지 가능합니다.');
            valid = false;
        } else {
            setContentError('');
        }
        return valid;
    };

    const handleTitleChange = (e) => {
        if (e.target.value.length <= 18) {
            setTitle(e.target.value);
            setTitleError('');
        } else {
            setTitleError('제목은 최대 18글자까지 가능합니다.');
        }
    };

    const handleContentChange = (e) => {
        if (e.target.value.length <= 1500) {
            setContent(e.target.value);
            setContentError('');
        } else {
            setContentError('내용은 최대 1500자까지 가능합니다.');
        }
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
                        onChange={handleTitleChange}
                        required
                    />
                    {titleError && <div className="error">{titleError}</div>}
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
                        onChange={handleContentChange}
                        required
                    />
                    {contentError && <div className="error">{contentError}</div>}
                </div>
                <div className="buttons">
                    <button type="button" className="cancel_button" onClick={handleCancel}>취소</button>
                    <button type="submit" className="submit_button">수정하기</button>
                </div>
            </form>
            <NoticeCreationModal
                isOpen={isModalOpen}
                onClose={handleClose}
                onConfirm={handleConfirm}
                message="내용을 수정하여 등록하시겠습니까?"
            />
        </div>
    );
}
