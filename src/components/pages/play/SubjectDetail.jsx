import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SUBJECTS } from '/src/datas/subjects';
import { SubjectScene } from './SubjectScene';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FiSend } from 'react-icons/fi';
import { LuSiren } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import React from 'react';
import './subjectdetail.css';
import { InputText } from '../../generic/Input';
import { ButtonIcon } from '../../generic/Buttons';
import { ACTS } from '../../../datas/acts';

export function SubjectDetail({subjectId}) {
	const answerInputRef = useRef(null);
	const [subjectState,setSubjectState] = useState(null);
	const [answer,setAnswer] = useState(null);
	const [hideZimoon,setHideZimoon] = useState(false);
	const [correct,setCorrect] = useState([null]);
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
	//타겟문제
	const subject = useMemo(()=>{
		if (SUBJECTS[subjectId]) {
			return SUBJECTS[subjectId];
		} else {
			return null;
		}
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
	//정답계산 후 처리
	useEffect(()=>{
		if (correct[0]===null) {return;}
		if (correct[0]) {
			alert('골든 정답이다.');
		} else {
			alert('형편없군, 오답이다.');
		}
		setAnswer(null);
	},[correct])
	//답변제출함수
	const sendAnswer = ()=>{
		handleAnswer.set(answerInputRef.current.value);
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
				<div className='subjectName font_medium'>{subject?subject.name:''}</div>
				<div className='goBack'>
					<FaChevronLeft className='icon'/>
				</div>
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
								sendAnswer();
							}
						}}/>
					</div>
				</div>
				<div className='buttons'>
					<ButtonIcon icon={<FiSend/>} onClick={()=>{
						sendAnswer();
					}}>제출하기</ButtonIcon>
				</div>
			</div>
			{/* 하단-버튼들 */}
			<div className='bottomContext'>
				<div className='buttons'>
					{/* 신고버튼 */}
					<ButtonIcon className={'report'} icon={<LuSiren/>}></ButtonIcon>
					{/* 힌트버튼 */}
					<ButtonIcon className={'hint'} icon={<GoQuestion/>}>힌트보기</ButtonIcon>
					{/* QNA */}
					<ButtonIcon className={'qna'} icon={<FaRegEdit/>}>질문하기</ButtonIcon>
				</div>
			</div>
		</div>
	</div>
}