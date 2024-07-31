import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNotice } from '../../../datas/noti_data';
import './NoticeWrite.css';

export function NoticeWrite() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const confirmed = window.confirm('새 게시물을 등록하시겠습니까?');
            if (confirmed) {
                addNotice(title, content, event.target.important.value === 'true');
                navigate('/notice');
            }
        }
    };
    const validateForm = () => {
        let valid = true;
        if (title.length > 15) {
            setTitleError('제목은 최대 15글자까지 가능합니다.');
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
        if (e.target.value.length <= 15) {
            setTitle(e.target.value);
        }
    };

    const handleContentChange = (e) => {
        if (e.target.value.length <= 1500) {
            setContent(e.target.value);
        }
    };

    const handleCancel = () => {
        navigate('/notice');
    };

    return (
        <div className="notice_wrap">
            <h2>공지사항 작성</h2>
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
                    <select name="important" required>
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
                    ></textarea>
                    {contentError && <div className="error">{contentError}</div>}
                </div>
                <div className="buttons">
                    <button type="button" className="cancel_button" onClick={handleCancel}>취소</button>
                    <button type="submit" className="submit_button">작성하기</button>
                </div>
            </form>
        </div>
    );
}
