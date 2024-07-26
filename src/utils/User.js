import { useContext } from 'react';
import { USER_TYPE_NAMES } from '/src/datas/usertypes';
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