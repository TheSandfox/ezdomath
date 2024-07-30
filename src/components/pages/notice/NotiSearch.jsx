import React, { useState } from 'react';
import './NotiSearch.css';

export function NotiSearch({ onSearch }) {
    const [searchType, setSearchType] = useState('all'); // 검색 타입 (전체, 제목, 내용)
    const [searchQuery, setSearchQuery] = useState(''); // 검색어

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchType, searchQuery); // 검색 타입과 검색어를 부모 컴포넌트로 전달
    };

    return (
        <div className="noti_search_wrap">
            <form className="noti_search_form" onSubmit={handleSearch}>
                <div className="search_bar">
                    <select 
                        name="searchType" 
                        value={searchType} 
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                    </select>
                    <input 
                        type="text" 
                        placeholder="검색어를 입력하세요" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                    <button type="submit">검색</button>
                </div>
            </form>
        </div>
    );
}
