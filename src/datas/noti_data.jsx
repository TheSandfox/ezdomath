// 날짜를 'YYYY.MM.DD' 형식으로 포맷팅하는 함수
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

// 초기 공지사항 데이터 배열
const Noti = [
    {
        notiId: 0,
        title: '중요 공지사항입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: true,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
    {
        notiId: 1,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: false,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
    {
        notiId: 2,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: false,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
    {
        notiId: 3,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: false,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
    {
        notiId: 4,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: false,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
    {
        notiId: 5,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),  // 현재 날짜와 시간으로 설정
        important: false,
        item: [
            {
                type: "text",
                content: "다양한 선의 종류에 대해 배워볼 거예요.\n선에는 여러 종류가 있는데, 직선, 반직선, 그리고 선분이 있어요.\n각각의 선이 어떤 특징을 가지고 있는지 알아보고, 예제를 통해 이해해볼까요?",
            },
        ],
    },
];

// 다음 공지사항 ID를 초기 공지사항 수로 설정
let nextNotiId = Noti.length;

// 새로운 공지사항을 추가하는 함수, unshift로 역순추가
const addNotice = (title, content, important) => {
    const newNotice = {
        notiId: nextNotiId++,
        title,
        time: formatDate(new Date()),
        important,
        item: [
            {
                type: "text",
                content,
            },
        ],
    };
    Noti.unshift(newNotice);
};

// addNotice=게시판 쓰기에 내보냄
export { Noti, addNotice };
