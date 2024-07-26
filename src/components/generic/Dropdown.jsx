import { useEffect, useMemo, useRef, useState } from "react"
import './dropdown.css';
import { Button } from "./Buttons";
import { IoIosArrowDown } from "react-icons/io";

export function SimpleDropdown({children,value,onChange}) {
	return <>
		<select className="simpleDropdown font_main" value={value} onChange={onChange}>
			{children}
		</select>
	</>
}

export function DropdownItem({to,onClick,children,className}) {
	return <Button to={to} onClick={onClick} className={className?('dropdownItem '+className):'dropdownItem'}>
		{children}
	</Button>
}

export function Dropdown({children,className,displayIndex}) {
	const containerRef = useRef(null);
	const [expand,setExpand] = useState(false);
	// 메인항목
	const newDisplayIndex = useMemo(()=>{
		if (!displayIndex) {return 0;}
		if (isNaN(displayIndex)) {return 0;}
		return parseInt(displayIndex);
	},[displayIndex]);
	// 나머지항목
	const namozi = useMemo(()=>{
		if (!children) {return [];}
		// return children.filter((item,index)=>{
		// 	if (parseInt(index)!==parseInt(newDisplayIndex)) {
		// 		return true;
		// 	} else {
		// 		return false;
		// 	}
		// })
		return children;
	},[newDisplayIndex,children]);
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
	},[expand,children,className]);
	//빈곳누르거나 escape시 닫기
	useEffect(()=>{
		const clickCallback = (e)=>{
			const element = containerRef.current;
			if ((!(e.target===element))&&(!(element.contains(e.target)))) {
				setExpand(false);
			}
		}
		const escapeCallback = (e)=>{
			if (expand && e.key==='Escape') {
				setExpand(false);
			}
		}
		window.addEventListener('click',clickCallback);
		window.addEventListener('keydown',escapeCallback);
		
		return ()=>{
			window.removeEventListener('click',clickCallback);
			window.removeEventListener('keydown',escapeCallback);
		}
	},[expand]);
	//항목변경되면 닫기
	useEffect(()=>{
		setExpand(false);
	},[newDisplayIndex]);
	return <div className={newClassName} ref={containerRef}>
		<div className="display" onClick={()=>{setExpand((prev)=>{return !prev})}}>
			{children[newDisplayIndex]?children[newDisplayIndex]:children[0]}
		</div>
		<div className="namozi">
			{namozi}
		</div>
		<IoIosArrowDown className={`expandCursor${expand?' expand':''}`}/>
	</div>
}

export function DropdownLarge({children,displayIndex,className}) {
	// 클래스이름 계산
	const newClassName = useMemo(()=>{
		let newVal = 'large';
		if (className) {
			newVal += ' '+className;
		}
		return newVal;
	},[children,className])
	return <Dropdown displayIndex={displayIndex} className={newClassName}>
		{children}
	</Dropdown>
}

export function DropdownSmall({children,displayIndex,className}) {
	// 클래스이름 계산
	const newClassName = useMemo(()=>{
		let newVal = 'small';
		if (className) {
			newVal += ' '+className;
		}
		return newVal;
	},[children,className])
	return <Dropdown displayIndex={displayIndex} className={newClassName}>
		{children}
	</Dropdown>
}