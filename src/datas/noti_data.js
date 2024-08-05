// 날짜를 'YYYY.MM.DD' 형식으로 포맷팅하는 함수
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

// 초기 공지사항 데이터 배열
const initialNotices = [
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
        notiId: 1,
        title: '중요하지 않은 공지상입니다.',
        time: formatDate(new Date()),
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

// 로컬스토리지에서 공지사항 데이터를 불러오는 함수
const loadNoticesFromLocalStorage = () => {
    const storedNotices = localStorage.getItem('notices');
    return storedNotices ? JSON.parse(storedNotices) : [];
};

// 초기 공지사항 데이터와 로컬스토리지 데이터를 병합하는 함수
const mergeInitialAndStoredNotices = () => {
    const storedNotices = loadNoticesFromLocalStorage();
    const allNotices = [...initialNotices, ...storedNotices];
    // 중복 제거 (중복 기준: notiId)
    const uniqueNotices = Array.from(new Set(allNotices.map(noti => noti.notiId)))
                               .map(id => allNotices.find(noti => noti.notiId === id));
    return uniqueNotices;
};

// 공지사항 데이터를 저장하고 병합된 공지사항 배열을 반환
const Noti = mergeInitialAndStoredNotices();

// 로컬스토리지에 공지사항 데이터를 저장하는 함수
const saveNoticesToLocalStorage = (notices) => {
    localStorage.setItem('notices', JSON.stringify(notices));
};

// 최고 notiId 값을 계산하는 함수
const getNextNotiId = () => {
    const ids = Noti.map(noti => noti.notiId);
    return ids.length ? Math.max(...ids) + 1 : 1;
};

// 새로운 공지사항을 추가하는 함수, unshift로 역순추가
const addNotice = (title, content, important) => {
    const newNotice = {
        notiId: getNextNotiId(),
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
    saveNoticesToLocalStorage(Noti);
};

export { Noti, addNotice, saveNoticesToLocalStorage };
