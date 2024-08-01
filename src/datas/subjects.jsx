import * as Subject1_1 from "./subjects/Subject1_1";
import * as Subject1_2 from "./subjects/Subject1_2";
import * as Subject1_3 from "./subjects/Subject1_3";
import * as Subject1_4 from "./subjects/Subject1_4";
import * as Subject1_5 from "./subjects/Subject1_5";
import * as Subject2_1 from "./subjects/Subject2_1";
import * as Subject2_2 from "./subjects/Subject2_2";
import * as Subject2_3 from "./subjects/Subject2_3";
let counter = 0

const SUBJECTS = [
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 0,
		name: '점과 선 1',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '화면상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_2.Controller,
		adjust:Subject1_2.Adjust,
		scene:Subject1_2.Scene,
		actId: 0,
		name: '점과 선 2',
		thumb: '/ezdomath/thumb/subject1_2.png',
		zimoon: '화면상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_3.Controller,
		adjust:Subject1_3.Adjust,
		scene:Subject1_3.Scene,
		actId: 0,
		name: '점과 선 3',
		thumb: '/ezdomath/thumb/subject1_3.png',
		zimoon: '화면상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_4.Controller,
		adjust:Subject1_4.Adjust,
		scene:Subject1_4.Scene,
		actId: 0,
		name: '점과 선 4',
		thumb: '/ezdomath/thumb/subject1_4.png',
		zimoon: '화면상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject1_5.Controller,
		adjust:Subject1_5.Adjust,
		scene:Subject1_5.Scene,
		actId: 0,
		name: '점과 선 5',
		thumb: '/ezdomath/thumb/subject1_5.png',
		zimoon: '화면상에 있는 점의 갯수를 숫자로 입력하세요.'
	},
	{
		subjectId:counter++,
		controller:Subject2_1.Controller,
		adjust:Subject2_1.Adjust,
		scene:Subject2_1.Scene,
		actId: 1,
		name: '도형 변환1',
		thumb: '/ezdomath/thumb/subject2_1.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)'
	},
	{
		subjectId:counter++,
		controller:Subject2_2.Controller,
		adjust:Subject2_2.Adjust,
		scene:Subject2_2.Scene,
		actId: 1,
		name: '도형 변환2',
		thumb: '/ezdomath/thumb/subject2_2.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)'
	},
	{
		subjectId:counter++,
		controller:Subject2_3.Controller,
		adjust:Subject2_3.Adjust,
		scene:Subject2_3.Scene,
		actId: 1,
		name: '도형 변환3',
		thumb: '/ezdomath/thumb/subject2_3.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 2,
		name: '수학문제 3-1',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 2,
		name: '수학문제 3-2',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 2,
		name: '수학문제 3-3',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 2,
		name: '수학문제 3-4',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 2,
		name: '수학문제 3-5',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 3,
		name: '수학문제 4-1',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 3,
		name: '수학문제 4-2',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 3,
		name: '수학문제 4-3',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 3,
		name: '수학문제 4-4',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
	{
		subjectId:counter++,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 3,
		name: '수학문제 4-5',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '수학문제 지문'
	},
]

export {
	SUBJECTS
}