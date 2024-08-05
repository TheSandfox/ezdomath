import { useEffect,useMemo,Fragment } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';

function Adjust({subjectState,answer,handleCorrect}) {
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		handleCorrect.set(String(answer)===String(subjectState.vertexes.length))
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	const {vertexes} = subjectState;
	return <group>
		{
			// 선
			vertexes
			?<Line
				points={[...vertexes]} // 라인의 점들
				color="#1A3659" // 라인의 색상
				lineWidth={2} // 라인의 두께
		  	/>
			:<></>
		}
		{
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
		}
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	const vertexes = useMemo(()=>{
		return [
			[0,0,0],
			[2,0,2],
			[4,0,0]
		]
	},[])
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({
			vertexes
		});
	},[vertexes]);
}

export {
	Adjust,
	Scene,
	Controller
}