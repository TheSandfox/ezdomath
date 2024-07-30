import { useContext, useMemo } from 'react';
import './usercard.css';
import { userContext } from '../../../App';
import * as User from '/src/utils/User';
import { ButtonIcon } from '../Buttons';

import { BsBarChartFill } from 'react-icons/bs';
import { TfiMoreAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

export function UserCard({userId,type}) {
	const { user, users, dispatchInvitations, dispatchFriends } = useContext(userContext);
	const targetUser = useMemo(()=>{
		return users.find((item)=>{
			return parseInt(item.userId)===parseInt(userId);
		});
	},[userId]);
	const buttonsJSX = useMemo(()=>{
		if (!user) {return <></>;}
		switch (parseInt(type)) {
		// 학생: 진척도, 더보기
		case 0:
			return <>
				<ButtonIcon icon={<BsBarChartFill/>}/>
				<ButtonIcon icon={<TfiMoreAlt/>}/>
			</>
		// 검색: 추가하기(초대생성)
		case 1:
			return <>
				<ButtonIcon icon={<FaPlus/>} onClick={()=>{
					console.log(user.userId+' '+userId);
					dispatchInvitations({
						type:'add',
						fromUserId:user.userId,
						toUserId:userId,
					})
				}}/>
			</>
		// 멘토: 더보기
		case 2:
			return <>
				<ButtonIcon icon={<TfiMoreAlt/>}/>
			</>
		// 초대: 수락, 거절
		case 3:
			return <>
				{/* 초대받기버튼 */}
				<ButtonIcon icon={<FaCheck/>} onClick={()=>{
					dispatchFriends({
						type:'add',
						userId1:user.userId,
						userId2:userId
					});
					dispatchInvitations({
						type:'remove',
						fromUserId:userId,
						toUserId:user.userId
					});
				}}/>
				{/* 초대거절버튼 */}
				<ButtonIcon icon={<RiCloseLargeFill/>} onClick={()=>{
					dispatchInvitations({
						type:'remove',
						fromUserId:userId,
						toUserId:user.userId
					});
				}}/>
			</>
		}
	},[type,user]);
	return <>
		<div className='userCard'>
			<img className='profile' src={`${targetUser?targetUser.profile:'/ezdomath/profile/dummy.png'}`}/>
			<div className='middle'>
				<div className='font_main name'>
					{targetUser?targetUser.name+User.getUserIdString(targetUser.userId):''}
				</div>
				<div className='font_small schoolName'>
					{targetUser?targetUser.schoolName:''}
				</div>
			</div>
			<div className='buttons'>
				{buttonsJSX}
			</div>
		</div>
	</>
}