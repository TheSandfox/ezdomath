import './subjectcard.css';
import { SUBJECTS } from '/src/datas/subjects';
import { ACTS } from '/src/datas/acts';
import { useCallback, useContext, useMemo } from 'react';
import { ButtonIcon, ButtonMedium } from '../Buttons';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaRegEdit } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { userContext } from '../../../App';
import { USER_TYPE_PARENT, USER_TYPE_TEACHER } from '../../../datas/usertypes';

export function Bookmark({subjectId}) {
	const { bookmarks, dispatchBookmarks, user } = useContext(userContext);
	// 액티브 판별
	const active = useMemo(()=>{
		if (!bookmarks) {return false;}
		if (!user) {return false;}
		if (isNaN(parseInt(subjectId))) {return false;}
		return bookmarks.some((bookmarkItem)=>{
			return (parseInt(bookmarkItem.userId)===parseInt(user.userId))
				&& (parseInt(bookmarkItem.subjectId)===parseInt(subjectId))
		})
	},[bookmarks,user,subjectId]);
	// 버튼상호작용
	const toggleBookmark = useCallback(()=>{
		if (!bookmarks) {return}
		if (!user) {return}
		if (isNaN(parseInt(subjectId))) {return}
		if (active) {
			dispatchBookmarks({
				type:'remove',
				userId:user.userId,
				subjectId
			})
		} else {
			dispatchBookmarks({
				type:'add',
				userId:user.userId,
				subjectId
			})
		}
	},[bookmarks,user,subjectId,active]);
	return <BsBookmarkStarFill className={`bookmark${active?' active':''}`} onClick={toggleBookmark}>
	</BsBookmarkStarFill>
}

export function SubjectCard({
	subjectId/*필수*/,
	type/*0: 북마크 페이지에서, 1: 진척도페이지에서, 2:그외*/,
	achievement/*진척도페이지에서만 사용(없어도됨)*/,
	onClick,
	active
}) {
	const { user, friends, users } = useContext(userContext);
	// 선생유저
	const myTeacher = useMemo(()=>{
		if (!user) {return null;}
		if (!users) {return null;}
		if (!friends) {return null;}
		let newObj = users.find((userItem)=>{
			return friends.find((friendItem)=>{
				return (parseInt(friendItem.userId1)===parseInt(user.userId)
					|| parseInt(friendItem.userId1)===parseInt(user.userId))
					&& (parseInt(friendItem.userId2)===parseInt(userItem.userId)
					|| parseInt(friendItem.userId2)===parseInt(userItem.userId))
					&& parseInt(userItem.userTypeId) === USER_TYPE_TEACHER
			})
		})
		return newObj?newObj:null;
	},[user,friends,users])
	// subjectId로 subject가져오기
	const subject = useMemo(()=>{
		let newSubject = SUBJECTS.find((subjectItem)=>{
			return parseInt(subjectItem.subjectId) === parseInt(subjectId)
		})
		return newSubject?newSubject:null;
	},[subjectId]);
	// 단원데이터 가져오기
	const act = useMemo(()=>{
		if (subject) {
			return ACTS[subject.actId];
		} else {
			return null;
		}
	},[subject]);
	// QNA버튼 보임
	const displayQNA = useMemo(()=>{
		if(!user){return false}
		if(parseInt(user.userTypeId)===USER_TYPE_TEACHER){return false}
		if(parseInt(user.userTypeId)===USER_TYPE_PARENT){return false}
		return true;
	},[user])
	const typeValue = !type?0:parseInt(type);
	let jsx = <></>
	let newClass = null;
	switch (typeValue) {
	case 0 :
		// 북마크용
		jsx = <>
			{displayQNA?<ButtonMedium to={`/my/qna/${myTeacher?myTeacher.userId:'0'}/${subject?subject.subjectId:'0'}`}>질문하기</ButtonMedium>:null}
			<ButtonMedium to={`/play/${subject?subject.actId:'0'}/${subject?subject.subjectId:'0'}`}>바로가기</ButtonMedium>
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
				{/* 질문하기 */}
				{displayQNA?<ButtonIcon to={`/my/qna/${myTeacher?myTeacher.userId:'0'}/${subject?subject.subjectId:'0'}`} icon={<FaRegEdit className={'icon'}/>}></ButtonIcon>:null}
				{/* 바로가기 */}
				<ButtonIcon to={`/play/${subject?subject.actId:'0'}/${subject?subject.subjectId:'0'}`} icon={<FaChevronRight className={'icon'}/>}></ButtonIcon>
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
		jsx = <div className='imgWrapper'>
			<img className='blur' src={subject?subject.thumb:''} alt={subject?subject.name:''}/>
			<img className='img' src={subject?subject.thumb:''} alt={subject?subject.name:''}/>
		</div>
		newClass = active?'active':'';
		break;
	}
	return <>
		<div className={`subjectCard${newClass?' '+newClass:''} type${typeValue}`} onClick={typeValue === 2 ? onClick : undefined}>
			{
				typeValue!==2&&subject
				?<Bookmark subjectId={subject.subjectId}/>
				:<></>
			}
			<div className='top'>
				<div className='actName font_small'>
					{act?act.name:''}
				</div>
				<div className='subjectName font_main'>
					{subject?subject.name:''}
				</div>
				{
					typeValue!==2
					?<div className='imgWrapper'>
						<img className='blur' src={subject?subject.thumb:''} alt={subject?subject.name:''}/>
						<img className='img' src={subject?subject.thumb:''} alt={subject?subject.name:''}/>
					</div>
					:<></>
				}
			</div>
			<div className={`bottom`}>
				{jsx}
			</div>
		</div>
	</>
}