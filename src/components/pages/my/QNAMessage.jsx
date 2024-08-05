import { useContext, useEffect, useMemo } from 'react';
import './qnamessage.css';
import { userContext } from '../../../App';
import * as User from '/src/utils/User'
import { SUBJECTS } from '../../../datas/subjects';
import { ACTS } from '../../../datas/acts';
import { ButtonMedium } from '../../generic/Buttons';
import { Link } from 'react-router-dom';

export function QNAMessage({qna,my,containerRef}) {
	const { users } = useContext(userContext);
	const messageOwner = useMemo(()=>{
		return users.find((userItem)=>{
			return parseInt(userItem.userId) === parseInt(qna.fromUserId)
		})
	},[qna,users]);
	const subjectInfo = useMemo(()=>{
		if (qna.subjectId === '') {
			return null;
		}
		return SUBJECTS.find((subjectItem)=>{
			return parseInt(subjectItem.subjectId) === parseInt(qna.subjectId)
		})
	},[qna])
	const dateString = useMemo(()=>{
		let today = new Date();
		let isToday = 
			parseInt(today.getFullYear()) === parseInt(qna.dateTime.substring(0,4))
			&& parseInt(today.getMonth()) === (parseInt(qna.dateTime.substring(4,6)) - 1)
			&& parseInt(today.getDate()) === parseInt(qna.dateTime.substring(6,8));
		if (isToday) {
			return qna.dateTime.substring(8,10)+":"+qna.dateTime.substring(10,12);
		} else {
			return qna.dateTime.substring(0,4)+
			'. '+qna.dateTime.substring(4,6)+
			'. '+qna.dateTime.substring(6,8)
		}
	},[qna]);
	useEffect(()=>{
		if (!containerRef) {return;}
		let element = containerRef.current;
		element.scrollTop = element.scrollHeight;
	},[]);
	return <div className={`qnaMessageWrapper${my?' my':''}`}>
		{messageOwner&&!my
			?<div className='profile'>
				<img src={messageOwner.profile} alt={messageOwner.name}/>
			</div>
			:<></>
		}
		<div className='right'>
			{/* 유저이름 */}
			{messageOwner&&!my
				?<div className='userName font_main'>
					{messageOwner.name+User.getUserIdString(messageOwner.userId)}
				</div>
				:<></>
			}
			{/* 말풍선 */}
			<div className='balloon font_main'>
				{/* 문제설명 */}
				{subjectInfo
					?<Link 
						className='subjectInfo font_small'
						to={`/play/${subjectInfo.actId}/${subjectInfo.subjectId}`}
					>
						<p className='actName'>
							{ACTS[parseInt(subjectInfo.actId)].name}
						</p>
						<p className='subjectName'>
							{subjectInfo.name}
						</p>
					</Link>
					:<></>
				}
				{/* 본문 */}
				<div className='content'>{qna.content}</div>
				{/* 답변버튼 */}
				{subjectInfo&&!my
					?<div className='bottom'><ButtonMedium className={'reply'} to={`/my/qna/${qna.fromUserId}/${qna.subjectId}`}>
						답변하기
					</ButtonMedium></div>
					:<></>
				}
			</div>
			{/* 날짜 */}
			<div className='date font_small'>
				{dateString}
			</div>
		</div>	
	</div>
}