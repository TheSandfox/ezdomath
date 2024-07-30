import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { PageMain } from '/src/components/pages/main/PageMain'
import { PagePlay } from '/src/components/pages/play/PagePlay'
import { PageIntro } from '/src/components/pages/intro/PageIntro'
import { PageNotice } from '/src/components/pages/notice/PageNotice'
import { PageMy } from '/src/components/pages/my/PageMy'
import { PageLogin } from '/src/components/pages/login/PageLogin'
import { PageRegister } from '/src/components/pages/register/PageRegister'
import { PageRegisterDetail } from './components/pages/register/pageDetailRegister'
import { createContext, useEffect, useReducer, useState } from 'react'
import { bookmarksDefault, bookmarksReducer } from './datas/bookmarks'
import { usersDefault, usersReducer } from './datas/users'
import { friendsDefault, friendsReducer } from './datas/friends'
import { achievementsDefault, achievementsReducer } from './datas/achievements'
import { invitationsDefault, invitationsReducer } from './datas/invitations'
import { notificationsDefault, notificationsReducer } from './datas/notifications'
import { qnasDefault, qnasReducer } from './datas/qnas'

export const userContext = createContext(null);

function App() {
	// 앱 전반적인 설정&핸들러
	const [userContextValue,setUserContextValue] = useState({
		user:null,	
	});
	// 0729 신효준 추가, 로그인 로직 테스트
    const handleLogin = (stringId, password) => {
        // 로그인 로직, 성공 시:
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleUserContext = {
        setUser: (newUser) => {
            // 유저객체 변경
            setUserContextValue((prev) => {
                return {
                    ...prev,
                    user: newUser
                }
            })
        },
        logout: () => {
            setUserContextValue(prev => ({
                ...prev,
                user: null
            }));
        },
		// 0729 신효준 추가, 로그인 로직 테스트
        login: (stringId, password) => {
            // Example: Validate user with dummy data
            const isValid = users.find(user => user.stringId === stringId && user.password === password);
            if (isValid) {
                handleUserContext.setUser(isValid);
            }
        }
    }
    // 동적데이터들
    const [bookmarks, dispatchBookmarks] = useReducer(bookmarksReducer, bookmarksDefault);
    const [achievements, dispatchAchievements] = useReducer(achievementsReducer, achievementsDefault);
    const [users, dispatchUsers] = useReducer(usersReducer, usersDefault);
    const [friends, dispatchFriends] = useReducer(friendsReducer, friendsDefault);
    const [invitations, dispatchInvitations] = useReducer(invitationsReducer, invitationsDefault);
    const [notifications, dispatchNotifications] = useReducer(notificationsReducer, notificationsDefault);
    const [qnas, dispatchQnas] = useReducer(qnasReducer, qnasDefault);
    
    // 로그인유저 설정(임시)
    useEffect(() => {
        handleUserContext.setUser(
            users.find((item) => {
                return parseInt(item.userId) === parseInt(2);
            })
        );
    }, [users]);

    // 페이지가 변경될 때마다 스크롤 상태를 재설정
    const location = useLocation();
    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [location]);

    // 리턴 JSX
    return (
        <>
            <userContext.Provider value={{
                ...userContextValue,
                handleUserContext: handleUserContext,
                bookmarks: bookmarks,
                dispatchBookmarks: dispatchBookmarks,
                achievements: achievements,
                dispatchAchievements: dispatchAchievements,
                users: users,
                dispatchUsers: dispatchUsers,
                friends: friends,
                dispatchFriends: dispatchFriends,
                invitations: invitations,
                dispatchInvitations: dispatchInvitations,
                notifications: notifications,
                dispatchNotifications: dispatchNotifications,
                qnas: qnas,
                dispatchQnas: dispatchQnas
            }}>
                <Routes>
                    {/* 메인 */}
                    <Route path={'/*'} element={<PageMain />} />
                    <Route path={'/main'} element={<PageMain />} />
                    {/* 문제풀이페이지 */}
                    <Route path={'/play/:actId/:subjectId/'} element={<PagePlay />} />
                    <Route path={'/play/:actId/*'} element={<PagePlay />} />
                    {/* <Route path={'/play/0'} /> */}
                    {/* 사이트소개 */}
                    <Route path={'/intro/*'} element={<PageIntro />} />
                    {/* 공지리스트 */}
                    <Route path={'/notice/*'} element={<PageNotice />} />
                    {/* 마이페이지 */}
                    <Route path={'/my/*'} element={<PageMy />} />
                    {/* 로그인 선택 */}
                    <Route path={'/login/*'} element={<PageLogin />} />
                    {/* 회원가입 */}
                    <Route path={'/register/*'} element={<PageRegister />} />
                    {/* 회원 정보 입력 */}
                    <Route path={'/detail/*'} element={<PageRegisterDetail />} />
                </Routes>
            </userContext.Provider>
        </>
    );
}

export default App;