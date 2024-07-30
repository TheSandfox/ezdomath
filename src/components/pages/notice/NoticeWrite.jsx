import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNotice } from '../../../datas/noti_data';
import './NoticeWrite.css';

export function NoticeWrite() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        addNotice(
            formData.get('title'),
            formData.get('content'),
            formData.get('important') === 'true'
        );
        navigate('/notice');
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
                <div className="buttons">
                    <button type="button" className="cancel_button" onClick={handleCancel}>취소</button>
                    <button type="submit" className="submit_button">작성하기</button>
                </div>
            </form>
        </div>
    );
}
