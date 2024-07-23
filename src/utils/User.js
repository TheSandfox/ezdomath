const USER_TYPE_STUDENT = 0;
const USER_TYPE_PARENT = 1;
const USER_TYPE_TEACHER = 2;
const USER_TYPE_ADMIN = 3;

const USER_TYPE_NAME = [
	'학생',
	'부모님',
	'선생님',
	'관리자'
]

export function getUserIdString(val) {
	return '#'+val;
}

export function getUserTypeName(val) {
	return USER_TYPE_NAME[val];
}

export function getUser() {
	return {
		name:'김택철',
		userId: 123,
		userType: USER_TYPE_TEACHER,
		schoolName: '노도초등학교',
		stringId: 'abcd1234'
	}
}