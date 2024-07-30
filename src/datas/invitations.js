const invitationsDefault = localStorage.getItem('invitations')
	?JSON.parse(localStorage.getItem('invitations'))
	:[
		{
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233'
		},
		{
			fromUserId:1,
			toUserId:2,
			dateTime:'20240707112233'
		},
		{
			fromUserId:3,
			toUserId:2,
			dateTime:'20240707112233'
		},
		{
			fromUserId:4,
			toUserId:2,
			dateTime:'20240707112233'
		},
		{
			fromUserId:5,
			toUserId:2,
			dateTime:'20240707112233'
		},
	];

const dateFormat = (date)=>{
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;
	hour = hour >= 10 ? hour : '0' + hour;
	minute = minute >= 10 ? minute : '0' + minute;
	second = second >= 10 ? second : '0' + second;

	return date.getFullYear() + month + day + hour + minute + second;
}

const validate = (item,fromUserId,toUserId)=>{
	return (parseInt(item.toUserId) === parseInt(toUserId))
		&& (parseInt(item.fromUserId) === parseInt(fromUserId))
}

const get = (target,fromUserId,toUserId)=>{
	let newObj = target.find((item)=>{
		return validate(item,fromUserId,toUserId);
	})
	if (newObj) {
		return newObj;
	} else {
		return null;
	}
}

const invitationsReducer = (state,action)=>{
	const { fromUserId, toUserId } = action;
	let newState;
	if (fromUserId==null||toUserId==null) {return state;}
	if (fromUserId===toUserId) {return state;}
	switch (action.type) {
		case 'add' :
		// 초대객체생성(중복시 덮어쓰기)
		let target = get(state,fromUserId,toUserId);
		if (target===null) {
			newState = [
				...state,
				{
					fromUserId:fromUserId,
					toUserId:toUserId,
					dateTime: dateFormat(new Date())
				}
			]
			localStorage.setItem('invitations',JSON.stringify(newState));
			return newState;
		} else {
			newState = state.map((stateItem)=>{
				if (validate(stateItem,fromUserId,toUserId)) {
					return  {
						fromUserId:fromUserId,
						toUserId:toUserId,
						dateTime: dateFormat(new Date())
					};
				} else {
					return stateItem;
				}
			});
			localStorage.setItem('invitations',JSON.stringify(newState));
			return newState;
		}
	case 'remove' :
		// 초대객체삭제
		newState = state.filter((item)=>{
			return !validate(item,fromUserId,toUserId);
		});
		localStorage.setItem('invitations',JSON.stringify(newState));
		return newState;
 	}
}

export {
	invitationsDefault,
	invitationsReducer,
}