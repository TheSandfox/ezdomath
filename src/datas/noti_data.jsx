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
        time: formatDate(new Date()),
        important: true,
        item: [
            {
                type: "text",
                content: "홈페이지에 방문시 반드시 상단의 EZDOMATH를 먼저 눌러주세요!\n\n홈페이지에서 사용할 수 있는 컨텐츠와\n사용할 수 있는 기능들을 설명하고 있습니다.",
            },
        ],
    },
    {
        notiId: 2,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 3,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 4,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 5,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 6,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 7,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 8,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 9,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 10,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 11,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 12,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 13,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 14,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 15,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 16,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 17,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 18,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 19,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 20,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 21,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 22,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 23,
        title: '수업관련 공지입니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지에 3D를 사용하여 문제풀이가 가능해졌습니다.\n해당기능을 사용하여 문제를 풀고\n학습진도율을 높여보세요!",
            },
        ],
    },
    {
        notiId: 24,
        title: '홈페이지 이용에 불편함이 있는경우',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 25,
        title: '업데이트가 되었습니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 26,
        title: '문제풀이가 추가되었습니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 27,
        title: '구독기능이 추가되었습니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 28,
        title: '자녀등록과 학생등록을 반드시 해주세요.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 29,
        title: '회원가입을 통해만 사용할 수 있는 매뉴',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 30,
        title: '마이페이지 이용가이드',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 31,
        title: '질문 기능이 추가되었습니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 32,
        title: '진도율 기능이 추가되었습니다.',
        time: formatDate(new Date()),
        important: false,
        item: [
            {
                type: "text",
                content: "홈페이지 첫 페이지의 맨 아래에 있는 문의사항을 눌러 요청해주세요.",
            },
        ],
    },
    {
        notiId: 33,
        title: '게시판 페이지 이용 가이드',
        time: formatDate(new Date()),
        important: true,
        item: [
            {
                type: "text",
                content: "important: true가 들어간 경우 페이지 상단에 노출됩니다.\n\n 일반 게시물은 5개까지 하위에 노출되며, 페이지네이션을 사용하여 게시글 갯수를을 계산하고\n\n 다음페이지로 이전됩니다.",
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
