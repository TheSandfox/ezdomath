const bookmarkDefault = [
	{
		userId:123,
		subjectId:0
	},
	{
		userId:123,
		subjectId:1
	},
	{
		userId:123,
		subjectId:2
	}
]

const bookmarkReducer = (state,action)=>{
	let { userId, subjectId } = action;
	switch (action.type) {
	case 'add':
		return [
			...state,
			{
				userId,
				subjectId
			}
		]
	case 'remove':
		return state.filter((item)=>{
			return (parseInt(item.userId)!==parseInt(userId))
				&& (parseInt(item.subjectId)!==parseInt(subjectId))
		})
	}
}

export {
	bookmarkDefault,
	bookmarkReducer,
}