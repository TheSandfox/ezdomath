import { useContext, useEffect, useMemo, useState } from "react"
import { MyTitle } from "./PageMy"
import { SubjectCard } from "../../generic/subject/SubjectCard";
import { useParams } from "react-router-dom";
import * as Subject from '/src/utils/Subject'
import * as Friend from '/src/utils/Friend'
import { userContext } from "../../../App";
import { ACTS } from "../../../datas/acts";
import { ButtonTab } from "../../generic/Buttons";
import { ActProgress } from "../../generic/act/ActProgress";

import './myachievement.css';
import { Dropdown } from "../../generic/Dropdown";
import { USER_TYPE_STUDENT } from "../../../datas/usertypes";
import { SUBJECTS } from "../../../datas/subjects";

export function Left({handleTrigger}) {
	const { user, friends } = useContext(userContext);
	const params = useParams();
	const actId = params.actId?params.actId:'0';
	const targetUserId = useMemo(()=>{
		// 비어있으면
		if (!params.targetUserId) {
			return null;
		}
		// 로그인 안됐음
		if (!user) {
			return null;
		}
		// 접근권한 없는 회원유형
		if (user.userTypeId===USER_TYPE_STUDENT) {
			return null;
		}
		// 친구창에 없음
		if (!friends.find((item)=>{
			return Friend.find(item,user.userId,params.targetUserId);
		})) {
			return null;
		}
		return params.targetUserId;
	},[params.targetUserId,user,friends]);
	useEffect(()=>{
		let newActId = actId?actId:'0';
		handleTrigger.trigger({
			target:'achievement',
			actId:newActId
		})
	},[actId]);
	const displayIndex = useMemo(()=>{
		return parseInt(actId);
	},[actId]);
	return <>
		<div className="myAchievement myLeftBox">
			<MyTitle title={'단원별 진척도'}/>
			<div className="tabs">
				<ActProgress to={'/my/achievement/0'} active={parseInt(actId)===0} actId={0} targetUserId={targetUserId}>1단원</ActProgress>
				<ActProgress to={'/my/achievement/1'} active={parseInt(actId)===1} actId={1} targetUserId={targetUserId}>2단원</ActProgress>
				<ActProgress to={'/my/achievement/2'} active={parseInt(actId)===2} actId={2} targetUserId={targetUserId}>3단원</ActProgress>
				<ActProgress to={'/my/achievement/3'} active={parseInt(actId)===3} actId={3} targetUserId={targetUserId}>4단원</ActProgress>
			</div>
		</div>
		<div className="myAchievement myLeftBoxAlter">
			<Dropdown displayIndex={displayIndex}>
				<ActProgress to={'/my/achievement/0'} dropdown active={parseInt(actId)===0} actId={0} targetUserId={targetUserId}>1단원</ActProgress>
				<ActProgress to={'/my/achievement/1'} dropdown active={parseInt(actId)===1} actId={1} targetUserId={targetUserId}>2단원</ActProgress>
				<ActProgress to={'/my/achievement/2'} dropdown active={parseInt(actId)===2} actId={2} targetUserId={targetUserId}>3단원</ActProgress>
				<ActProgress to={'/my/achievement/3'} dropdown active={parseInt(actId)===3} actId={3} targetUserId={targetUserId}>4단원</ActProgress>
			</Dropdown>
		</div>
	</>
}

export function Main({handleTabIndex,index,trigger}) {
	const { achievements, user } = useContext(userContext);
	const targetUser = useMemo(()=>{
		if (!user) {
			return null;
		}
		return user;
	},[user]);
	const actId = useMemo(()=>{
		if (!trigger||!trigger.actId) {
			return 0;
		}
		return parseInt(trigger.actId);
	},[trigger]);
	// 리스트 필터링
	const cards = useMemo(()=>{
		if (!achievements||!targetUser) {return [];}
		if (!actId&&parseInt(actId)!==0) {return [];}
		console.log("얍");
		return Subject.getSubjectsByActId(actId)
		.map((subject)=>{
			let achievement = achievements.find((item)=>{
				return parseInt(item.subjectId) === parseInt(subject.subjectId)
					&& parseInt(item.userId) === parseInt(targetUser.userId)
			})
			// console.log(achievement);
			return {
				subjectId:subject.subjectId,
				achievement:achievement
			}
		})
	},[actId,achievements,targetUser,SUBJECTS]);
	useEffect(()=>{
		handleTabIndex.set(index);
	},[]);
	return <div className="contents">
		<MyTitle title={`진척도 - ${ACTS[actId]?ACTS[actId].name:''}`}/>
		<div className="myCardContainer">
			{cards.map((item)=>{
				return <SubjectCard key={item.subjectId} type={2} subjectId={item.subjectId} achievement={item.achievement}/>
			})}
		</div>
	</div>
}