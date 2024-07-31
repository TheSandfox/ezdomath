import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoticeList } from '../../../components/generic/Notice/NoticeList';
import { NoticeDetail } from '../../../components/generic/Notice/NoticeDetail';
import { NoticeWrite } from '../../../components/generic/Notice/NoticeWrite';
import { NoticeEdit } from '../../../components/generic/Notice/NoticeEdit';
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
