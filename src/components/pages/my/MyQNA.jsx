import { useContext, useEffect, useMemo } from "react"

import './myqna.css';
import { useParams } from "react-router-dom";
import { InputText } from "../../generic/Input";
import { ButtonIcon } from "../../generic/Buttons";

import { FiSend } from "react-icons/fi";
import { userContext } from "../../../App";
import { QNAWidget } from "./QNAWidget";

export function Left({}) {
	return <></>
}

export function Main({handleTabIndex,index}) {
	const { user, qnas, friends } = useContext(userContext);
	const { userId } = useParams();
	const mode = useMemo(()=>{
		if (!isNaN(userId)) {
			// 개인채팅
			return 'dm'
		} else {
			// 채팅리스트
			return 'list'
		}
	},[userId])
	// 하단구성물
	const bottomJSX = useMemo(()=>{
		switch(mode) {
		case 'dm':
			// 개인메시지
			return  <>
				
			</>
		case 'list':
			// 채팅리스트
			return  <>
				<div className="searchField">
					<InputText placeholder={'학생이름검색'}/>
					<ButtonIcon icon={
						<FiSend/>
					}/>
				</div>
			</>
		}
	},[mode]);
	// qna위젯들
	const qnaWidgets = useMemo(()=>{
		// 리스트 모드가 아님
		if (mode!=='list') {return [];}
		// 유저정보없음
		if (!user) {return [];}
		// 프렌즈 유효하지않음
		if (!friends) {return [];}
		// 일단 친구목록만 추려보기
		let filteredFriends = friends.filter((friendItem)=>{
			return parseInt(friendItem.userId1)===parseInt(user.userId)
				||parseInt(friendItem.userId2)===parseInt(user.userId)
		})
		console.log(filteredFriends);
		return filteredFriends.map((friendItem)=>{
			return <QNAWidget friend={friendItem} key={String(friendItem.userId1)+'/'+String(friendItem.userId2)}/>
		})
	},[userId,user,mode,friends])
	// 탭인덱스
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		<div className="myQNA">
			<div className="header">
				<div className="font_medium">
					{!isNaN(userId)
						?''
						:'Q&A목록'
					}
				</div>
			</div>
			<div className="middleWrapper">
				<div className="middleContents">
					{qnaWidgets}
				</div>
			</div>
			<div className="bottom">
				{bottomJSX}
			</div>
		</div>
	</div>
}