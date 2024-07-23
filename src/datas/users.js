import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER, USER_TYPE_ADMIN } from "./usertypes"

const usersDefault = localStorage.getItem('users')
	?localStorage.getItem('users')
	:[
		{
			name:'김택철',
			userId: 0,
			userTypeId: USER_TYPE_TEACHER,
			schoolName: '노도초등학교',
			stringId: 'abcd1234',
			password: '1q2w3e4r$'
		},
		{
			name:'김순탁',
			userId: 1,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '노도초등학교',
			stringId: 'abcd1235',
			password: '1q2w3e4r$'
		},
	]

const usersReducer = (state,action)=>{

}

export {
	usersDefault,
	usersReducer
}