//CSS
import './pagemy.css';

//아이콘
import { FaUser } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

//hooks
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

//external components
import { ProfileCard } from "./ProfileCard";
import * as MyInfo from './MyInfo';
import * as MyBookmark from './MyBookmark';
import * as MyAchieve from './MyAchieve';
import * as MyCommunity from './MyCommunity';
import * as MyQNA from './MyQNA';

//utils
import * as User from '/src/utils/User';

// 수평제목
export function MyTitle({title}) {
	return <div className="myTitle font_main">
		<div className="title">
			{title}
		</div>
	</div>
}

// 탭버튼
function MyTabButton({to,title,icon,active}) {
	return <Link to={to} className={`myTabButton${active?' active':''}`}>
		{icon}
		<div className='title font_main'>
			{title}
		</div>
	</Link>
}

// 탭버튼컨테이너
function MyTabs({flag,tabIndex}) {
	return <div className={flag?'myTabs':'myTabsDesktop'}>
		<MyTabButton 
			to={'/my/info'} 
			icon={<FaUser className='icon'/>} 
			title={'회원정보'} active={tabIndex===0}
		/>
		<MyTabButton 
			to={'/my/bookmark'} 
			icon={<BsBookmarkStarFill className='icon'/>} 
			title={'북마크'} active={tabIndex===1}
		/>
		<MyTabButton 
			to={'/my/achieve'} 
			icon={<BsBarChartFill className='icon'/>} 
			title={'진척도'} active={tabIndex===2}
		/>
		<MyTabButton 
			to={'/my/community'} 
			icon={<HiUserGroup className='icon'/>} 
			title={'커뮤니티'} active={tabIndex===3}
		/>
		<MyTabButton 
			to={'/my/qna'} 
			icon={<FaRegEdit className='icon'/>} 
			title={'Q&A'} active={tabIndex===4}
		/>
	</div>
}

// 페이지
export function PageMy({}) {
	const [user,setUser] = useState(User.getUser());
	const [tabIndex,setTabIndex] = useState(0);
	const handleTabIndex = {
		set:(newVal)=>{
			setTabIndex(newVal);
		}
	}
	return <div id={'pageMy'}>
		{/* <탑배너> */}
		{/* 상탭(탭) */}
		<MyTabs flag={true} tabIndex={tabIndex}/>
		{/* 컨텐츠영역 */}
		<div className='mainContents'>
			{/* 이너박스(좌우분할) */}
			<div className='innerbox'>
				<div className='first'>
					<ProfileCard user={user}/>
					{/* 라우트별 컨텐츠 */}
					<Routes>
						<Route path='info' element={<MyInfo.Left/>}/>
					</Routes>
				</div>
				<div className='second'>
					{/* 상탭(데탑only) */}
					<MyTabs flag={false} tabIndex={tabIndex}/>
					{/* 라우트별 컨텐츠 */}
					<Routes>
						<Route path='info' element={<MyInfo.Main handleTabIndex={handleTabIndex} index={0} user={user}/>}/>
						<Route path='bookmark' element={<MyBookmark.Main handleTabIndex={handleTabIndex} index={1}/>}/>
						<Route path='achieve' element={<MyAchieve.Main handleTabIndex={handleTabIndex} index={2}/>}/>
						<Route path='community' element={<MyCommunity.Main handleTabIndex={handleTabIndex} index={3}/>}/>
						<Route path='qna' element={<MyQNA.Main handleTabIndex={handleTabIndex} index={4}/>}/>
					</Routes>
				</div>
			</div>
		</div>

	</div>
}