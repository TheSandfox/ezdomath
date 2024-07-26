import './profile.css'
import * as User from '/src/utils/User'

export function ProfileCard({user}) {
	if (!user) return <></>
	return <>
		<div className='profileCard'>
			<div className='top'>
				<img src={`${user.profile}`}/>
			</div>
			<div className='bottom'>
				<div className='font_main'>
					{user?(user.name+User.getUserIdString(user.userId)):''}
				</div>
			</div>
		</div>
	</>
}