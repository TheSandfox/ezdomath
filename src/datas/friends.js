const friendsDefault = localStorage.getItem('friends')
	?JSON.parse(localStorage.getItem('friends'))
	:[
		{
			userId1:0,
			userId2:1
		},
		{
			userId1:2,
			userId2:3
		},
		{
			userId1:0,
			userId2:2
		},
		{
			userId1:3,
			userId2:0
		},
		{
			userId1:0,
			userId2:4
		},
		{
			userId1:5,
			userId2:0
		},
	];

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

const friendsReducer = (state,action)=>{
	const { userId1, userId2 } = action;
	if (userId1==null||userId2==null) {return state;}
	if (userId1===userId2) {return state;}
	switch (action.type) {
	case 'add' :
		if (get===null) {
			return [
				...state,
				{
					userId1:userId1,
					userId2:userId2
				}
			]
		} else {
			return state
		}
	case 'remove' :
		return state.filter((item)=>{
			return !validate(item,userId1,userId2);
		})
 	}
}

export {
	friendsDefault,
	friendsReducer,
}