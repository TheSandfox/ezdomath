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
	const meshColor = useMemo(()=>{
		const root = getComputedStyle(document.documentElement);
		return root.getPropertyValue('--color_main').trim();
	},[])
	return <group position={[0, 0.5, 0]}>
		<mesh>
			<boxGeometry/>
			<meshStandardMaterial 
				color={meshColor}
			/>
		</mesh>
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