import { useEffect,useMemo,Fragment, useCallback } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';

function Adjust({subjectState,answer,handleCorrect}) {
	const { rad } = subjectState;
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		handleCorrect.set(String(answer)===String(rad*2*4))
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	const {rad} = subjectState;
	const vertexes = useMemo(()=>{
		if (!rad) {return undefined}
		return [
			[-rad,0,rad],
			[rad,0,rad],
			[rad,0,-rad],
			[-rad,0,-rad]
		]
	},[rad]);
	const getMiddlePoints = useCallback((args1,args2)=>{
		return [
			(args1[0]+args2[0])/2,
			(args1[1]+args2[1])/2,
			(args1[2]+args2[2])/2
		]
	});
	const getDistance = useCallback((args1,args2)=>{
		return Math.sqrt(
			(args1[0]-args2[0])**2 +
			(args1[1]-args2[1])**2 +
			(args1[2]-args2[2])**2
		);
	});
	return <group>
		{
			// 선
			vertexes
			?<>
				<Line
					points={[
						vertexes[3],
						vertexes[0],
						vertexes[1],
						vertexes[2],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				<Line points={[vertexes[2],vertexes[3]]}
					color={"#ff0000"} // 라인의 색상
					lineWidth={2} // 라인의 두께	
				/>
			</>
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
		{
			//거리표시
			vertexes
			?<Html position={
				getMiddlePoints(vertexes[2],vertexes[3])
			}>
				<div className="subjectText font_main">
					{getDistance(vertexes[2],vertexes[3])}
				</div>
			</Html>
			:<></>
		}
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	const rad = useMemo(()=>{
		return 2;
	},[])
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({
			rad
		});
	},[rad]);
}

export {
	Adjust,
	Scene,
	Controller
}