import './subjectcard.css';
import { SUBJECTS } from '/src/datas/subjects';
import { ACTS } from '/src/datas/acts';
import { useMemo } from 'react';
import { ButtonMedium } from '../Buttons';
import { BsBookmarkStarFill } from 'react-icons/bs';

export function Bookmark({active,handleBookmark}) {
	return <BsBookmarkStarFill className={`bookmark${active?' active':''}`} onClick={()=>{if(handleBookmark){handleBookmark.toggle()}}}>
	</BsBookmarkStarFill>
}

export function SubjectCard({subjectId,type,bookmarkActive}) {
	const subject = useMemo(()=>{
		if (SUBJECTS[subjectId]) {
			return SUBJECTS[subjectId];
		} else {
			return null;
		}
	},[subjectId]);
	const act = useMemo(()=>{
		if (subject) {
			return ACTS[subject.actId];
		} else {
			return 0;
		}
	},[subject]);
	const typeValue = !type?0:type
	let jsx = <></>
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
		break;
	case 2 :
		break;
	}
	return <>
		<div className='subjectCard'>
			<Bookmark active={bookmarkActive} handleBookmark={null}/>
			<div className='top'>
				<div className='actName font_small'>
					{act.name}
				</div>
				<div className='subjectName font_main'>
					{subject.name}
				</div>
				<img src='/ezdomath/profile/dummy2.png' alt={subject.name}/>
			</div>
			<div className={`bottom type${typeValue}`}>
				{jsx}
			</div>
		</div>
	</>
}