import { useContext, useEffect, useMemo, useState } from "react"
import { MyTitle } from "./PageMy"
import './mycommunity.css';
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../../App";
import { USER_TYPE_ADMIN, USER_TYPE_PARENT, USER_TYPE_STUDENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";
import { ButtonTab } from "../../generic/Buttons";
import { DropdownItem, DropdownLarge } from "../../generic/Dropdown";
import { UserCard } from "../../generic/user/UserCard";

const tabs = [
	['students','나의 학생들'],
	['search','학생찾기'],
	['mentor','나의 선생님/부모님'],
	['invitation','초대현황']
]

export function Left({handleTrigger}) {
	const navigate = useNavigate();
	const { user } = useContext(userContext);
	const params = useParams();
	const tabId = params.tabId?params.tabId:'students';
	//표시할 항목들
	const displayItems = useMemo(()=>{
		if (!user) {
			return [];
		}
		let arr = [];
		switch (user.userTypeId) {
		// 학생
		case USER_TYPE_STUDENT:
			arr = [
				tabs[2],
				tabs[3]
			];
			break;
		// 부모
		case USER_TYPE_PARENT:
			arr = [
				tabs[0],
				tabs[1],
				tabs[3],
			];
			break;
		// 교사
		case USER_TYPE_TEACHER:
			arr = [
				tabs[0],
				tabs[1],
				tabs[3]
			];
			break;
		// 어드민
		case USER_TYPE_ADMIN:
			arr = [
				tabs[0],
				tabs[1],
				tabs[2],
				tabs[3]
			];
			break;
		}
		return arr;
	},[user])
	//디스플레이인덱스
	const displayIndex = useMemo(()=>{
		let val = displayItems.findIndex((item)=>{
			return item[0]===tabId;
		});
		if (isNaN(val)||val<0) {
			return 0;
		}
		return val;
	},[tabId,displayItems])
	//트리거
	useEffect(()=>{
		let newTabId = tabId?tabId:'all';
		handleTrigger.trigger({
			target:'community',
			tabId:newTabId
		})
	},[tabId]);
	//회원유형 체크 후 접근할 수 없는 탭이면 강제이동
	useEffect(()=>{
		if (!user) {return;}
		if (!displayItems) {return;}
		if (!displayItems.find((item)=>{
			return item[0] === tabId;
		})) {
			navigate(`/my/community/${displayItems[0][0]}`);
		}
	},[tabId,displayItems,user]);
	return <>
		<div className="myCommunity myLeftBox">
			<MyTitle title={'커뮤니티'}/>
			<div className="tabs">
				{displayItems.map((item,index)=>{
					return <ButtonTab key={index} icon={<></>} to={`/my/community/${item[0]}`} active={tabId===item[0]}>{item[1]}</ButtonTab>
				})}
			</div>
		</div>
		<div className="myCommunity myLeftBoxAlter">
			<DropdownLarge displayIndex={displayIndex}>
				{displayItems.map((item,index)=>{
					return <DropdownItem key={index} className={'large'} to={`/my/community/${item[0]}`}>{item[1]}</DropdownItem>
				})}
			</DropdownLarge>
		</div>
	</>
}

export function Main({handleTabIndex,index,trigger}) {
	const { user, users, friends } = useContext(userContext);
	//리스트구성
	const targetUsers = useMemo(()=>{
		if (!user||!users) {return null;}
		if (!trigger) {return null;}
		if (!trigger.tabId) {return null;}
		switch (trigger.tabId) {
		case 'students' :
			//학생목록
			return friends.filter((friendItem)=>{
				return parseInt(friendItem.userId1)===parseInt(user.userId)
					|| parseInt(friendItem.userId2)===parseInt(user.userId)
			})
			.map((friendItem)=>{
				return (parseInt(friendItem.userId1) === parseInt(user.userId))
					?parseInt(friendItem.userId2)
					:parseInt(friendItem.userId1)
			})
		case 'search' :
			return;
		case 'mentor' :
			return;
		case 'invitation' :
			return;
		default : 
			return <></>
		}
	},[trigger,user,users]);
	// JSX 구성
	const jsx = useMemo(()=>{
		if (!targetUsers) {return <></>}
		switch (trigger.tabId) {
		case 'students' :
			return <>
				<MyTitle title={'나의 학생들'}/>
				<div className="myCommunityCardContainer">
					{targetUsers.map((targetUserId)=>{
						return <UserCard key={targetUserId} userId={targetUserId}/>
					})}
				</div>
			</>
		case 'search' :
			return <>
				<MyTitle title={'학생찾기'}/>
			</>
		case 'mentor' :
			return <>
				<MyTitle title={'나의 선생님/부모님'}/>
			</>
		case 'invitation' :
			return <>
				<MyTitle title={'초대현황'}/>
			</>
		default : 
			return <></>
		}
	},[targetUsers])
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		{jsx}
	</div>
}