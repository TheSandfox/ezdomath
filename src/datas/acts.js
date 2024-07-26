import line1 from "/img/Act1_line1.png"
import line2 from "/img/Act1_line2.png"
import line3 from "/img/Act1_line3.png"
import line4 from "/img/Act1_line4.png"

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
	  actId: 2,
	  name: '[초5] 3단원: 넓이와 둘레',
	  title: "초등학생 5학년 3단원: 넓이와 둘레",
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
	  actId: 3,
	  name: '[초5] 4단원: 직육면체',
	  title: "초등학생 5학년 4단원: 직육면체",
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
	}
  ];
  
  export { ACTS };
  