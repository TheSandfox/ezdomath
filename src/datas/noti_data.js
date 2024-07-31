// 날짜를 'YYYY.MM.DD' 형식으로 포맷팅하는 함수
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
};

// 로컬스토리지에서 공지사항 데이터를 불러오는 함수
const loadNoticesFromLocalStorage = () => {
    const storedNotices = localStorage.getItem('notices');
    return storedNotices ? JSON.parse(storedNotices) : [];
};

// 초기 공지사항 데이터 배열
const Noti = loadNoticesFromLocalStorage();

// 로컬스토리지에 공지사항 데이터를 저장하는 함수
const saveNoticesToLocalStorage = (notices) => {
    localStorage.setItem('notices', JSON.stringify(notices));
};

// 최고 notiId 값을 계산하는 함수
const getNextNotiId = () => {
    const ids = Noti.map(noti => noti.notiId);
    return ids.length ? Math.max(...ids) + 1 : 0;
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
