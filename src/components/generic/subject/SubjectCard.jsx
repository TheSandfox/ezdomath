import './subjectcard.css';
import { SUBJECTS } from '/src/datas/subjects';
import { ACTS } from '/src/datas/acts';
import { useContext, useMemo } from 'react';
import { ButtonIcon, ButtonMedium } from '../Buttons';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaRegEdit } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { userContext } from '../../../App';

export function Bookmark({active,handleBookmark}) {
	return <BsBookmarkStarFill className={`bookmark${active?' active':''}`} onClick={()=>{if(handleBookmark){handleBookmark.toggle()}}}>
	</BsBookmarkStarFill>
}

export function SubjectCard({
	subjectId/*필수*/,
	type/*0: 북마크 페이지에서, 1: 진척도페이지에서, 2:그외*/,
	achievement/*진척도페이지에서만 사용(없어도됨)*/
}) {
	const { user } = useContext(userContext);
	// subjectId로 subject가져오기
	const subject = useMemo(()=>{
		if (SUBJECTS[subjectId]) {
			return SUBJECTS[subjectId];
		} else {
			return null;
		}
	},[subjectId]);
	// 단원데이터 가져오기
	const act = useMemo(()=>{
		if (subject) {
			return ACTS[subject.actId];
		} else {
			return null;
		}
	},[subject]);
	const typeValue = !type?0:type
	let jsx = <></>
	let newClass = null;
	switch (typeValue) {
	case 0 :
		// 북마크용
		jsx = <>
			<ButtonMedium to={''}>질문하기</ButtonMedium>
			<ButtonMedium to={''}>바로가기</ButtonMedium>
		</>
		break;
	case 1 :
		// 진척도용
		jsx = <>
			<div className='dateField'>
				{achievement
					?(JSON.parse(achievement.correct)
						// 체크
						?<FaCheck className='check'/>
						// X
						:<RiCloseLargeFill className='check'/>
					)
					// -
					:<FaMinus className='check'/>
				}
				<div className='font_small'>
					{achievement?achievement.date:'-'}
				</div>
			</div>
			<div className='buttons'>
				<ButtonIcon to={''} icon={<FaRegEdit className={'icon'}/>}></ButtonIcon>
				<ButtonIcon to={''} icon={<FaChevronRight className={'icon'}/>}></ButtonIcon>
			</div>
		</>
		if (!achievement) {
			newClass = 'disabled';
		} else {
			if (JSON.parse(achievement.correct)) {
				newClass = 'correct';
			} else {
				newClass = 'incorrect';
			}
		}
		break;
	case 2 :
		//단순표시
		break;
	}
	return <>
		<div className={`subjectCard${newClass?' '+newClass:''}`}>
			<Bookmark active={true} handleBookmark={null}/>
			<div className='top'>
				<div className='actName font_small'>
					{act?act.name:''}
				</div>
				<div className='subjectName font_main'>
					{subject?subject.name:''}
				</div>
				<div className='imgWrapper'>
					<img src='/ezdomath/profile/dummy2.png' alt={subject?subject.name:''}/>
				</div>
			</div>
			<div className={`bottom type${typeValue}`}>
				{jsx}
			</div>
		</div>
	</>
}