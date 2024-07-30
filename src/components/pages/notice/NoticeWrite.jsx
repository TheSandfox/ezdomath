import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNotice } from '../../../datas/noti_data';

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
                        <option value="true">중요</option>
                        <option value="false">일반</option>
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
