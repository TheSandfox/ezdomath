import line1 from "/img/Act1_line1.png"
import line2 from "/img/Act1_line2.png"
import line3 from "/img/Act1_line3.png"
import line4 from "/img/Act1_line4.png"
import move1 from "/img/Act2_move.webp"
import rotation1 from  "/img/Act2_rotation.webp"
import angle1 from  "/img/Act2_angle.webp"
import reflection1 from "/img/Act2_reflection.webp"
import square1 from "/img/Act3_square.webp"
import triangle1 from "/img/Act3_triangle.png"
import rhombus1 from "/img/Act3_rhombus.webp"
import parallenlogram1 from "/img/Act3_parallelogram.jpg"
import trapezoid1 from "/img/Act3_trapezoid.webp" 
import box1 from "/img/Act4_box.webp"

const ACTS = [
	{
	  actId: 0,
	  name: '[초3] 1단원: 선의 종류',
	  title: "초등학생 3학년 1단원 수업: 선의 종류",
	  items: [
		{ type: "text", 
		content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?", 
		  // highlights: ["선분", "예제"] highlights=글자에 색을 추가하는 데이터
		  },
		{ type: "text", 
		content: "1. 직선(Line)\n직선은 시작점도 끝점도 없이 끝없이 뻗어 있는 선이에요. 우리가 도형을 그릴 때 많이 사용되는 선이랍니다.", 
		  highlights: ["끝없이 뻗어 있는 선"]
		},
		{ type: "text",
		content: "예제:\n여러분이 자를 사용할 때, 자의 길이를 넘어 계속 뻗어 나가는 선을 그릴 수 있겠죠? 이것이 바로 직선이에요.\n아래 그림처럼, A지점과 B지점을 지나는 직선을 그려보세요. 이 직선은 A와 B를 포함하여 무한히 뻗어 있어요.",
		  highlights:["계속 뻗어 나가는 선"]
		},
		{ type: "image", src: line1, alt: "line1" },
		{ type: "text",
		content: "2. 반직선(Ray)\n반직선은 한쪽 끝은 고정된 점(시작점)을 가지며, 다른 쪽은 무한히 뻗어 있는 선이에요.",
		highlights:["한쪽 끝은 고정된 점","무한히 뻗어 있는 선"]
		},
		{ type: "text",
		content: "예제:\n해가 뜨는 모습을 생각해보세요. 해에서 출발하는 빛은 한 방향으로 계속 뻗어나가죠? 이것이 바로 반직선이에요.\n 아래 그림처럼, A지점에서 시작하여 한 방향으로 계속 뻗어 나가는 선을 그려보세요. 이것이 반직선이에요.",
		},
		{ type: "image", src: line2, alt: "line2" },
		{ type: "text",
		content: "3. 선분(Line Segment)\n선분은 두 점 A와 B를 잇는 직선의 일부분으로, 시작점과 끝점을 가지고 그 사이의 모든 점을 포함합니다.",
		highlights:["시작점과 끝점을 가지고 그 사이의 모든 점"]
		},
		{ type: "image", src: line3, alt: "line3" },
		{ type: "text",
		content: "4. 각(Line Segment)\n각이란, 한 점에서 그은 두 '반직선'이 이루는 도형입니다. 90도의 각을 직각 이라고 부릅니다. ",
		highlights:[`'반직선'`]
		},
		{ type: "image", src: line4, alt: "line4" },
		{ type: "text",
		content: "문제풀이를 통해 수업 진도율을 높여보세요!"
		}
	  ],
	},
	{
	  actId: 1,
	  name: '[초4] 2단원: 도형의 이동 회전',
	  title: "초등학생 4학년 2단원: 도형의 이동 회전",
	  items: [
		{ type: "text", 
		content: "우리 주위에는 다양한 도형들이 많이 있어요.\n오늘은 그 도형들이 어떻게 움직이고 변하는지 함께 알아보도록 할 거예요.\n\n도형들은 움직이는 방식에 따라 여러 가지 방법으로 변화할 수 있답니다.", 
		  // highlights: ["선분", "예제"] highlights=글자에 색을 추가하는 데이터
		  },
		{ type: "text", 
		content: "이동에 대해서 배워볼게요. 도형을 한 곳에서 다른 곳으로 옮길 때, 도형의 모양과 크기는 변하지 않아요.\n이동은 도형이 그대로 다른 위치로 옮겨지는 것을 말해요.", 
		  highlights: ["이동", "그대로 다른 위치로 옮겨지는 것"]
		},
		{ type: "image", src: move1, alt: "move1" },
		
		{ type: "text",
		content: "다음으로, 회전에 대해 알아볼 거예요. 도형을 한 점을 중심으로 돌리면 도형이 회전하게 돼요.\n이때도 도형의 모양과 크기는 그대로 유지된답니다.",
		  highlights:["한 점을 중심으로 돌리면 도형이 회전"]
		},
		{ type: "text",
		content: "중심점 (Center of Rotation): 회전의 중심이 되는 점이에요. 도형은 이 점을 기준으로 돌아갑니다.",
		highlights:["점을 기준"]
		},
		{ type: "text",
		content: "시계 방향 (Clockwise): 시계가 돌아가는 방향으로 도형이 돌아가는 거예요.\n반시계 방향 (Counterclockwise): 시계가 돌아가는 반대 방향으로 도형이 돌아가는 거예요.",
		highlights:["시계가 돌아가는 방향","시계가 돌아가는 반대 방향"]
		},
		{ type: "image", src: rotation1, alt: "rotation1" },
		{ type: "text",
		content: "각도 (Angle of Rotation): 도형이 얼마나 돌아가는지를 나타내요.\n이 각도는 도 단위로 측정하고, 90도, 180도, 270도, 360도 등으로 표현할 수 있어요.",
		},
		{ type: "text",
		content: "회전 후에도 도형의 모양과 크기는 변하지 않아요.\n도형의 위치는 바뀌지만, 각 꼭짓점은 회전 중심점에서 같은 거리를 유지해요.\n회전 중심점은 회전 전후에 그대로 유지돼요.",
		highlights:['회전 중심점은 회전 전후에 그대로 유지']
		},
		{ type: "image", src: angle1, alt: "angle1" },
		{ type: "text",
		content: "대칭은 도형을 어떤 선을 기준으로 접었을 때 양쪽이 똑같이 되는 거예요. 이때 도형의 모양과 크기는 변하지 않아요.\n대칭축 (Line of Symmetry): 도형을 대칭으로 나눌 수 있는 선이에요. 이 선을 기준으로 도형의 양쪽이 같아져요.",
		highlights:['도형을 대칭으로 나눌 수 있는 선']
		},
		{ type: "text",
		content: "대칭 후에도 도형의 모양과 크기는 변하지 않아요. 도형의 한쪽이 다른 쪽으로 뒤집혀요.",
		highlights:['모양과 크기는 변하지 않아요.', '뒤집혀요.']
		},
		{ type: "image", src: reflection1, alt: "reflection1" },
		{ type: "text",
		content: "문제풀이를 통해 수업 진도율을 높여보세요!"
		}
	  ],
	},
	{
	  actId: 2,
	  name: '[초5] 3단원: 넓이와 둘레',
	  title: "초등학생 5학년 3단원: 넓이와 둘레",
	  items: [
		{ type: "text", 
		content: "다양한 도형의 넓이와 둘레를 구하는 방법에 대해 배워보도록 할 거예요. \n우리가 자주 접하는 도형들을 하나씩 살펴볼까요?", 
		  // highlights: ["선분", "예제"] highlights=글자에 색을 추가하는 데이터
		  },
		{ type: "text", 
		content: "먼저, 사각형의 넓이와 둘레를 구하는 공식을 알려드릴게요.\n\n넓이는 가로와 세로를 곱하면 돼요. 그래서 넓이는 가로 x 세로입니다.\n\n둘레는 사각형의 모든 변을 더한 길이예요. 따라서 2 x (가로 + 세로)로 구할 수 있어요.", 
		highlights: ["넓이와 둘레를 구하는 공식", "가로와 세로를 곱하면", "사각형의 모든 변을 더한 길이"]
		},
		{ type: "text", 
		content: "다음은 정사각형이에요. 정사각형은 모든 변의 길이가 같아요.\n\n넓이는 한 변의 길이 x 한 변의 길이 또는 한 변의 길이 제곱이라고 할 수 있어요.\n\n둘레는 한 변의 길이를 4번 더한 것이에요.\n따라서 4 x 한 변의 길이로 구할 수 있답니다.", 
		highlights: ["정사각형은 모든 변의 길이가 같아요.", "넓이는 한 변의 길이 x 한 변의 길이","둘레는 한 변의 길이를 4번 더한 것","4 x 한 변의 길이"]
		},
		{ type: "image", src: square1, alt: "square1" },
		{ type: "text",
		content: "이제 삼각형을 볼까요?",
		},
		{ type: "text",
		content: "넓이는 밑변 x 높이 ÷ 2로 구할 수 있어요.\n둘레는 삼각형의 세 변을 모두 더한 길이예요. 따라서 변1 + 변2 + 변3으로 구할 수 있답니다.",
		highlights:["넓이는 밑변 x 높이 ÷ 2","둘레","삼각형의 세 변을 모두 더한 길이"]
		},
		{ type: "image", src: triangle1, alt: "triangle1" },
		{ type: "text",
		content: "마름모도 살펴볼게요.\n\n넓이는 한 대각선의 길이 x 다른 대각선의 길이 ÷ 2로 구할 수 있어요.\n\n둘레는 네 변의 길이가 모두 같으니까, 한 변의 길이를 4번 더하면 돼요.\n그래서 4 x 한 변의 길이로 구할 수 있답니다.",
		highlights:["넓이는 한 대각선의 길이 x 다른 대각선의 길이 ÷ 2","둘레","네 변의 길이가 모두 같으니까", " 4 x 한 변의 길이"]
		},
		{ type: "image", src: rhombus1, alt: "rhombus1" },
		{ type: "text",
		content: "평행사변형도 중요하죠.\n\n넓이는 밑변 x 높이로 구할 수 있어요.\n\n둘레는 밑변과 밑변에 수직인 변을 더한 다음 2를 곱해주면 돼요.\n따라서 2 x (밑변 + 높이에 수직인 변) 으로 구할 수 있어요. ",
		highlights:["넓이는 밑변 x 높이","둘레","밑변과 밑변에 수직인 변을 더한 다음 2를 곱해주면"]
		},
		{ type: "image", src: parallenlogram1, alt: "parallenlogram1" },
		{ type: "text",
		content: "마지막으로 사다리꼴을 살펴보겠습니다.\n\n넓이는 윗변과 아랫변을 더한 다음, 높이를 곱하고 2로 나눠주면 돼요.\n그래서 넓이는 (윗변 + 아랫변) x 높이 ÷ 2로 구할 수 있어요.\n\n둘레는 윗변, 아랫변, 그리고 두 변을 모두 더한 길이예요.\n따라서 윗변 + 아랫변 + 변1 + 변2로 구할 수 있답니다.",
		highlights:["넓이","윗변과 아랫변을 더한 다음, 높이를 곱하고 2로 나눠주면","둘레","윗변, 아랫변, 그리고 두 변을 모두 더한 길이"]
		},
		{ type: "image", src: trapezoid1, alt: "trapezoid1" },
		{ type: "text",
		content: "문제풀이를 통해 수업 진도율을 높여보세요!"
		}
	  ],
	},
	{
	  actId: 3,
	  name: '[초5] 4단원: 직육면체',
	  title: "초등학생 5학년 4단원: 직육면체",
	  items: [
		{ type: "text", 
		content: "3차원 도형 중 하나인 직육면체에 대해 배워보겠습니다.\n직육면체는 여섯 개의 면이 모두 직사각형인 도형으로, 모든 면이 서로 직각을 이루고 있어요.\n이제 더 자세히 알아볼까요?", 
		  // highlights: ["선분", "예제"] highlights=글자에 색을 추가하는 데이터
		  },
		{ type: "text", 
		content: "직육면체는 우리가 일상에서 흔히 볼 수 있는 직사각형 모양의 상자예요.\n예를 들어, 택배 상자나 책 같은 것들이 직육면체에 해당한답니다.", 
		  highlights: ["직육면체","직사각형 모양의 상자"]
		},
		{ type: "text",
		content: "직육면체는 6개의 평평한 면이 있어요. 이 면들은 모두 직사각형 모양이에요.\n\n직육면체에는 12개의 모서리가 있어요. 모서리는 면과 면이 만나는 선을 말해요.\n\n직육면체에는 8개의 꼭짓점이 있어요. 꼭짓점은 모서리들이 만나는 점이에요.",
		  highlights:["6개의 평평한 면","12개의 모서리","8개의 꼭짓점"]
		},
		{ type: "image", src: box1, alt: "box1" },
		{ type: "text",
		content: "문제풀이를 통해 수업 진도율을 높여보세요!"
		}
	  ],
	}
  ];
  
  export { ACTS };
  