import * as Subject1_1 from "./subjects/Subject1_1";

const subjects = [
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
	},
]

//id인덱싱
subjects.forEach((item,index)=>{
	item.subjectId = index;
})

export {
	subjects
}