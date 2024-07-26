import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER, USER_TYPE_ADMIN } from "./usertypes"

const usersDefault = localStorage.getItem('users')
	?JSON.parse(localStorage.getItem('users'))
	:[
		{
			name:'김택철',
			userId: 0,
			userTypeId: USER_TYPE_TEACHER,
			schoolName: '노도초등학교',
			stringId: 'abcd1234',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'김순탁',
			userId: 1,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '노도초등학교',
			stringId: 'abcd1235',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'김관리',
			userId: 2,
			userTypeId: USER_TYPE_ADMIN,
			schoolName: '노도초등학교',
			stringId: 'qwer1234',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'박부모',
			userId: 3,
			userTypeId: USER_TYPE_PARENT,
			schoolName: '',
			stringId: 'qwer1235',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'김학생',
			userId: 4,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '백탁초등학교',
			stringId: 'zxcv0000',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'박학생',
			userId: 5,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '백탁초등학교',
			stringId: 'zxcv0000',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'나학생',
			userId: 6,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '백탁초등학교',
			stringId: 'zxcv0000',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'이학생',
			userId: 7,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '백탁초등학교',
			stringId: 'zxcv0000',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
		{
			name:'유학생',
			userId: 8,
			userTypeId: USER_TYPE_STUDENT,
			schoolName: '백탁초등학교',
			stringId: 'zxcv0000',
			password: '1q2w3e4r$',
			profile: '/ezdomath/profile/dummy.png',
		},
	]

const usersReducer = (state,action)=>{

}

export {
	usersDefault,
	usersReducer
}