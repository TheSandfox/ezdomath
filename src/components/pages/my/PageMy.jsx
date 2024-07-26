//CSS
import './pagemy.css';

//아이콘
import { FaUser } from "react-icons/fa";
import { BsBookmarkStarFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";

//hooks
import { useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

//external components
import { ProfileCard } from "./ProfileCard";
import * as MyInfo from './MyInfo';
import * as MyBookmark from './MyBookmark';
import * as MyAchievement from './MyAchievement';
import * as MyCommunity from './MyCommunity';
import * as MyQNA from './MyQNA';

//utils
import * as User from '/src/utils/User';
import { userContext } from '../../../App';
import { ButtonTab } from '../../generic/Buttons';

// 수평제목
export function MyTitle({title}) {
	return <div className="myTitle font_main">
		<div className="title">
			{title}
		</div>
	</div>
}

// 탭버튼
export function MyTabButton({to,title,icon,active}) {
	return <ButtonTab to={to} icon={icon} className={active?'active':''}>
		<div className='title font_main'>
			{title}
		</div>
	</ButtonTab>
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
			to={'/my/bookmark/all'} 
			icon={<BsBookmarkStarFill className='icon'/>} 
			title={'북마크'} active={tabIndex===1}
		/>
		<MyTabButton 
			to={'/my/achievement/0'} 
			icon={<BsBarChartFill className='icon'/>} 
			title={'진척도'} active={tabIndex===2}
		/>
		<MyTabButton 
			to={'/my/community/students'} 
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
	const { user } = useContext(userContext);
	const [tabIndex,setTabIndex] = useState(0);
	const handleTabIndex = {
		set:(newVal)=>{
			setTabIndex(newVal);
		}
	}
	const [trigger,setTrigger] = useState({});
	const handleTrigger = {
		trigger:(newVal)=>{
			setTrigger(newVal);
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
				{/* 좌측 */}
				<div className='first'>
					<ProfileCard user={user}/>
					{/* 라우트별 컨텐츠 */}
					<Routes>
						<Route path='info' element={<MyInfo.Left handleTrigger={handleTrigger}/>}/>
						<Route path='bookmark/:actId' element={<MyBookmark.Left handleTrigger={handleTrigger}/>}/>
						<Route path='achievement/:actId/*' element={<MyAchievement.Left handleTrigger={handleTrigger}/>}/>
						<Route path='achievement/:actId/:targetUserId' element={<MyAchievement.Left handleTrigger={handleTrigger}/>}/>
						<Route path='community/:tabId' element={<MyCommunity.Left handleTrigger={handleTrigger}/>}/>
					</Routes>
				</div>
				{/* 우측 */}
				<div className='second'>
					{/* 상탭(데탑only) */}
					<MyTabs flag={false} tabIndex={tabIndex}/>
					{/* 라우트별 컨텐츠 */}
					<Routes>
						<Route path='info' element={<MyInfo.Main handleTabIndex={handleTabIndex} index={0} user={user}/>}/>
						<Route path='bookmark/:actId' element={<MyBookmark.Main handleTabIndex={handleTabIndex} index={1} trigger={trigger}/>}/>
						<Route path='achievement/:actId/*' element={<MyAchievement.Main handleTabIndex={handleTabIndex} index={2} trigger={trigger}/>}/>
						<Route path='achievement/:actId/:targetUserId' element={<MyAchievement.Main handleTabIndex={handleTabIndex} index={2} trigger={trigger}/>}/>
						<Route path='community/:tabId' element={<MyCommunity.Main handleTabIndex={handleTabIndex} index={3} trigger={trigger}/>}/>
						<Route path='qna' element={<MyQNA.Main handleTabIndex={handleTabIndex} index={4}/>}/>
					</Routes>
				</div>
			</div>
		</div>

	</div>
}