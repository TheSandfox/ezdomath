import { useEffect,useMemo,Fragment, useCallback } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';

function Adjust({subjectState,answer,handleCorrect}) {
	const { width, height } = subjectState;
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		handleCorrect.set(String(answer)===String((width/2)*(height/2)*2))
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	const { width, height } = subjectState;
	const vertexes = useMemo(()=>{
		if (!width) {return undefined}
		if (!height) {return undefined}
		return [
			[0,0,height/2],
			[width/2,0,0],
			[0,0,-height/2],
			[-width/2,0,0]
		]
	},[width,height]);
	const origin = useMemo(()=>{
		return [
			0,0,0
		]
	})
	const getMiddlePoints = useCallback((args1,args2)=>{
		return [
			(args1[0]+args2[0])/2,
			(args1[1]+args2[1])/2,
			(args1[2]+args2[2])/2
		]
	});
	const add = useCallback((args1,args2)=>{
		return [
			args1[0]+args2[0],
			args1[1]+args2[1],
			args1[2]+args2[2]
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
						vertexes[0],
						vertexes[1],
						vertexes[2],
						vertexes[3],
						vertexes[0],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				<Line points={[vertexes[2],origin]}
					color={"#0000ff"} // 라인의 색상
					lineWidth={2} // 라인의 두께	
				/>
				<Line points={[vertexes[1],origin]}
					color={"#ff0000"} // 라인의 색상
					lineWidth={2} // 라인의 두께	
				/>
				<Line
					points={[
						vertexes[0],
						origin,
						vertexes[3],
					]} // 라인의 점들
					color={"#999999"} // 라인의 색상
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
			?<>
				<Html position={
					getMiddlePoints(origin,vertexes[2])
				}>
					<div className="subjectText font_main" >
						{getDistance(origin,vertexes[2])}
					</div>
				</Html>
				<Html position={
					getMiddlePoints(vertexes[1],origin)
				}>
					<div className="subjectText font_main" >
						{getDistance(vertexes[1],origin)}
					</div>
				</Html>
			</>
			:<></>
		}
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	const width = useMemo(()=>{
		return 8;
	},[])
	const height = useMemo(()=>{
		return 6;
	},[])
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({
			width,
			height
		});
	},[width,height]);
}

export {
	Adjust,
	Scene,
	Controller
}