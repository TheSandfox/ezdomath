import { useEffect,useMemo,Fragment, useCallback } from "react";
import { Html, Line } from '@react-three/drei';
import '/src/components/generic/subject/subject.css';

function Adjust({subjectState,answer,handleCorrect}) {
	const { width, height, depth } = subjectState;
	useEffect(()=>{
		if (!answer) {return;}
		if (!handleCorrect) {return;}
		handleCorrect.set(String(answer)===String(width*height*depth))
	},[answer,handleCorrect]);
	return <>
	</>
}

// Scene
function Scene({subjectState}) {
	const { width, height, depth } = subjectState;
	const vertexes = useMemo(()=>{
		if (!width) {return undefined}
		if (!height) {return undefined}
		return [
			[-width/2,0,height/2],
			[width/2,0,height/2],
			[width/2,0,-height/2],
			[-width/2,0,-height/2],
			[-width/2,depth,height/2],
			[width/2,depth,height/2],
			[width/2,depth,-height/2],
			[-width/2,depth,-height/2],
		]
	},[width,height,depth]);
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
				<Line
					points={[
						vertexes[7],
						vertexes[4],
						vertexes[5],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				<Line
					points={[
						vertexes[3],
						vertexes[7],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				<Line
					points={[
						vertexes[1],
						vertexes[5],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				<Line
					points={[
						vertexes[0],
						vertexes[4],
					]} // 라인의 점들
					color={"#1A3659"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				{/* 빨 */}
				<Line
					points={[
						vertexes[6],
						vertexes[7],
					]} // 라인의 점들
					color={"#ff0000"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				{/* 파 */}
				<Line
					points={[
						vertexes[5],
						vertexes[6],
					]} // 라인의 점들
					color={"#0000ff"} // 라인의 색상
					lineWidth={2} // 라인의 두께
				/>
				{/* 초 */}
				<Line
					points={[
						vertexes[2],
						vertexes[6],
					]} // 라인의 점들
					color={"#00ff00"} // 라인의 색상
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
					getMiddlePoints(vertexes[6],vertexes[7])
				}>
					<div className="subjectText font_main" >
						{getDistance(vertexes[6],vertexes[7])}
					</div>
				</Html>
				<Html position={
					getMiddlePoints(vertexes[5],vertexes[6])
				}>
					<div className="subjectText font_main" >
						{getDistance(vertexes[5],vertexes[6])}
					</div>
				</Html>
				<Html position={
					getMiddlePoints(vertexes[2],vertexes[6])
				}>
					<div className="subjectText font_main" >
						{getDistance(vertexes[2],vertexes[6])}
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
		return 4;
	},[])
	const height = useMemo(()=>{
		return 4;
	},[])
	const depth = useMemo(()=>{
		return 3;
	},[])
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({
			width,
			height,
			depth
		});
	},[width,height,depth]);
}

export {
	Adjust,
	Scene,
	Controller
}