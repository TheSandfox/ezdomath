import { USER_TYPE_TEACHER, USER_TYPE_ADMIN, USER_TYPE_PARENT, USER_TYPE_STUDENT } from "./usertypes";

const friendsDefault = localStorage.getItem('friends')
	?JSON.parse(localStorage.getItem('friends'))
	:[
		{
			userId1:0,
			userId2:1,
			userTypeId:USER_TYPE_TEACHER
		},
		{
			userId1:2,
			userId2:3,
			userTypeId:USER_TYPE_ADMIN
		},
		{
			userId1:0,
			userId2:2,
			userTypeId:USER_TYPE_ADMIN
		},
		{
			userId1:3,
			userId2:0,
			userTypeId:USER_TYPE_TEACHER
		},
		{
			userId1:3,
			userId2:1,
			userTypeId:USER_TYPE_PARENT
		},
		{
			userId1:5,
			userId2:0,
			userTypeId:USER_TYPE_TEACHER
		},
		{
			userId1:5,
			userId2:2,
			userTypeId:USER_TYPE_ADMIN
		},
	];

const validate = (item,userId1,userId2)=>{
	return (item.userId1 === userId1 || item.userId1 === userId2)
		&& (item.userId2 === userId1 || item.userId2 === userId2)
}

const get = (target,userId1,userId2)=>{
	if ((userId1 === userId2)) {return null}
	return target.some((item)=>{
		return validate(item,userId1,userId2);
	})
}

const friendsReducer = (state,action)=>{
	const { userId1, userId2 } = action;
	if (userId1==null||userId2==null) {return state;}
	if (userId1===userId2) {return state;}
	let newState;
	switch (action.type) {
	case 'add' :
		// 친추(중복불허)
		if (!get(state,userId1,userId2)) {
			newState = [
				...state,
				{
					userId1:userId1,
					userId2:userId2
				}
			]
			localStorage.setItem('friends',JSON.stringify(newState));
			return newState;
		} else {
			return state;
		}
	case 'remove' :
		newState = state.filter((item)=>{
			return !validate(item,userId1,userId2);
		})
		localStorage.setItem('friends',JSON.stringify(newState));
		return newState;
 	}
}

export {
	friendsDefault,
	friendsReducer,
}