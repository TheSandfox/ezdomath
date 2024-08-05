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
			content:'선생님, 문제가 너무 어렵습니다.',
			written:false,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:1,
			content:'선생님, 문제가 너무 어렵습니다.',
			written:false,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:1,
			content:'선생님, 문제가 너무 어렵습니다.',
			written:false,
		},
		{
			qnaId:counter++,
			fromUserId:2,
			toUserId:0,
			dateTime:'20240707112233',
			subjectId:2,
			content:'한번 말 해보거라.',
			written:false,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240707112233',
			subjectId:2,
			content:'선생님, 문제가 너무 어렵습니다.',
			written:false,
		},
		{
			qnaId:counter++,
			fromUserId:0,
			toUserId:2,
			dateTime:'20240729112233',
			subjectId:3,
			content:'선생님, 문제가 너무 어렵습니다.',
			written:false,
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
	const { fromUserId, toUserId, subjectId, content } = action;
	let newState;
	if (fromUserId==null||toUserId==null) {return state;}
	if (fromUserId===toUserId) {return state;}
	switch (action.type) {
		case 'add' :
		// QNA생성
		newState = [
			...state,
			{
				qnaId:state.length,
				fromUserId,
				toUserId,
				dateTime: dateFormat(new Date()),
				subjectId,
				content,
				written:false,
			}
		];
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