import { useContext } from 'react';
import { USER_TYPE_NAMES, USER_TYPE_TEACHER } from '/src/datas/usertypes';
import { userContext } from '../App';

function removeZero(stringVal) {
	const newStringVal = stringVal;
	while (newStringVal[0]==='0'&&newStringVal.length>1) {
		newStringVal.slice(1,newStringVal.length);
	}
	return newStringVal;
}

export function evaluateId(idString1,idString2) {
	return parseInt(removeZero(idString1)) === parseInt(removeZero(idString2));
}

export function getUserIdString(val) {
	let zero = '';
	let counts = 4 - String(val).length;
	if (counts <= 0) {counts=0;}
	for (let i = 0;i<counts;i++) {
		zero += '0';
	}
	return '#'+zero+val;
}

export function getUserTypeName(val) {
	return USER_TYPE_NAMES[val];
}

export function getUserTeacher(user,users,friends) {
	if (!user) {return null;}
	if (!users) {return null;}
	if (!friends) {return null;}
	let newObj = users.find((userItem)=>{
		return friends.some((friendItem)=>{
			let bool = (parseInt(friendItem.userId1)===parseInt(user.userId)
				|| parseInt(friendItem.userId2)===parseInt(user.userId))
				&& (parseInt(friendItem.userId1)===parseInt(userItem.userId)
				|| parseInt(friendItem.userId2)===parseInt(userItem.userId))
				&& parseInt(userItem.userTypeId) === USER_TYPE_TEACHER
			return bool;
		}) && parseInt(userItem.userId)!==parseInt(user.userId)
	})
	return newObj?newObj:null;
}