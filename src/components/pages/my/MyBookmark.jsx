import { useContext, useEffect, useMemo, useReducer, useState } from "react"
import { MyTitle } from "./PageMy"
import { SubjectCard } from "../../generic/subject/SubjectCard"
import './mybookmark.css';
import { userContext } from "../../../App";
import { SUBJECTS } from "../../../datas/subjects";
import { ButtonTab } from "../../generic/Buttons";
import { useParams } from "react-router-dom";

export function Left({handleTrigger}) {
	const params = useParams();
	const actId = params.actId?params.actId:'all';
	useEffect(()=>{
		let newActId = actId?actId:'all';
		handleTrigger.trigger({
			target:'bookmark',
			actId:newActId
		})
	},[actId]);
	return <div className="myBookmarkActSelector">
		<MyTitle title={'단원별 분류'}/>
		<div className="tabs">
			<ButtonTab icon={<></>} to={'/my/bookmark/all'} active={actId==='all'}>전체</ButtonTab>
			<ButtonTab icon={<></>} to={'/my/bookmark/0'} active={parseInt(actId)===0}>1단원</ButtonTab>
			<ButtonTab icon={<></>} to={'/my/bookmark/1'} active={parseInt(actId)===1}>2단원</ButtonTab>
			<ButtonTab icon={<></>} to={'/my/bookmark/2'} active={parseInt(actId)===2}>3단원</ButtonTab>
			<ButtonTab icon={<></>} to={'/my/bookmark/3'} active={parseInt(actId)===3}>4단원</ButtonTab>
		</div>
	</div>
}

export function Main({handleTabIndex,index,trigger}) {
	const { user, bookmarks, dispatchBookmarks } = useContext(userContext);
	const cards = useMemo(()=>{
		if (!user) {
			return [];
		}
		return bookmarks
		.filter((item)=>{
			// 북마크에 존재
			return parseInt(item.userId) === parseInt(user.userId);
		})
		.filter((item)=>{
			// 액트인덱스 검증
			return (!trigger.actId||trigger.actId==='all') 
				|| parseInt(SUBJECTS[item.subjectId].actId) === parseInt(trigger.actId);
		})
		.map((item)=>{
			return item.subjectId;
		});
	},[user,trigger]);
	useEffect(()=>{
		handleTabIndex.set(index);
	},[]);
	return <div className="contents myBookmark">
		<MyTitle title={'북마크'}/>
		<div className="myBookmarkCardContainer">
			{cards.map((subjectId)=>{
				return <SubjectCard key={subjectId} type={0} subjectId={subjectId}/>
			})}
		</div>
	</div>
}