import { Noti } from '../../../datas/noti_data';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoticeList.css';
import important from '/img/star.webp';

export function NoticeList() {
    const [notices, setNotices] = React.useState([]);

    const navigate = useNavigate();

    // 글쓰기 버튼 클릭 핸들러
    const handleWriteClick = () => {
        navigate('/notice/write');
    };

    // 디테일 페이지로 이동
    const handleTitleClick = (noticeId) => {
        navigate(`/notice/detail/${noticeId}`);
    };

    // 공지사항을 중요도와 역순으로 정렬하는 함수
    const sortNotices = (notices) => {
        const importantNotices = notices.filter(notice => notice.important); // 중요한 공지사항 필터링
        const regularNotices = notices.filter(notice => !notice.important).sort((a, b) => b.notiId - a.notiId); // 일반 공지사항 역순 정렬
        return [...importantNotices, ...regularNotices]; // 정렬된 배열 반환
    };

    // 컴포넌트 마운트 시 공지사항 정렬 및 상태 업데이트
    React.useEffect(() => {
        setNotices(sortNotices(Noti));
    }, []);

    // 공지사항 배열이 변경될 때마다 상태 업데이트
    React.useEffect(() => {
        setNotices(sortNotices(Noti));
    }, [Noti]);

    return (
        <div className="notice_wrap">
            <div className="flex">
                <div>
                    <p>총 <span>{notices.length}</span> 건의 게시물이 있습니다.</p> {/* 공지사항 개수 표시 */}
                </div>
                <div>
                    <select name="filter" id="filter">
                        <option value="all">전체</option>
                        <option value="important">중요</option>
                        <option value="general">일반</option>
                    </select>
                    <input type="text" placeholder="검색어를 입력하세요" />
                    <button>검색하기</button> {/* 검색 기능 (구현 필요) */}
                </div>
            </div>
            <table className='noti_table'>
                <thead className='noti_table_head'>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {notices.map((notice, index) => (
                        <tr key={notice.notiId} className={notice.important ? 'important' : 'unimportant'}>
                            <td className='flex_center'>{notice.important ? <img src={important} alt="중요 아이콘" /> : notices.length - index}</td> {/* 번호 및 중요 아이콘 표시 */}
                            <td
                                className={notice.important ? 'important_title' : 'unimportant_title'}
                                onClick={() => handleTitleClick(notice.notiId)}
                            >
                                {notice.title} {/* 공지사항 제목 */}
                            </td>
                            <td>{notice.time}</td> {/* 작성일 */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handleWriteClick}>작성하기</button> {/* 글쓰기 버튼 */}
            </div>
        </div>
    );
}
