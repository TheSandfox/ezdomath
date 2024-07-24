import { useContext, useEffect, useMemo } from "react"
import { MyTitle } from "./PageMy"
import { SubjectCard } from "../../generic/subject/SubjectCard";
import { useParams } from "react-router-dom";
import * as Subject from '/src/utils/Subject'
import { userContext } from "../../../App";
import { ACTS } from "../../../datas/acts";
import { ButtonTab } from "../../generic/Buttons";
import { ActProgress } from "../../generic/act/ActProgress";

import './myachievement.css';

export function Left({handleTrigger}) {
	const params = useParams();
	const actId = params.actId?params.actId:'0';
	useEffect(()=>{
		let newActId = actId?actId:'0';
		handleTrigger.trigger({
			target:'achievement',
			actId:newActId
		})
	},[actId]);
	return <div className="myAchievementActSelector myLeftBox">
		<MyTitle title={'단원별 진척도'}/>
		<div className="tabs">
			<ActProgress to={'/my/achievement/0'} active={parseInt(actId)===0} actId={0}>1단원</ActProgress>
			<ActProgress to={'/my/achievement/1'} active={parseInt(actId)===1} actId={1}>2단원</ActProgress>
			<ActProgress to={'/my/achievement/2'} active={parseInt(actId)===2} actId={2}>3단원</ActProgress>
			<ActProgress to={'/my/achievement/3'} active={parseInt(actId)===3} actId={3}>4단원</ActProgress>
		</div>
	</div>
}

export function Main({handleTabIndex,index,trigger}) {
	const { achievements, user } = useContext(userContext);
	const actId = useMemo(()=>{
		if (!trigger||!trigger.actId) {
			return 0;
		}
		return parseInt(trigger.actId);
	},[trigger]);
	// 리스트 필터링
	const cards = useMemo(()=>{
		if (!achievements||!user) {return [];}
		if (!actId&&parseInt(actId)!==0) {return [];}
		return Subject.getSubjectsByActId(actId)
		.map((subject)=>{
			let achievement = achievements.find((item)=>{
				return parseInt(item.subjectId) === parseInt(subject.subjectId)
					&& parseInt(item.userId) === parseInt(user.userId)
			})
			// console.log(achievement);
			return {
				subjectId:subject.subjectId,
				achievement:achievement
			}
		})
	},[actId,achievements,user]);
	useEffect(()=>{
		handleTabIndex.set(index);
	},[]);
	return <div className="contents">
		<MyTitle title={`진척도 - ${ACTS[actId]?ACTS[actId].name:''}`}/>
		<div className="myCardContainer">
			{cards.map((item)=>{
				return <SubjectCard key={item.subjectId} type={1} subjectId={item.subjectId} achievement={item.achievement}/>
			})}
		</div>
	</div>
}