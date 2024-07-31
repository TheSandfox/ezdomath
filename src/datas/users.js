import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER, USER_TYPE_ADMIN } from "./usertypes"
let counter = 0;

const usersDefault = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : [
    {
      name: '김택철',
      userId: counter++,
      userTypeId: USER_TYPE_TEACHER,
      schoolName: '노도초등학교',
      stringId: 'abcd1234',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '김순탁',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '노도초등학교',
      stringId: 'abcd1235',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '김관리',
      userId: counter++,
      userTypeId: USER_TYPE_ADMIN,
      schoolName: '노도초등학교',
      stringId: 'qwer1234',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '박부모',
      userId: counter++,
      userTypeId: USER_TYPE_PARENT,
      schoolName: '',
      stringId: 'qwer1235',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '김학생',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '백탁초등학교',
      stringId: 'zxcv0000',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '박학생',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '백탁초등학교',
      stringId: 'zxcv0001',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '나학생',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '백탁초등학교',
      stringId: 'zxcv0002',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '이학생',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '백탁초등학교',
      stringId: 'zxcv0003',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
    {
      name: '유학생',
      userId: counter++,
      userTypeId: USER_TYPE_STUDENT,
      schoolName: '백탁초등학교',
      stringId: 'zxcv0004',
      password: '1q2w3e4r$',
      profile: '/ezdomath/profile/dummy.png',
    },
  ]

const usersReducer = (state, action) => {
  const { name, userTypeId, schoolName, stringId, password, profile, userId } = action;
  let newState;
  switch (action.type) {
    case 'add':
      newState = [
        ...state,
        {
          name,
		  userId: counter++,
          userTypeId,
          schoolName,
          stringId,
          password,
          profile: '/ezdomath/profile/dummy.png',
          userId: state.length
        }
      ];
      localStorage.setItem('users', JSON.stringify(newState));
      return newState;
    case 'remove':
      newState = state.filter(userItem => parseInt(userItem.userId) !== parseInt(userId));
      localStorage.setItem('users', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export {
  usersDefault,
  usersReducer
};