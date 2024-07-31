import { useEffect,useMemo,Fragment } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';

function Adjust({subjectState,answer,handleCorrect}) {
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		console.log('회전 '+answer)
		handleCorrect.set(String(answer)==='회전')
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	return <group>
		{/* {
			// 점두개
			vertexes
			?vertexes.map((vertex,index)=>{
				return <Fragment key={index}>
					<Html position={vertex}>
						<div className="subjectVertex">

						</div>
					</Html>
				</Fragment>
			})
			:<></>
		} */}
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({});
	},[]);
}

export {
	Adjust,
	Scene,
	Controller
}