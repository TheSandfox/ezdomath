import { useEffect,useMemo,Fragment } from "react";

function Adjust({subjectState,answer,handleAnswer}) {
	return <></>
}

// Scene
function Scene({subjectState}) {
	const {unit, mapSize, args, size} = subjectState;
	// console.log(subjectState);
	return <group>
		{/* 큐브뿌리기 */}
		{args.map((row,i)=>{
			return row.map((count,j)=>{
				let arr = new Array(count);
				arr.fill(null);
				return arr.map((val,k)=>{
					return <Fragment key={(i*mapSize^2)+(j*mapSize)+(k)}>
						{/* 메쉬 */}
						<mesh 
							position={[
								-(i*unit)-(0.5*unit)+(size.height*unit*0.5),//+(size.width*unit),//x
								(k*unit)+(0.5*unit),//y
								(j*unit)+(0.5*unit)-(size.width*unit*0.5)//z
							]}
							key={`${i},${j},${k}`}
						>
							<boxGeometry/>
							<meshStandardMaterial 
								color={Math.random()*0xdddddd}
							/>
						</mesh>
					</Fragment>
				})
			})
		})}
	</group>
}

// Controller
function Controller({handleSubjectState}) {
	//단위 정의
	const unit = useMemo(()=>{
		return 1;
	},[]);
	const mapSize = useMemo(()=>{
		return 4;
	},[unit]);
	//배열 생성
	const args = useMemo(()=>{
		// 랜덤생성
		// let newArr = new Array(mapSize);
		// for(let i = 0; i<mapSize; i++) {
		// 	let j = 0
		// 	newArr[i] = new Array(mapSize);
		// 	for(; j<mapSize; j++) {
		// 		newArr[i][j] = Math.round(Math.random()*3);
		// 	}
		// 	j = 0;
		// }
		// console.log(newArr);
		// return newArr;
		return [
			[0,0,0,2],
			[0,3,0,3],
			[1,2,1,3],
			[3,0,2,1]
		];
	},[mapSize]);
	//예상 사이즈
	const size = useMemo(()=>{
		return {
			width:mapSize*unit,
			height:mapSize*unit
		};
	},[args]);
	//핸들러 작동
	useEffect(()=>{
		// console.log('핸들러작동');
		handleSubjectState.set({
			unit,
			mapSize,
			args,
			size
		});
	},[size]);
}

export {
	Adjust,
	Scene,
	Controller
}