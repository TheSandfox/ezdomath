import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Noti, saveNoticesToLocalStorage } from '../../../datas/noti_data';
import './NoticeList.css';
import important from '/img/star.webp';
import { NotiSearch } from '../../generic/Notice/NotiSearch';
import Pagination from '../../generic/Notice/Pagination';
import { userContext } from '../../../App'; // userContext 가져옴
import { USER_TYPE_ADMIN } from '../../../datas/usertypes'; // 관리자 유저만 작성하기 쓸 수 있게 가져옴

export function NoticeList() {
    const [notices, setNotices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);
    const navigate = useNavigate();
    const { user } = useContext(userContext); // userContext 적용

    const noticesPerPage = 5;
    const pageGroupSize = 5;

    const sortNotices = (notices) => {
        const importantNotices = notices.filter(notice => notice.important);
        const regularNotices = notices.filter(notice => !notice.important).sort((a, b) => b.notiId - a.notiId);
        return [...importantNotices, ...regularNotices];
    };

    const handleSearch = (searchType, searchQuery) => {
        if (searchQuery.trim() === '') {
            setNotices(sortNotices(Noti));
            setCurrentPage(1);
            setCurrentGroup(1);
            return;
        }

        const query = searchQuery.toLowerCase();
        let results = [];

        if (searchType === 'all') {
            results = Noti.filter(noti => 
                noti.title.toLowerCase().includes(query) || 
                noti.item[0].content.toLowerCase().includes(query)
            );
        } else if (searchType === 'title') {
            results = Noti.filter(noti => noti.title.toLowerCase().includes(query));
        } else if (searchType === 'content') {
            results = Noti.filter(noti => noti.item[0].content.toLowerCase().includes(query));
        }

        setNotices(sortNotices(results));
        setCurrentPage(1);
        setCurrentGroup(1);
    };

    useEffect(() => {
        setNotices(sortNotices(Noti));
    }, []);

    useEffect(() => {
        setNotices(sortNotices(Noti));
    }, [Noti]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
            setCurrentPage((currentGroup - 2) * pageGroupSize + 1);
        }
    };

    const handleNextGroup = () => {
        const maxGroup = Math.ceil((notices.length - importantNotices.length) / noticesPerPage / pageGroupSize);
        if (currentGroup < maxGroup) {
            setCurrentGroup(currentGroup + 1);
            setCurrentPage(currentGroup * pageGroupSize + 1);
        }
    };

    const importantNotices = notices.filter(notice => notice.important);
    const regularNotices = notices.filter(notice => !notice.important);

    const totalPageCount = Math.ceil(regularNotices.length / noticesPerPage);
    const startIndex = (currentPage - 1) * noticesPerPage;
    const endIndex = startIndex + noticesPerPage;
    const currentNotices = regularNotices.slice(startIndex, endIndex);

    return (
        <div className="notice_content_wrap">
            <div className="notice_list_top">
                <div className='notice_post_count'>
                    <p>총 <span>{notices.length}</span> 건의 게시물이 있습니다.</p>
                </div>
                <NotiSearch onSearch={handleSearch} />
            </div>
            <table className='noti_table'>
                <thead className='noti_table_head'>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody className='noti_table_box'>
                    {importantNotices.length > 0 && (
                        importantNotices.map((notice, index) => (
                            <tr key={`important-${notice.notiId}-${index}`} className='important'>
                                <td className='noti_td'><img src={important} alt="중요 아이콘" /></td>
                                <td
                                    className='important_title'
                                    onClick={() => navigate(`/notice/detail/${notice.notiId}`)}
                                >
                                    {notice.title}
                                </td>
                                <td className='important_time'>{notice.time}</td>
                            </tr>
                        ))
                    )}
                    {currentNotices.length > 0 ? (
                        currentNotices.map((notice, index) => (
                            <tr key={`regular-${notice.notiId}-${index}`} className='unimportant'>
                                <td className='noti_td'>{regularNotices.length - startIndex - index}</td>
                                <td
                                    className='unimportant_title'
                                    onClick={() => navigate(`/notice/detail/${notice.notiId}`)}
                                >
                                    {notice.title}
                                </td>
                                <td className='unimportant_time'>{notice.time}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no_results">검색 결과가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPageCount={totalPageCount}
                currentGroup={currentGroup}
                pageGroupSize={pageGroupSize}
                onPageChange={handlePageChange}
                onPreviousGroup={handlePreviousGroup}
                onNextGroup={handleNextGroup}
            />
            {/* 관리자 유형의 유저한테만 보임 */}
            {user && user.userTypeId === USER_TYPE_ADMIN && (
                <div className='noti_write_btn'>
                    <button onClick={() => navigate('/notice/write')}>작성하기</button>
                </div>
            )}
        </div>
    );
}
