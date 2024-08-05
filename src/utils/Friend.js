export function find(friendObj,userId1,userId2) {
	return (parseInt(friendObj.userId1) === parseInt(userId1) || parseInt(friendObj.userId2) === parseInt(userId1))
		&& (parseInt(friendObj.userId1) === parseInt(userId2) || parseInt(friendObj.userId2) === parseInt(userId2))
		&& (parseInt(userId1)!==parseInt(userId2))
}

export function getOpponent(friendObj,userId) {
	if (parseInt(friendObj.userId1)===parseInt(userId)) {
		return friendObj.userId2;
	} else if (parseInt(friendObj.userId2)===parseInt(userId)) {
		return friendObj.userId1;
	}
	return NaN;
}