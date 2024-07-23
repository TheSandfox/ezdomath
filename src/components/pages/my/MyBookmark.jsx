import { useContext, useEffect, useMemo, useReducer, useState } from "react"
import { MyTitle } from "./PageMy"
import { SubjectCard } from "../../generic/subject/SubjectCard"
import './mybookmark.css';
import { userContext } from "../../../App";
import { bookmarkDefault, bookmarkReducer } from "../../../datas/bookmarks";
import { SUBJECTS } from "../../../datas/subjects";

export function Left({handleTrigger}) {
	const [actIndex,setActIndex] = useState(-1);
	useEffect(()=>{
		handleTrigger.trigger({
			target:'bookmark',
			actIndex:actIndex
		})
	},[actIndex]);
	return <>
	</>
}

export function Main({handleTabIndex,index,trigger}) {
	const [ bookmark,dispatchBookmark ] = useReducer(bookmarkReducer,bookmarkDefault);
	const { user } = useContext(userContext);
	const cards = useMemo(()=>{
		if (!user) {
			return [];
		}
		return bookmark
		.filter((item)=>{
			// 북마크에 존재
			return parseInt(item.userId) === parseInt(user.userId);
		})
		.filter((item)=>{
			// 액트인덱스 검증
			return (!trigger.actIndex||trigger.actIndex<0) 
				|| parseInt(SUBJECTS[item.subjectId].actId) === parseInt(trigger.actIndex);
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
				return <SubjectCard key={subjectId} type={0} subjectId={subjectId} bookmarkActive={true}/>
			})}
		</div>
	</div>
}