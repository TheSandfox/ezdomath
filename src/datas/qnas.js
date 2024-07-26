let counter = 0
const qnasDefault = localStorage.getItem('qnas')
	?JSON.parse(localStorage.getItem('qnas'))
	:[
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:'',
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:1,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:1,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:2,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:3,
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

const qnasReducer = (state,action)=>{
	const { fromUserId, toUserId } = action;
	let newState;
	if (fromUserId==null||toUserId==null) {return state;}
	if (fromUserId===toUserId) {return state;}
	switch (action.type) {
		case 'add' :
		// QNA생성
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
		console.log(newState);
		localStorage.setItem('qnas',JSON.stringify(newState));
		return newState;
	case 'remove' :
		// QNA삭제
		newState = state.filter((item)=>{
			return !validate(item,fromUserId,toUserId);
		});
		localStorage.setItem('qnas',JSON.stringify(newState));
		return newState;
 	}
}

export {
	qnasDefault,
	qnasReducer,
}