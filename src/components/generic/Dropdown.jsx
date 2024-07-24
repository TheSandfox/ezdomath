import { useMemo, useState } from "react"

export function Dropdown({children,trigger,className}) {
	const [expand,setExpand] = useState(false);
	// 메인항목
	const displayIndex = useMemo(()=>{
		if (!trigger) {return 0;}
		if (isNaN(trigger.displayIndex)) {return 0;}
		return parseInt(trigger.displayIndex);
	},[trigger]);
	// 나머지항목
	const namozi = useMemo(()=>{
		return children.filter((item,index)=>{
			return parseInt(index)!==parseInt(displayIndex)
		})
	},[displayIndex,children]);
	// 클래스이름 계산
	const newClassName = useMemo(()=>{
		let newVal = 'dropdown';
		if (className) {
			newVal += ' '+className;
		}
		if (expand) {
			newVal += ' expand';
		}
		return newVal;
	},[expand,children,className])
	return <div className={newClassName}>
		<div className="display">
			{children[displayIndex]?children[displayIndex]:children[0]}
		</div>
		<div className="namozi">
			{namozi}
		</div>
	</div>
}

export function DropdownLarge({children}) {
	return <>
		
	</>
}