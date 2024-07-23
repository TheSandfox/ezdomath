import './profile.css'

export function ProfileCard({user}) {
	return <>
		<div className='profileCard'>
			<div className='top'>
				<img src={'/ezdomath/profile/dummy.png'}/>
			</div>
			<div className='bottom'>
				<div className='font_main'>
					{user?(user.name+' #'+String(user.userId)):''}
				</div>
			</div>
		</div>
	</>
}