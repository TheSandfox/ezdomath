import { Suspense, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SUBJECTS } from '/src/datas/subjects';
import { SubjectScene } from './SubjectScene';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FiSend } from 'react-icons/fi';
import { LuSiren } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import React from 'react';
import './subjectdetail.css';
import { InputText } from '../../generic/Input';
import { ButtonIcon } from '../../generic/Buttons';
import { ACTS } from '../../../datas/acts';
import { userContext } from '../../../App';
import { Bookmark } from '../../generic/subject/SubjectCard';
import * as User from '/src/utils/User'
import { ReportAndError } from '../../generic/play/ReportAndError';

export function SubjectDetail({subjectId}) {
	const navigate = useNavigate();
	const { dispatchAchievements, user, achievements, dispatchQnas, users, friends } = useContext(userContext);
	const answerInputRef = useRef(null);
	const [subjectState,setSubjectState] = useState(null);
	const [answer,setAnswer] = useState(null);
	const [hideZimoon,setHideZimoon] = useState(false);
	const [correct,setCorrect] = useState([null]);
	const [displayHint,setDisplayHint] = useState(false);
	//핸들러
	const handleSubjectState = {
		set:(val)=>{
			setSubjectState(val);
		}
	}
	const handleAnswer = {
		set:(val)=>{
			setAnswer(val);
		}
	}
	const handleHideZimoon = {
		toggle:()=>{
			setHideZimoon(prev=>!prev);
		}
	}
	const handleCorrect = {
		set:(val)=>{
			setCorrect([val]);
		}
	}
	//모달 질문 표시
	const [displayModalQNA,setDisplayModalQNA] = useState(false);
	const [displayModalReport,setDisplayModalReport] = useState(false);
	const modalSubmit = (obj)=>{
		const { type, fromUserId, toUserId, subjectId, content } = obj;
		switch (type) {
		case 'qna':
			dispatchQnas({
				type:'add',
				fromUserId,
				toUserId,
				subjectId,
				content,
			});
			return;
		case 'report':
			// dispathQnas({

			// });
			return;
		}
	}
	const modalClose = (obj)=>{
		const { type } = obj;
		switch (type) {
		case 'qna':
			setDisplayModalQNA(false);
			return;
		case 'report':
			setDisplayModalReport(false);
			return;
		}
	}
	//선생유저
	const myTeacher = useMemo(()=>{
		if (!user) {return null;}
		if (!users) {return null;}
		if (!friends) {return null;}
		let newObj = User.getUserTeacher(user,users,friends)
		console.log(newObj);
		return newObj;
	},[user,users,friends]);
	//타겟문제
	const subject = useMemo(()=>{
		let newObj = SUBJECTS.find((subjectItem)=>{
			return parseInt(subjectItem.subjectId) === parseInt(subjectId)
		})
		return newObj||null;
	},[subjectId]);
	//컨트롤러
	const controllerJSX = useMemo(()=>{
		if (!subject) {return <></>;}
		return <subject.controller
			handleSubjectState={handleSubjectState}
		/>
	},[subject,handleSubjectState,subjectState]);
	//정답계산로직
	const adjustJSX = useMemo(()=>{
		if (!subject) {return <></>;}
		if(subjectState===null) {return <></>;}
		return <subject.adjust
			subjectState={subjectState}
			answer={answer}
			handleCorrect={handleCorrect}
		/>
	},[subject,subjectState,answer])
	//Scene
	const sceneJSX = useMemo(()=>{
		if (!subject) {return <></>;}
		if(subjectState===null) {return <></>;}
		return <subject.scene
			subjectState={subjectState}
		/>
	},[adjustJSX]);
	//이미 푼 문제인지 표시
	const achievementCorrect = useMemo(()=>{
		let checkId;
		if (!achievements) {return false}
		if (user) {
			checkId = user.userId;
		} else {
			checkId = -1;
		}
		if (!subject) {return false}
		return achievements.some((achievementItem)=>{
			return (parseInt(achievementItem.subjectId) === parseInt(subject.subjectId))
				&& (parseInt(achievementItem.userId) === parseInt(checkId))
				&& achievementItem.correct;
		})
	},[achievements,user,subject])
	//정답계산 후 처리
	useEffect(()=>{
		if (!subject) {return;}
		if (correct[0]===null) {return;}
		if (correct[0]) {
			alert('정답입니다!');
		} else {
			alert('오답입니다.');
		}
		let correctTemp = correct[0];
		setAnswer(null);
		setCorrect([null]);
		// 진척도에 기록
		dispatchAchievements({
			type:'add',
			userId:user?user.userId:-1,
			subjectId:subject.subjectId,
			correct:correctTemp
		})
	},[correct,user,subject])
	//답변제출함수
	const sendAnswer = ()=>{
		// document.body.focus();
		// answerInputRef.current.focus();
		setAnswer(answerInputRef.current.value);
		answerInputRef.current.value = '';
	}
	//리턴JSX
	return <div className='subjectDetail'>
		{/* 씬 래퍼 */}
		<div className='subjectSceneWrapper'>
			{/* 씬 */}
			<SubjectScene>
				{adjustJSX}
				{controllerJSX}
				<Suspense fallback={null}>
					{sceneJSX}
				</Suspense>
			</SubjectScene>
			{/* 씬헤더 */}
			<div className='header'>
				<div className='actName font_main'>{subject?ACTS[subject.actId].name:''}</div>
				<div className={`subjectName font_medium${achievementCorrect?' green':''}`}>
					{subject?subject.name:''}
					{achievementCorrect?<FaCheck/>:null}
				</div>
				<Link className='goBack' to={`/play/${subject?subject.actId:''}`}>
					<FaChevronLeft className='icon'/>
				</Link>
				<Bookmark subjectId={subject?subject.subjectId:undefined}></Bookmark>
			</div>
		</div>
		{/* 메인영역 */}
		<div className='mainContext'>
			{/* 상단-지문 */}
			<div className={`zimoonWrapper${hideZimoon?' fold':''}`}>
				<div className='zimoon'>
					<div className='subjectName font_main'>
						{subject?(ACTS[subject.actId].name+' - '+subject.name):''}
					</div>
					<div className='zimoonContent font_medium'>
						{subject?subject.zimoon:''}
					</div>
				</div>
				<div className='btnFold' onClick={handleHideZimoon.toggle}>
					<FaChevronUp className='icon'/>
				</div>
			</div>
			{/* 중단-답변 */}
			<div className='answerInput'>
				<div className='answerTitle font_main'>정답 입력</div>
				<div className='inputs'>
					<div className='labelAndInput'>
						<div className='label'>
							정답:
						</div>
						<InputText outerRef={answerInputRef} onKeyDown={(e)=>{
							if(e.code==='Enter') {
								// sendAnswer();
							}
						}}/>
					</div>
					<div className='buttons'>
						<ButtonIcon icon={<FiSend/>} onClick={()=>{
							sendAnswer();
						}}>제출하기</ButtonIcon>
					</div>
				</div>
			</div>
			{/* 하단-버튼들 */}
			<div className='bottomContext'>
				<div className='buttons'>
					{/* 신고버튼 */}
					<ButtonIcon className={'report'} icon={<LuSiren/>}></ButtonIcon>
					{/* 힌트버튼 */}
					<ButtonIcon 
						className={'hint'} 
						icon={<GoQuestion/>}
						onClick={()=>setDisplayHint(!displayHint)}
					>
						힌트보기
					</ButtonIcon>
					{/* QNA */}
					{myTeacher
						?<ButtonIcon 
							className={'qna'} 
							icon={<FaRegEdit/>}
							onClick={()=>{setDisplayModalQNA(true)}}
						>
							Q&A
						</ButtonIcon>
						:<></>
					}
					{/* 힌트글귀 */}
					{displayHint
						?<div className='fontMain'>
							{subject
								?<>{subject.hint}</>
								:<></>
							}
						</div>
						:<></>
					}
				</div>
			</div>
		</div>
		{displayModalQNA
			?<ReportAndError
				title={'질문하기'}
				type={'qna'}
				user={user}
				teacherUser={myTeacher}
				onClose={modalClose}
				onSubmit={modalSubmit}
				actId={subject.actId||0}
				subjectId={subject.subjectId||0}
			/>
			:<></>
		}
	</div>
}