import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';

function Helpers() {
	const { scene } = useThree();
	useEffect(()=>{
		if(!scene) {
			return;
		}
		// AxesHelper 생성 및 투명도 설정
		const axesHelper = new THREE.AxesHelper(48);
		axesHelper.material.transparent = true;
		axesHelper.material.opacity = 0.1; // 투명도 설정
		scene.add(axesHelper);
	
		// GridHelper 생성 및 투명도 설정
		const gridHelper = new THREE.GridHelper(16, 16);
		gridHelper.material.transparent = true;
		gridHelper.material.opacity = 0.25; // 투명도 설정
		gridHelper.position.set(0, -0.01, 0);
		scene.add(gridHelper);
	
		// Cleanup on unmount
		return () => {
			scene.remove(axesHelper);
			scene.remove(gridHelper);
		};
	},[scene])
}

export function SubjectScene({children}) {
	return <Canvas
		className='subjectScene'
		orthographic	
		camera={{
		near:0.05,
		far:400,
		zoom:100,
		position:[-25,25,25]
	}}
	>
		{/* 앰비언트 */}
		<ambientLight
			intensity={0.3}
		/>
		{/* 주광 */}
		<directionalLight
			position={[-25,25,0]}
			intensity={1.0}
			// castShadow={false}
			// shadow-mapSize-width={1024}
			// shadow-mapSize-height={1024}
		/>
		{/* 보조광 */}
		<directionalLight
			position={[-25,25,25]}
			intensity={0.3}
			// castShadow={false}
			// shadow-mapSize-width={1024}
			// shadow-mapSize-height={1024}
		/>
		{/* 액시스 */}
		{/* <axesHelper args={[48,48,48]} /> */}
		{/* 그리드 */}
		{/* <gridHelper args={[16, 16]} position={[0,-0.01,0]}/> */}
		<Helpers/>
		{/* 컨트롤 */}
		<OrbitControls/>
		{children}
	</Canvas>
}