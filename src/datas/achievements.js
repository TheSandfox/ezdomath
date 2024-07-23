const achievementsDefault = localStorage.getItem('achievements')
	?localStorage.getItem('achievements')
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

const achievementsReducer = (state,action)=>{
	let { userId, subjectId, date, correct } = action;
	let newState;
	switch (action.type) {
	case 'add':
		newState = [
			...state,
			{
				userId,
				subjectId,
				date,
				correct
			}
		];
		localStorage.setItem('achievements',newState);
		return newState;
	case 'remove':
		newState = state.filter((item)=>{
			return (parseInt(item.userId)!==parseInt(userId))
				&& (parseInt(item.subjectId)!==parseInt(subjectId))
		});
		localStorage.setItem('achievements',newState);
		return newState;
	}
}

export {
	achievementsDefault,
	achievementsReducer,
}