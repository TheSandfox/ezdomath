import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '/src/App'
import { SUBJECTS } from '/src/datas/subjects'
import { ACTS } from '/src/datas/acts';

import './actprogress.css'

export function ActProgress({ to, onClick, active, actId, userId }) {
	const { users, user, achievements, friends } = useContext(userContext);
	// 대상유저
	const targetUserId = useMemo(()=>{
		if (!user) {return -1;}
		if (!userId) {return user.userId;}
		// 친구아니면 나자신 리턴
		if (!friends.some((friendItem)=>{
			return (parseInt(friendItem.userId1)===parseInt(user.userId)
				|| parseInt(friendItem.userId1)===parseInt(userId))
				&& (parseInt(friendItem.userId2)===parseInt(user.userId)
				|| parseInt(friendItem.userId2)===parseInt(userId))
		})) {
			return user.userId;
		}
		// 리턴
		return users.find((userItem)=>{
			return parseInt(userItem.userId) === parseInt(userId)
		}).userId
	},[userId,user,users,friends])
	// 단원이름 가져오기
	const actName = useMemo(() => {
		if (!ACTS) { return '' }
		if (!ACTS[actId]) { return '' }
		return ACTS[actId].name;
	}, [ACTS, actId]);
	// 단원에 속한 문제 전체갯수
	const subjects = useMemo(() => {
		if (!SUBJECTS) {
			return [];
		}
		return SUBJECTS.filter((subject) => {
			return parseInt(subject.actId) === parseInt(actId)
		})
	}, [actId, SUBJECTS]);
	// 달성 갯수 세기
	const counts = useMemo(() => {
		if (!subjects || isNaN(targetUserId)) {
			return 0;
		}
		return subjects.filter((subject) => {
			let achievement = achievements.find((achievement) => {
				return parseInt(achievement.userId) === parseInt(targetUserId)
					&& parseInt(achievement.subjectId) === parseInt(subject.subjectId)
			})
			return achievement && JSON.parse(achievement.correct);
		}).length
	}, [subjects, targetUserId, achievements]);
	// 게이지 크기 계산
	const gaugeWidth = useMemo(() => {
		if (isNaN(targetUserId) || !counts || !subjects || subjects.length <= 0) { return 0; }
		return parseFloat(counts) / parseFloat(subjects.length)
	}, [targetUserId, subjects, counts]);
	//클래스이름&JSX
	let className = 'actProgress' + (active ? ' active' : '');
	let jsx = <>
		<div className='top'>
			<div className='actName font_main'>
				{actName}
			</div>
			<div className='counts font_main'>
				{counts}/{subjects.length}
			</div>
		</div>
		<div className='gauge'>
			<div className='fill' style={{
				width: `${gaugeWidth * 100.0}%`
			}} />
		</div>
	</>
	return <>{
		to
			? <Link to={to} className={className} onClick={onClick}>
				{jsx}
			</Link>
			: <div onClick={onClick} className={className}>
				{jsx}
			</div>
	}</>
}
