import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function SubjectScene({children}) {
	return <Canvas
		className='subjectScene'
		style={{
			width:'75%',
			
		}}
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
		<axesHelper args={[48,48,48]}/>
		{/* 그리드 */}
		<gridHelper args={[16, 16]}/>
		{/* 컨트롤 */}
		<OrbitControls/>
		{children}
	</Canvas>
}