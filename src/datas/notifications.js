const notificationsDefault = localStorage.getItem('notifications')
	?JSON.parse(localStorage.getItem('notifications'))
	:[
		{
			userId:2,
			content:'알림입니다.',
			link:'/my/community/invitation',
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

	return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

const validate = (item,userId1,userId2)=>{
	return (item.userId1 === userId1 || item.userId1 === userId2)
		&& (item.userId2 === userId1 || item.userId2 === userId2)
}

const get = (target,userId1,userId2)=>{
	if ((userId1 === userId2)) {return null}
	return target.find((item)=>{
		return validate(item,userId1,userId2);
	})
}

const notificationsReducer = (state,action)=>{
	const { userId1, userId2 } = action;
	if (userId1==null||userId2==null) {return state;}
	if (userId1===userId2) {return state;}
	switch (action.type) {
	case 'add' :
		let target = get(state,userId1,userId2);
		if (target===null) {
			return [
				...state,
				{
					userId1:userId1,
					userId2:userId2,
					dateTime: dateFormat(new Date())
				}
			]
		} else {
			target = {
				userId1:userId1,
				userId2:userId2,
				dateTime: dateFormat(new Date())
			}
			return state;
		}
	case 'remove' :
		return state.filter((item)=>{
			return !validate(item,userId1,userId2);
		})
 	}
}

export {
	notificationsDefault,
	notificationsReducer,
}