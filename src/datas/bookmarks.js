const bookmarksDefault = localStorage.getItem('bookmarks')
	?localStorage.getItem('bookmarks')
	:[
		{
			userId:0,
			subjectId:0
		},
		{
			userId:0,
			subjectId:1
		},
		{
			userId:0,
			subjectId:2
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
		localStorage.setItem('bookmarks',newState);
		return newState;
	case 'remove':
		newState = state.filter((item)=>{
			return (parseInt(item.userId)!==parseInt(userId))
				&& (parseInt(item.subjectId)!==parseInt(subjectId))
		});
		localStorage.setItem('bookmarks',newState);
		return newState;
	}
}

export {
	bookmarksDefault,
	bookmarksReducer,
}