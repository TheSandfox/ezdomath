const achievementsDefault = localStorage.getItem('achievements')
	?JSON.parse(localStorage.getItem('achievements'))
	:[
		{
			userId:0,
			subjectId:0,
			date:'2024.11.11',
			correct:'true',
		},
		{
			userId:0,
			subjectId:1,
			date:'2024.11.11',
			correct:'false',
		},
	];

const dateFormat = (date)=>{
	let month = date.getMonth() + 1;
	let day = date.getDate();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;

	return date.getFullYear()+ '.' + month + '.' + day;
}

const validate = (item,userId,subjectId)=>{
	return (parseInt(item.userId) === parseInt(userId))
		&& (parseInt(item.subjectId) === parseInt(subjectId))
}

const get = (target,userId,subjectId)=>{
	let newObj = target.find((item)=>{
		return validate(item,userId,subjectId);
	})
	if (newObj) {
		return newObj;
	} else {
		return null;
	}
}

const achievementsReducer = (state,action)=>{
	let { userId, subjectId, correct } = action;
	let newState;
	switch (action.type) {
	case 'add':
		// 진척도객체생성(중복시 덮어쓰기)
		let target = get(state,userId,subjectId);
		if (target===null) {
			newState = [
				...state,
				{
					userId,
					subjectId,
					correct,
					dateTime: dateFormat(new Date())
				}
			]
			localStorage.setItem('achievements',JSON.stringify(newState));
			return newState;
		} else {
			newState = state.map((stateItem)=>{
				if (validate(stateItem,userId,subjectId)) {
					return  {
						userId,
						subjectId,
						correct,
						dateTime: dateFormat(new Date())
					};
				} else {
					return stateItem;
				}
			});
			localStorage.setItem('achievements',JSON.stringify(newState));
			return newState;
		}
	case 'remove':
		newState = state.filter((item)=>{
			return (parseInt(item.userId)!==parseInt(userId))
				&& (parseInt(item.subjectId)!==parseInt(subjectId))
		});
		localStorage.setItem('achievements',JSON.stringify(newState));
		return newState;
	}
}

export {
	achievementsDefault,
	achievementsReducer,
}