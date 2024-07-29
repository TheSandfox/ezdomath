import { Noti } from '../../../datas/noti_data';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoticeList.css';
import important from '/img/star.webp'

export function NoticeList() {
    const [notices, setNotices] = React.useState([...Noti]);
    const navigate = useNavigate();

    const handleWriteClick = () => {
        navigate('/notice/write');
    };

    const handleTitleClick = (noticeId) => {
        navigate(`/notice/detail/${noticeId}`);
    };

    React.useEffect(() => {
        setNotices([...Noti]);
    }, [Noti]);

    return (
        <div className="notice_wrap">
            <div className="flex">
                <div>
                    <p>총 <span>{notices.length}</span> 건의 게시물이 있습니다.</p>
                </div>
                <div>
                    <select name="filter" id="filter">
                        <option value="all">전체</option>
                        <option value="important">중요</option>
                        <option value="general">일반</option>
                    </select>
                    <input type="text" placeholder="검색어를 입력하세요" />
                    <button>검색하기</button>
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
                            <td className='flex_center'>{notice.important ? <img src={important} alt="중요 아이콘" /> : index + 1}</td>
                            <td
                                className={notice.important ? 'important_title' : 'unimportant_title'}
                                onClick={() => handleTitleClick(notice.notiId)}
                            >
                                {notice.title}
                            </td>
                            <td>{notice.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={handleWriteClick}>작성하기</button>
            </div>
        </div>
    );
}