import { useContext, useMemo } from 'react';
import './qnawidget.css';
import { userContext } from '../../../App';
import { SUBJECTS } from '/src/datas/subjects';
import { ACTS } from '/src/datas/acts';
import * as User from '/src/utils/User'
import { Link } from 'react-router-dom';

export function QNAWidget({friend}) {
	const { user, users, qnas } = useContext(userContext);
	// 상대유저객체
	const opponent = useMemo(()=>{
		if (!users) {return null;}
		if (!user) {return null;}
		if (!friend) {return null;}
		let opponentId;
		if (parseInt(user.userId)===parseInt(friend.userId1)) {
			opponentId = friend.userId2;
		} else {
			opponentId = friend.userId1;
		}
		let userInstance = users.find((userItem)=>{
			return parseInt(userItem.userId) === parseInt(opponentId);
		});
		return userInstance?userInstance:null;
	},[user,users,friend]);
	// 메세지뭉탱이
	const myQNAs = useMemo(()=>{
		if (!opponent) {return null;}
		if (!qnas) {return null;}
		let filteredQNA = qnas.filter((qnaItem)=>{
			return (parseInt(qnaItem.fromUserId) === parseInt(user.userId)
				|| parseInt(qnaItem.toUserId) === parseInt(user.userId))
				&& (parseInt(qnaItem.fromUserId) === parseInt(opponent.userId)
				|| parseInt(qnaItem.toUserId) === parseInt(opponent.userId))
		})
		return filteredQNA;
	},[opponent,qnas])
	// 최신메세지객체
	const latestQNA = useMemo(()=>{
		if (!myQNAs) {return null;}
		let qnaInstance = myQNAs.findLast((qnaItem)=>{
			return parseInt(qnaItem.fromUserId) === parseInt(user.userId)
				|| parseInt(qnaItem.toUserId) === parseInt(user.userId)
		})
		return qnaInstance?qnaInstance:null;
	},[myQNAs]);
	//안읽힌 개수
	const unwritten = useMemo(()=>{
		if (!myQNAs) {return 0;}
		return myQNAs.filter((qnaItem)=>{
			return !qnaItem.written
				&&(parseInt(qnaItem.fromUserId)!==parseInt(user.userId));
		}).length
	},[myQNAs]);
	// qna에 부착된 문제객체
	const qnaSubject = useMemo(()=>{
		if (!latestQNA) {return null;}
		let subjectInstance = SUBJECTS.find((subjectItem)=>{
			return parseInt(latestQNA.subjectId) === parseInt(subjectItem.subjectId)
		})
		return subjectInstance?subjectInstance:null;
	},[latestQNA]);
	// dateValue
	const dateValue = useMemo(()=>{
		if (!latestQNA) {return null;}
		let today = new Date();
		let isToday = 
			parseInt(today.getFullYear()) === parseInt(latestQNA.dateTime.substring(0,4))
			&& parseInt(today.getMonth()) === (parseInt(latestQNA.dateTime.substring(4,6)) - 1)
			&& parseInt(today.getDate()) === parseInt(latestQNA.dateTime.substring(6,8));
		if (isToday) {
			return latestQNA.dateTime.substring(8,10)+":"+latestQNA.dateTime.substring(10,12);
		} else {
			return latestQNA.dateTime.substring(0,4)+
			'. '+latestQNA.dateTime.substring(4,6)+
			'. '+latestQNA.dateTime.substring(6,8)
		}
	},[latestQNA])
	return <Link className="qnaWidget" to={opponent?'/my/qna/'+opponent.userId:''}>
		{/* 프사 */}
		<div className='profile'>
			<img
				src={opponent?opponent.profile:''} 
				alt={opponent?opponent.name:''}
			/>
		</div>
		<div className='middle'>
			{/* 유저이름 */}
			<div className='userName font_main'>
				{opponent?opponent.name+User.getUserIdString(opponent.userId):''}
			</div>
			<div className='subjectNameAndContent font_main'>
				{/* 문제이름 */}
				{qnaSubject
					?<div className='subjectName'>
						{ACTS[parseInt(qnaSubject.subjectId)].name+qnaSubject.name}
					</div>
					:<></>
				}
				{/* 메세지 */}
				<div className='content'>
					{latestQNA?latestQNA.content:''}
				</div>
			</div>
		</div>
		<div className='right'>
			<div className='date font_small'>
				{dateValue?dateValue:''}
			</div>
			{
				unwritten
				?<div className='unwritten font_main'>
					{unwritten}
				</div>
				:<></>
			}
		</div>
	</Link>
}