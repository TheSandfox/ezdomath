import * as Subject1_1 from "./subjects/Subject1_1";
import * as Subject1_2 from "./subjects/Subject1_2";
import * as Subject1_3 from "./subjects/Subject1_3";
import * as Subject1_4 from "./subjects/Subject1_4";
import * as Subject1_5 from "./subjects/Subject1_5";
import * as Subject2_1 from "./subjects/Subject2_1";
import * as Subject2_2 from "./subjects/Subject2_2";
import * as Subject2_3 from "./subjects/Subject2_3";
import * as Subject3_1 from "./subjects/Subject3_1";
import * as Subject3_2 from "./subjects/Subject3_2";
import * as Subject3_3 from "./subjects/Subject3_3";
import * as Subject4_1 from "./subjects/Subject4_1";
import * as Subject4_2 from "./subjects/Subject4_2";

const SUBJECTS = [
	// 1단원=========================================================================
	{
		subjectId:100,
		controller:Subject1_1.Controller,
		adjust:Subject1_1.Adjust,
		scene:Subject1_1.Scene,
		actId: 0,
		name: '점과 선 1',
		thumb: '/ezdomath/thumb/subject1_1.png',
		zimoon: '화면에 표시된 점의 갯수를 숫자로 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:101,
		controller:Subject1_2.Controller,
		adjust:Subject1_2.Adjust,
		scene:Subject1_2.Scene,
		actId: 0,
		name: '점과 선 2',
		thumb: '/ezdomath/thumb/subject1_2.png',
		zimoon: '화면에 표시된 점의 갯수를 숫자로 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:102,
		controller:Subject1_3.Controller,
		adjust:Subject1_3.Adjust,
		scene:Subject1_3.Scene,
		actId: 0,
		name: '점과 선 3',
		thumb: '/ezdomath/thumb/subject1_3.png',
		zimoon: '화면에 표시된 점의 갯수를 숫자로 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:103,
		controller:Subject1_4.Controller,
		adjust:Subject1_4.Adjust,
		scene:Subject1_4.Scene,
		actId: 0,
		name: '점과 선 4',
		thumb: '/ezdomath/thumb/subject1_4.png',
		zimoon: '화면에 표시된 점의 갯수를 숫자로 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:104,
		controller:Subject1_5.Controller,
		adjust:Subject1_5.Adjust,
		scene:Subject1_5.Scene,
		actId: 0,
		name: '점과 선 5',
		thumb: '/ezdomath/thumb/subject1_5.png',
		zimoon: '화면에 표시된 점의 갯수를 숫자로 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	// 2단원=========================================================================
	{
		subjectId:200,
		controller:Subject2_1.Controller,
		adjust:Subject2_1.Adjust,
		scene:Subject2_1.Scene,
		actId: 1,
		name: '도형 변환1',
		thumb: '/ezdomath/thumb/subject2_1.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:201,
		controller:Subject2_2.Controller,
		adjust:Subject2_2.Adjust,
		scene:Subject2_2.Scene,
		actId: 1,
		name: '도형 변환2',
		thumb: '/ezdomath/thumb/subject2_2.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:202,
		controller:Subject2_3.Controller,
		adjust:Subject2_3.Adjust,
		scene:Subject2_3.Scene,
		actId: 1,
		name: '도형 변환3',
		thumb: '/ezdomath/thumb/subject2_3.png',
		zimoon: '화면상의 도형에 적용되고 있는 변환은 어떤 변환인가요? (이동, 회전, 축척)',
		hint:'문제에 대한 힌트입니다.'
	},
	// 3단원=========================================================================
	{
		subjectId:300,
		controller:Subject3_1.Controller,
		adjust:Subject3_1.Adjust,
		scene:Subject3_1.Scene,
		actId: 2,
		name: '정사각형의 둘레',
		thumb: '/ezdomath/thumb/subject3_1.png',
		zimoon: '화면에 표시된 정사각형의 둘레를 입력하세요.',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:301,
		controller:Subject3_2.Controller,
		adjust:Subject3_2.Adjust,
		scene:Subject3_2.Scene,
		actId: 2,
		name: '직사각형의 넓이',
		thumb: '/ezdomath/thumb/subject3_2.png',
		zimoon: '화면에 표시된 직사각형의 넓이를 입력하세요',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:302,
		controller:Subject3_3.Controller,
		adjust:Subject3_3.Adjust,
		scene:Subject3_3.Scene,
		actId: 2,
		name: '마름모의 넓이',
		thumb: '/ezdomath/thumb/subject3_3.png',
		zimoon: '화면에 표시된 마름모의 넓이를 입력하세요',
		hint:'문제에 대한 힌트입니다.'
	},
	// 4단원=========================================================================
	{
		subjectId:400,
		controller:Subject4_1.Controller,
		adjust:Subject4_1.Adjust,
		scene:Subject4_1.Scene,
		actId: 3,
		name: '직육면체의 부피1',
		thumb: '/ezdomath/thumb/subject4_1.png',
		zimoon: '화면에 표시된 직육면체의 부피를 입력하세요',
		hint:'문제에 대한 힌트입니다.'
	},
	{
		subjectId:401,
		controller:Subject4_2.Controller,
		adjust:Subject4_2.Adjust,
		scene:Subject4_2.Scene,
		actId: 3,
		name: '직육면체의 부피2',
		thumb: '/ezdomath/thumb/subject4_2.png',
		zimoon: '화면에 표시된 직육면체의 부피를 입력하세요',
		hint:'문제에 대한 힌트입니다.'
	},
	
]

export {
	SUBJECTS
}