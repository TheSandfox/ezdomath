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
	const { user, users, dispatchInvitations, dispatchFriends, invitations } = useContext(userContext);
	const targetUser = useMemo(()=>{
		return users.find((item)=>{
			return parseInt(item.userId)===parseInt(userId);
		});
	},[userId]);
	const inviteExists = useMemo(()=>{
		if (!type) {return false;}
		if (parseInt(type)!==1) {return false;}
		if (!user) {return false;}
		if (isNaN(parseInt(userId))) {return false;}
		let bool = invitations.some((invitationItem)=>{
			return parseInt(invitationItem.fromUserId)===parseInt(user.userId)
				&& parseInt(invitationItem.toUserId)===parseInt(userId);
		})
		return bool;
	},[user,invitations,userId,type]);
	const buttonsJSX = useMemo(()=>{
		if (!user) {return <></>;}
		switch (parseInt(type)) {
		// 학생: 진척도, 더보기
		case 0:
			return <>
				{/* 진척도페이지 */}
				<ButtonIcon 
					to={`/my/achievement/0/${userId}`}
					icon={<BsBarChartFill/>}
				/>
				<ButtonIcon icon={<TfiMoreAlt/>}/>
			</>
		// 검색: 추가하기(초대생성)
		case 1:
			return <>
				{/* 초대버튼 */}
				{!inviteExists
					?<ButtonIcon icon={<FaPlus/>} onClick={()=>{
						dispatchInvitations({
							type:'add',
							fromUserId:user.userId,
							toUserId:userId,
						})
					}}/>
					:<div className='invitationExists font_main'>
						학생 초대를 보냈습니다.
					</div>
				}
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
						userId2:userId,
						userTypeId:Math.max(parseInt(user.userId),parseInt(
							users.find(userItem=>parseInt(userItem.userId)===parseInt(userId)).userId
						))
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
	},[type,user,inviteExists]);
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