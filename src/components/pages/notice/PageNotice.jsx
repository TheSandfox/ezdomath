import { Route, Routes } from "react-router-dom";
import { NoticeDetail } from "./NoticeDetail";
import { NoticeWrite } from "./NoticeWrite";
import { NoticeEdit } from "./NoticeEdit";

export function PageNotice({}) {
	return <>
		<Routes>
			<Route exact path="" element={<></>}/>
			<Route path="detail/:noticeId" element={<NoticeDetail/>}/>
			<Route path="write" element={<NoticeWrite/>}/>
			<Route path="edit/:noticeId" element={<NoticeEdit/>}/>
		</Routes>
	</>
}