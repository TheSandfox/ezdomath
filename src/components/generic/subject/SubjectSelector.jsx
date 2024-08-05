import { act, useEffect, useMemo, useState } from "react";
import { ModalBox } from "../modal/ModalBox";
import { SUBJECTS } from "../../../datas/subjects";
import { SubjectCard } from "./SubjectCard";

import './subjectselector.css';
import { DropdownItem, DropdownLarge } from "../Dropdown";
import { ACTS } from "../../../datas/acts";
import { ButtonMedium } from "../Buttons";

export function SubjectSelector({onClose,onSubmit,user}) {
	const [actId,setActId] = useState(0);
	const [subjectId,setSubjectId] = useState(null);
	const subjects = useMemo(()=>{
		return SUBJECTS.filter((subjectItem)=>{
			return parseInt(subjectItem.actId) 
				=== parseInt(actId)
		})
	},[actId])
	// 단원바꾸면 선택과제 초기화
	useEffect(()=>{
		setSubjectId(null);
	},[actId])
	//선택버튼누름
	const submitCallback = ()=>{
		if (subjectId===null) {
			return;
		}
		if (onSubmit) {
			onSubmit(subjectId);
			if (onClose) {
				onClose();
			}
		}
	}
	// JSX
	// 탑 드롭박스
	const top = useMemo(()=>{
		return <div className="labelAndDropdown font_main">
			단원
			<DropdownLarge displayIndex={actId}>
				<DropdownItem className={'large'} onClick={()=>{setActId(0)}}>{ACTS[0].name}</DropdownItem>
				<DropdownItem className={'large'} onClick={()=>{setActId(1)}}>{ACTS[1].name}</DropdownItem>
				<DropdownItem className={'large'} onClick={()=>{setActId(2)}}>{ACTS[2].name}</DropdownItem>
				<DropdownItem className={'large'} onClick={()=>{setActId(3)}}>{ACTS[3].name}</DropdownItem>
			</DropdownLarge>
		</div>
	},[actId]);
	// 미들 서브젝트카드
	const middle = useMemo(()=>{
		return <div className="subjectCards">
			{
				subjects.map((subjectItem)=>{
					return <SubjectCard
						key={subjectItem.subjectId}
						subjectId={subjectItem.subjectId}
						type={2}
						active={parseInt(subjectItem.subjectId)===parseInt(subjectId)}
						onClick={()=>{
							setSubjectId(subjectItem.subjectId)
						}}
					/>
				})
			}
		</div>
	},[subjects,subjectId]);
	// 바텀 버튼들
	const bottom = useMemo(()=>{
		return <div className="buttons">
			<ButtonMedium onClick={submitCallback}>선택하기</ButtonMedium>
		</div>
	},[subjectId]);
	return <ModalBox
		className={'subjectSelector'}
		title={'문제 선택'}
		topContents={top}
		middleContents={middle}
		bottomContents={bottom}
		onClose={onClose}
	/>
}