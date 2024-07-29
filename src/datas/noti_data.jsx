const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

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
];

export { Noti };