const bookmarksDefault = localStorage.getItem('bookmarks')
	?JSON.parse(localStorage.getItem('bookmarks'))
	:[
		{
			userId:0,
			subjectId:100
		},
		{
			userId:0,
			subjectId:101
		},
		{
			userId:0,
			subjectId:102
		}
	];

const bookmarksReducer = (state,action)=>{
	let { userId, subjectId } = action;
	let newState;
	switch (action.type) {
	case 'add':
		newState = [
			...state,
			{
				userId,
				subjectId
			}
		];
		localStorage.setItem('bookmarks',JSON.stringify(newState));
		return newState;
	case 'remove':
		newState = state.filter((item)=>{
			return (parseInt(item.userId)!==parseInt(userId))
				|| (parseInt(item.subjectId)!==parseInt(subjectId))
		});
		localStorage.setItem('bookmarks',JSON.stringify(newState));
		return newState;
	}
}

export {
	bookmarksDefault,
	bookmarksReducer,
}