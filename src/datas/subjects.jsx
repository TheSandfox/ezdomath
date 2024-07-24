import * as Subject1_1 from "./subjects/Subject1_1";

const SUBJECTS = [
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 0,
		name: '수학문제 1-1'
	},
	{
		//0
		//subjectId:1
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 0,
		name: '수학문제 1-2'
	},
	{
		//0
		//subjectId:2
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 0,
		name: '수학문제 1-3'
	},
	{
		//0
		//subjectId:3
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 0,
		name: '수학문제 1-4'
	},
	{
		//0
		//subjectId:4
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 0,
		name: '수학문제 1-5'
	},
	{
		//0
		//subjectId:5
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 1,
		name: '수학문제 2-1'
	},
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 1,
		name: '수학문제 2-2'
	},
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 1,
		name: '수학문제 2-3'
	},
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 1,
		name: '수학문제 2-4'
	},
	{
		//0
		//subjectId:0
		controller:<Subject1_1.Controller/>,
		adjust:<Subject1_1.Adjust/>,
		scene:<Subject1_1.Scene/>,
		actId: 1,
		name: '수학문제 2-5'
	},
]

//id인덱싱
SUBJECTS.forEach((item,index)=>{
	item.subjectId = index;
})

export {
	SUBJECTS
}