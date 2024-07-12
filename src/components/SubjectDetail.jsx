import { Suspense, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { subjects } from '/src/datas/subjects';
import { SubjectScene } from './SubjectScene';
import React from 'react';

export function SubjectDetail() {
	const { subjectId } = useParams();
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
		if (!subjects[subjectId]) {return <></>;}
		return React.cloneElement(subjects[subjectId].controller,{
			handleSubjectState:handleSubjectState
		});
	},[subjectId,handleSubjectState]);
	//정답계산로직
	const adjustJSX = useMemo(()=>{
		if (!subjects[subjectId]) {return <></>;}
		if(subjectState===null) {return <></>;}
		return React.cloneElement(subjects[subjectId].adjust,{
			subjectState:subjectState,
			answer:answer,
			handleAnswer:handleAnswer
		});
	},[controllerJSX])
	//Scene
	const sceneJSX = useMemo(()=>{
		if (!subjects[subjectId]) {return <></>;}
		if(subjectState===null) {return <></>;}
		return React.cloneElement(subjects[subjectId].scene,{
			subjectState:subjectState
		});
	},[adjustJSX]);
	//디버그용
	useEffect(()=>{
		console.log(subjectState);
	},[subjectState])
	//리턴JSX
	return <>
		<SubjectScene>
			{}
			{controllerJSX}
			<Suspense fallback={null}>
				{sceneJSX}
			</Suspense>
		</SubjectScene>
	</>
}