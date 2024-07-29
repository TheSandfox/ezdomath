import { Suspense, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SUBJECTS } from '/src/datas/subjects';
import { SubjectScene } from './SubjectScene';
import { FaChevronLeft } from "react-icons/fa6";
import React from 'react';
import './subjectdetail.css';
import { InputText } from '../../generic/Input';

export function SubjectDetail({subjectId}) {
	// const { subjectId } = useParams();
	const [subjectState,setSubjectState] = useState(null);
	const [answer,setAnswer] = useState(null);
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
	//컨트롤러
	const controllerJSX = useMemo(()=>{
		if (!SUBJECTS[subjectId]) {return <></>;}
		return React.cloneElement(SUBJECTS[subjectId].controller,{
			handleSubjectState:handleSubjectState
		});
	},[subjectId,handleSubjectState]);
	//정답계산로직
	const adjustJSX = useMemo(()=>{
		if (!SUBJECTS[subjectId]) {return <></>;}
		if(subjectState===null) {return <></>;}
		return React.cloneElement(SUBJECTS[subjectId].adjust,{
			subjectState:subjectState,
			answer:answer,
			handleAnswer:handleAnswer
		});
	},[controllerJSX])
	//Scene
	const sceneJSX = useMemo(()=>{
		if (!SUBJECTS[subjectId]) {return <></>;}
		if(subjectState===null) {return <></>;}
		return React.cloneElement(SUBJECTS[subjectId].scene,{
			subjectState:subjectState
		});
	},[adjustJSX]);
	//디버그용
	useEffect(()=>{
		console.log(subjectState);
	},[subjectState])
	//리턴JSX
	return <div className='subjectDetail'>
		{/* 씬 래퍼 */}
		<div className='subjectSceneWrapper'>
			{/* 씬 */}
			<SubjectScene>
				{}
				{controllerJSX}
				<Suspense fallback={null}>
					{sceneJSX}
				</Suspense>
			</SubjectScene>
			{/* 씬헤더 */}
			<div className='header'>
				<div className='actName font_main'>{}</div>
				<div className='subjectName font_medium'>{}</div>
				<div className='goBack'>
					<FaChevronLeft className='icon'/>
				</div>
			</div>
		</div>
		{/* 메인영역 */}
		<div className='mainContext'>
			{/* 상단-지문 */}
			<div className='zimoonWrapper'>
				<div className='zimoon'>
					<div className='subjectName font_main'>
						{'단원이름 + 문제이름'}
					</div>
					<div className='zimoonContent font_medium'>
						{'문제의 지문이다'}
					</div>
				</div>
			</div>
			{/* 중단-답변 */}
			<div className='answerInput'>
				<div className='answerTitle font_main'>정답 입력</div>
				<div className='inputs'>
					<div className='labelAndInput'>
						<div className='label'>
							정답1
						</div>
						<InputText/>
					</div>
				</div>
			</div>
			{/* 하단-버튼들 */}
			<div className='bottomContext'>

			</div>
		</div>
	</div>
}