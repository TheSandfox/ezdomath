import { useContext, useMemo } from 'react';
import './usercard.css';
import { userContext } from '../../../App';

export function UserCard({userId,type}) {
	const { user, users } = useContext(userContext);
	const targetUser = useMemo(()=>{
		return users.find((item)=>{
			return parseInt(item.userId)===parseInt(userId);
		});
	},[userId]);
	const buttonsJSX = useMemo(()=>{
		return <></>
	},[type]);
	return <>
		<div className='userCard'>
			<img className='profile' src={`${targetUser?targetUser.profile:'/ezdomath/profile/dummy.png'}`}/>
			<div className='middle'>
				<div className='font_main name'>
					{targetUser?targetUser.name:''}
				</div>
				<div className='font_small schoolName'>
					{targetUser?targetUser.schoolName:''}
				</div>
				<div className='buttons'>
					{buttonsJSX}
				</div>
			</div>
		</div>
	</>
}