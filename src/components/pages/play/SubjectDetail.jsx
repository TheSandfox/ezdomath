import { Suspense, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SUBJECTS } from '/src/datas/subjects';
import { SubjectScene } from './SubjectScene';
import React from 'react';

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