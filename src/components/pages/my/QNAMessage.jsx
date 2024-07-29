import { useContext, useEffect, useMemo } from 'react';
import './qnamessage.css';
import { userContext } from '../../../App';
import * as User from '/src/utils/User'
import { SUBJECTS } from '../../../datas/subjects';
import { ACTS } from '../../../datas/acts';
import { ButtonMedium } from '../../generic/Buttons';

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
		return SUBJECTS[parseInt(qna.subjectId)]
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
					?<div className='subjectInfo font_small'>
						<p className='actName'>
							{ACTS[parseInt(subjectInfo.actId)].name}
						</p>
						<p className='subjectName'>
							{subjectInfo.name}
						</p>
					</div>
					:<></>
				}
				{/* 본문 */}
				<div className='content'>{qna.content}</div>
				{/* 답변버튼 */}
				{subjectInfo&&!my
					?<div className='bottom'><ButtonMedium className={'reply'}>
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