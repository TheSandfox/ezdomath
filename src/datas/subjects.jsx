import * as Subject1_1 from "./subjects/Subject1_1";
import * as Subject1_2 from "./subjects/Subject1_2";
import * as Subject1_3 from "./subjects/Subject1_3";
import * as Subject1_4 from "./subjects/Subject1_4";
import * as Subject1_5 from "./subjects/Subject1_5";
import * as Subject2_1 from "./subjects/Subject2_1";
let counter = 0

const SUBJECTS = [
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 0,
		name: '점과 선 1',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '화면 상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_2.Controller,
		adjust:Subject1_2.Adjust,
		scene:Subject1_2.Scene,
		actId: 0,
		name: '점과 선 2',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '화면 상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_3.Controller,
		adjust:Subject1_3.Adjust,
		scene:Subject1_3.Scene,
		actId: 0,
		name: '점과 선 3',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '화면 상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_4.Controller,
		adjust:Subject1_4.Adjust,
		scene:Subject1_4.Scene,
		actId: 0,
		name: '점과 선 4',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '화면 상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_5.Controller,
		adjust:Subject1_5.Adjust,
		scene:Subject1_5.Scene,
		actId: 0,
		name: '점과 선 5',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '화면 상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject2_1.Controller,
		adjust:Subject2_1.Adjust,
		scene:Subject2_1.Scene,
		actId: 1,
		name: '수학문제 2-1',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 1,
		name: '수학문제 2-2',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 1,
		name: '수학문제 2-3',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 1,
		name: '수학문제 2-4',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 1,
		name: '수학문제 2-5',
		thumb: '/ezdomath/profile/dummy2.png',
		zimoon: '수학문제 지문'
	},
]

export {
	SUBJECTS
}