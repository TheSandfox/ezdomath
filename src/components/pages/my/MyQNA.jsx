import { useContext, useEffect, useMemo, useRef, useState } from "react"

import './myqna.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputText, InputTextArea } from "../../generic/Input";
import { Button, ButtonIcon } from "../../generic/Buttons";

import { userContext } from "../../../App";
import { QNAWidget } from "./QNAWidget";
import { QNAMessage } from "./QNAMessage";

import * as User from '/src/utils/User'

import { FiSend } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";

import { SUBJECTS } from "../../../datas/subjects";
import { ACTS } from "../../../datas/acts";
import { SubjectSelector } from "../../generic/subject/SubjectSelector";

export function Left({}) {
	return <></>
}

export function Main({handleTabIndex,index}) {
	const navigate = useNavigate();
	const inputTextRef = useRef(null);
	const inputChatRef = useRef(null);
	const middleWrapperRef = useRef(null);
	const { user, qnas, friends, users, dispatchQnas } = useContext(userContext);
	const { userId, subjectId } = useParams();
	// 검색(리스트)
	const [searchValue, setSearchValue] = useState('');
	const handleSearchValue = {
		set:()=>{
			if (inputTextRef.current) {
				setSearchValue(inputTextRef.current.value);
			}
		},
		reset:()=>{
			setSearchValue('');
			if (inputTextRef.current) {
				inputTextRef.current.value = '';
			}
		}
	}
	// qna 생성
	const sendQNA = ()=>{
		if (inputChatRef.current.value.length<=0) {return;}
		dispatchQnas({
			type:'add',
			fromUserId:user.userId,
			toUserId:userId,
			subjectId:subjectId||'',
			content:inputChatRef.current.value,
		});
		inputChatRef.current.value = ''
	}
	const targetSubject = useMemo(()=>{
		if (!subjectId) {return null;}
		let newObj = SUBJECTS.find((subjectItem)=>{
			return parseInt(subjectItem.subjectId)===parseInt(subjectId)
		})
		return newObj?newObj:null;
	},[subjectId]);
	// 타겟문제 변경
	const targetSubjectChange = (targetSubjectId)=>{
		navigate(`/my/qna/${userId}/${targetSubjectId}`)
	}
	// 모드
	const mode = useMemo(()=>{
		// 상대 id가 없음
		if (isNaN(userId)) {return 'list';}
		// 유저정보없음
		if (!user) {return 'list';}
		// 프렌즈 유효하지않음
		if (!friends) {return 'list';}
		// 해당 유저가 내 친구가 아님
		if (!friends.find((friendItem)=>{
			return ( parseInt(friendItem.userId1) === parseInt(user.userId) 
			|| parseInt(friendItem.userId2) === parseInt(user.userId) )
			&& ( parseInt(friendItem.userId1) === parseInt(userId) 
			|| parseInt(friendItem.userId2) === parseInt(userId) )
		})) {
			return 'list';
		} else {
			return 'dm';
		}
		
	},[userId,user,friends]);
	// 모달 문제셀렉트
	const [displaySubjectSelect,setDisplaySubjectSelect] = useState(false);
	const handleDisplaySubjectSelect = {
		close:()=>{
			setDisplaySubjectSelect(false);
		},
		open:()=>{
			setDisplaySubjectSelect(true);
		}
	}
	// 상대유저
	const targetUser = useMemo(()=>{
		// 상대 id가 없음
		if (isNaN(userId)) {return null;}
		return users.find((userItem)=>{
			return parseInt(userItem.userId) === parseInt(userId);
		})
	},[userId,users])
	// 하단구성물
	const bottomJSX = useMemo(()=>{
		switch(mode) {
		case 'dm':
			// 개인메시지
			return  <>
				{/* 문제썸네일 */}
				<div className={`subjectInfo${targetSubject?'':' noSubject'}`}>
					{targetSubject
						?<>
							{/* 문제객체있음 */}
							{/* 썸 */}
							<div className="subjectImg">
								<img src={targetSubject.thumb} alt={targetSubject.name}/>
							</div>
							{/* 이름&버튼 */}
							<div className="rightContext">
								{/* 단원&문제이름 */}
								<div className="actNameAndSubjectName ">
									<div className="font_main actName">
									{ACTS[targetSubject.subjectId].name}
									</div>
									<div className="font_main subjectName">
									{targetSubject.name}
									</div>
								</div>
								{/* 찾기&초기화버튼 */}
								<div className="subjectButtons">
									<ButtonIcon 
										icon={<FaExchangeAlt/>}
										onClick={
											handleDisplaySubjectSelect.open
										}
									/>
									<ButtonIcon 
										icon={<RiCloseLargeFill/>}
										onClick={()=>{
											navigate(`/my/qna/${userId}`);
										}}
									/>
								</div>
							</div>
						</>
						:<>
							{/* 문제객체없음 */}
							<div className="noSubjectInfo font_main">
								문제가 선택되지 않았습니다.<br/>
								메세지 작성 시 다이렉트 메세지가 전송됩니다.
							</div>
							{/* 문제찾기버튼 */}
							<ButtonIcon 
								icon={
									<FaExchangeAlt/>
								}
								onClick={
									handleDisplaySubjectSelect.open
								}
							/>
						</>
					}
				</div>
				{/* 채팅창 */}
				<div className="chatField">
					{/* 메세지입력창 */}
					<InputText
						placeholder={'메세지를 입력하세요...'} 
						outerRef={inputChatRef}
						onKeyDown={(e)=>{
							if (e.key==='Enter') {
								sendQNA();
							}
						}}
					/>
					{/* 메세지 전송 */}
					<ButtonIcon icon={<FaSearch/>}
						onClick={()=>{
							sendQNA();
						}}
					/>
				</div>
				{/* 모달 문제셀렉트 */}
				{displaySubjectSelect
					?<SubjectSelector 
						onClose={handleDisplaySubjectSelect.close} 
						onSubmit={targetSubjectChange}
					/>
					:<></>
				}
			</>
		case 'list':
			// 채팅리스트
			return  <>
				<div className="searchField">
					{/* 검색창 */}
					<InputText 
						placeholder={'학생이름검색'} 
						outerRef={inputTextRef}
						onKeyDown={(e)=>{
							if (e.key=='Enter') {
								handleSearchValue.set();
							}
						}}
					/>
					<ButtonIcon icon={<FaSearch/>}
						onClick={
							handleSearchValue.set
						}
					/>
					<ButtonIcon icon={<RiCloseLargeFill/>}
						onClick={
							handleSearchValue.reset
						}
					/>
				</div>
			</>
		}
	},[mode,subjectId,displaySubjectSelect]);
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
		.filter((friendItem)=>{
			// 검색창 필터링
			let opponent = parseInt(friendItem.userId1) === parseInt(user.userId)
				?users.find(userItem=>parseInt(userItem.userId)===parseInt(friendItem.userId2))
				:users.find(userItem=>parseInt(userItem.userId)===parseInt(friendItem.userId1))
			return opponent
			&& opponent.name.includes(searchValue);
		})
		// console.log(filteredFriends);
		return filteredFriends.map((friendItem)=>{
			return <QNAWidget friend={friendItem} key={String(friendItem.userId1)+'/'+String(friendItem.userId2)}/>
		})
	},[userId,mode,friends,user,searchValue,users]);
	// qna메세지들
	const qnaMessages = useMemo(()=>{
		// dm모드가 아님
		if (mode!=='dm') {return [];}
		// 유저정보없음
		if (!user) {return [];}
		// 프렌즈 유효하지않음
		if (!friends) {return [];}
		// QNA리스트 유효하지 않음
		if (!qnas) {return [];}
		setTimeout(()=>{
			let element = middleWrapperRef.current;
			element.scrollTop = element.scrollHeight;
		},100)
		return qnas.filter((qnaItem)=>{
			return (parseInt(qnaItem.toUserId) === parseInt(user.userId)
				|| parseInt(qnaItem.fromUserId) === parseInt(user.userId))
				&& (parseInt(qnaItem.toUserId) === parseInt(userId)
				|| parseInt(qnaItem.fromUserId) === parseInt(userId))
		})
		.map((qnaItem)=>{
			return <QNAMessage qna={qnaItem} key={qnaItem.qnaId} my={
				parseInt(qnaItem.fromUserId)===parseInt(user.userId)
			} conatinerRef={middleWrapperRef}/>
		})
 	},[userId,user,mode,friends,qnas])
	// 탭인덱스
	useEffect(()=>{
		handleTabIndex.set(index);
	},[])
	return <div className="contents">
		<div className="myQNA">
			<div className="header">
				{/* 상단 블랙박스 뒤로가기버튼 */}
				{
					mode==='dm'
					?<Link to={'/my/qna'} className={'btnBack'}>
						<FaChevronLeft className="icon"/>
					</Link>
					:<></>
				}
				{/* 상단 블랙박스 이름 */}
				<div className="font_medium">
					{mode==='dm'
						?(targetUser?targetUser.name+User.getUserIdString(targetUser.userId):'')
						:'Q&A목록'
					}
				</div>
			</div>
			{/* 중단컨텐츠 */}
			<div className="middleWrapper" ref={middleWrapperRef}>
				<div className="middleContents">
					{mode==='list'
						?<div className="myQNAWidgets">{qnaWidgets}</div>
						:<div className="myQNAMessages">{qnaMessages}</div>
					}
				</div>
			</div>
			{/* 하단컨텐츠 */}
			<div className="bottom">
				{bottomJSX}
			</div>
		</div>
	</div>
}