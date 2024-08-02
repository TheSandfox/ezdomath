import { useContext, useEffect, useMemo, useState } from "react"
import { MyTitle } from "./PageMy"
import { SubjectCard } from "../../generic/subject/SubjectCard";
import { useParams } from "react-router-dom";
import * as Subject from '/src/utils/Subject'
import * as Friend from '/src/utils/Friend'
import * as User from '/src/utils/User'
import { userContext } from "../../../App";
import { ACTS } from "../../../datas/acts";
import { ButtonTab } from "../../generic/Buttons";
import { ActProgress } from "../../generic/act/ActProgress";

import './myachievement.css';
import { Dropdown, DropdownItem, DropdownSmall } from "../../generic/Dropdown";
import { USER_TYPE_STUDENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";
import { SUBJECTS } from "../../../datas/subjects";

export function Left({handleTrigger}) {
	const { user, friends, users } = useContext(userContext);
	const params = useParams();
	const actId = params.actId?params.actId:'0';
	const targetUserId = useMemo(()=>{
		// 로그인 안됐음
		if (!user) {
			return null;
		}
		// 접근권한 없는 회원유형
		if (user.userTypeId===USER_TYPE_STUDENT) {
			return user.userId;
		}
		// 비어있으면
		if (isNaN(parseInt(params.targetUserId))) {
			return user.userId;
		}
		// 친구창에 없음
		if (!friends.find((item)=>{
			return Friend.find(item,user.userId,params.targetUserId);
		})) {
			return user.userId;
		}
		return params.targetUserId;
	},[params.targetUserId,user,friends]);
	//드롭다운 리스트
	const dropdownList = useMemo(()=>{
		if (!user) {
			return null;
		}
		if (user.userTypeId===USER_TYPE_STUDENT) {
			return null;
		}
		let newObj = friends.filter((friendItem)=>{
			return parseInt(friendItem.userId1) === parseInt(user.userId)
				|| parseInt(friendItem.userId2) === parseInt(user.userId)
		})
		.map((friendItem)=>{
			let opponentId = Friend.getOpponent(friendItem,user.userId);
			return {
				userId:opponentId,
				name:users.find((userItem)=>{
					return parseInt(userItem.userId) === parseInt(opponentId)
				}).name+User.getUserIdString(opponentId)
			}
		})
		return [
			{
				userId:user.userId,
				name:users.find((userItem)=>{
					return parseInt(userItem.userId) === parseInt(user.userId)
				}).name+User.getUserIdString(user.userId)
			},
			...newObj];
	},[user,users,friends,targetUserId]);
	//트리거 작동
	useEffect(()=>{
		let newActId = actId?actId:'0';
		handleTrigger.trigger({
			target:'achievement',
			actId:newActId
		})
	},[actId]);
	//드롭다운 디스플레이인덱스
	const displayIndex = useMemo(()=>{
		return parseInt(actId);
	},[actId]);
	const displayIndex2 = useMemo(()=>{
		if (!user) {return 0;}
		if (isNaN(parseInt(targetUserId))) {
			return 0;
		}
		if (!dropdownList) {
			return 0;
		}
		return dropdownList.findIndex((dropdownItem)=>{
			return parseInt(dropdownItem.userId) === parseInt(targetUserId)
		});
	},[targetUserId,user,dropdownList])
	return <>
		<div className="myAchievement myLeftBox">
			{dropdownList
				?<>
					<MyTitle title={'학생 선택'}/>
					<DropdownSmall displayIndex={displayIndex2}>
						{dropdownList.map((dropdownItem,index)=>{
							return <DropdownItem key={dropdownItem.userId} className={'small'} to={`/my/achievement/${actId}/${dropdownItem.userId}`}>
								{index===0?'학생 선택':dropdownItem.name}
							</DropdownItem>
						})}
					</DropdownSmall>
				</>
				:<></>
			}
			<MyTitle title={'단원별 진척도'}/>
			<div className="tabs">
				<ActProgress to={`/my/achievement/0/${targetUserId}`} active={parseInt(actId)===0} actId={0} userId={targetUserId}>1단원</ActProgress>
				<ActProgress to={`/my/achievement/1/${targetUserId}`} active={parseInt(actId)===1} actId={1} userId={targetUserId}>2단원</ActProgress>
				<ActProgress to={`/my/achievement/2/${targetUserId}`} active={parseInt(actId)===2} actId={2} userId={targetUserId}>3단원</ActProgress>
				<ActProgress to={`/my/achievement/3/${targetUserId}`} active={parseInt(actId)===3} actId={3} userId={targetUserId}>4단원</ActProgress>
			</div>
		</div>
		<div className="myAchievement myLeftBoxAlter">
			{dropdownList
				?<>
					<DropdownSmall displayIndex={displayIndex2}>
						{dropdownList.map((dropdownItem,index)=>{
							return <DropdownItem key={dropdownItem.userId} className={'small'} to={`/my/achievement/${actId}/${dropdownItem.userId}`}>
								{index===0?'학생 선택':dropdownItem.name}
							</DropdownItem>
						})}
					</DropdownSmall>
				</>
				:<></>
			}
			<Dropdown displayIndex={displayIndex}>
				<ActProgress to={`/my/achievement/0/${targetUserId}`} dropdown active={parseInt(actId)===0} actId={0} userId={targetUserId}>1단원</ActProgress>
				<ActProgress to={`/my/achievement/1/${targetUserId}`} dropdown active={parseInt(actId)===1} actId={1} userId={targetUserId}>2단원</ActProgress>
				<ActProgress to={`/my/achievement/2/${targetUserId}`} dropdown active={parseInt(actId)===2} actId={2} userId={targetUserId}>3단원</ActProgress>
				<ActProgress to={`/my/achievement/3/${targetUserId}`} dropdown active={parseInt(actId)===3} actId={3} userId={targetUserId}>4단원</ActProgress>
			</Dropdown>
		</div>
	</>
}

export function Main({handleTabIndex,index,trigger}) {
	const { achievements, user, friends, users } = useContext(userContext);
	const params = useParams();
	const targetUserId = useMemo(()=>{
		// 로그인 안됐음
		if (!user) {
			return null;
		}
		// 접근권한 없는 회원유형
		if (user.userTypeId===USER_TYPE_STUDENT) {
			return user.userId;
		}
		// 비어있으면
		if (isNaN(parseInt(params.targetUserId))) {
			return user.userId;
		}
		// 친구창에 없음
		if (!friends.find((item)=>{
			return Friend.find(item,user.userId,params.targetUserId);
		})) {
			return user.userId;
		}
		return params.targetUserId;
	},[params.targetUserId,user,friends]);
	const targetUserName = useMemo(()=>{
		if (!user) {return null;}
		if (isNaN(parseInt(targetUserId))) {return null;}
		if (parseInt(user.userId)===parseInt(targetUserId)) {return null;}
		let targetUser = users.find((userItem)=>{
			return parseInt(userItem.userId) === parseInt(targetUserId)
		})
		return targetUser?targetUser.name:null;
	},[targetUserId,user]);
	const actId = useMemo(()=>{
		if (!trigger||!trigger.actId) {
			return 0;
		}
		return parseInt(trigger.actId);
	},[trigger]);
	// 리스트 필터링
	const cards = useMemo(()=>{
		if (!achievements||isNaN(parseInt(targetUserId))) {return [];}
		if (!actId&&parseInt(actId)!==0) {return [];}
		return Subject.getSubjectsByActId(actId)
		.map((subject)=>{
			let achievement = achievements.find((item)=>{
				return parseInt(item.subjectId) === parseInt(subject.subjectId)
					&& parseInt(item.userId) === parseInt(targetUserId)
			})
			// console.log(achievement);
			return {
				subjectId:subject.subjectId,
				achievement:achievement
			}
		})
	},[actId,achievements,targetUserId,SUBJECTS]);
	useEffect(()=>{
		handleTabIndex.set(index);
	},[]);
	return <div className="contents">
		<MyTitle title={`진척도${targetUserName?'('+targetUserName+')':''} - ${ACTS[actId]?ACTS[actId].name:''}`}/>
		<div className="myCardContainer">
			{cards.map((item)=>{
				return <SubjectCard key={item.subjectId} type={1} subjectId={item.subjectId} achievement={item.achievement}/>
			})}
		</div>
	</div>
}