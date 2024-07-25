const ACTS = [
	{
		//actId
		name: '1단원',
	},
	{
		name: '2단원',
	},
	{
		name: '3단원',
	},
	{
		name: '4단원',
	}
]

//id인덱싱
ACTS.forEach((item,index)=>{
	item.actId = index;
})

export {
	ACTS
}
