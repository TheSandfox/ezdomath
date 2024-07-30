import { Route, Routes } from 'react-router-dom';
import { NoticeList } from './NoticeList';
import { NoticeDetail } from './NoticeDetail';
import { NoticeWrite } from './NoticeWrite';
import { NoticeEdit } from './NoticeEdit';
import Navigation from '../navigation/navigation';
import TopBanner from '../../generic/Topbanner';

export function PageNotice() {
    return (
        <>
            <Navigation />
            <TopBanner pageName="공지사항" />
            <Routes>
                <Route path="/" element={<NoticeList />} />
                <Route path="notice" element={<NoticeList />} />
                <Route path="detail/:noticeId" element={<NoticeDetail />} />
                <Route path="write" element={<NoticeWrite />} />
                <Route path="edit/:noticeId" element={<NoticeEdit />} />
            </Routes>
        </>
    );
}
