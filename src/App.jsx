import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageMain } from "/src/components/pages/main/PageMain";
import { PagePlay } from "/src/components/pages/play/PagePlay";
import { PageIntro } from "/src/components/pages/intro/PageIntro";
import { PageNotice } from "/src/components/pages/notice/PageNotice";
import { PageMy } from "/src/components/pages/my/PageMy";
import { PageLogin } from "/src/components/pages/login/PageLogin";
import { PageRegister } from "/src/components/pages/register/PageRegister";
import { PageRegisterDetail } from "./components/pages/register/pageDetailRegister";
import { createContext, useEffect, useReducer, useState } from "react";
import { bookmarksDefault, bookmarksReducer } from "./datas/bookmarks";
import { usersDefault, usersReducer } from "./datas/users";
import { friendsDefault, friendsReducer } from "./datas/friends";
import { achievementsDefault, achievementsReducer } from "./datas/achievements";
import { invitationsDefault, invitationsReducer } from "./datas/invitations";
import {
  notificationsDefault,
  notificationsReducer,
} from "./datas/notifications";
import { qnasDefault, qnasReducer } from "./datas/qnas";

export const userContext = createContext(null);

function App() {
  // 앱 전반적인 설정&핸들러
  const [userContextValue, setUserContextValue] = useState({
    user: null,
  });

  // 동적데이터들
  const [bookmarks, dispatchBookmarks] = useReducer(
    bookmarksReducer,
    bookmarksDefault
  );
  const [achievements, dispatchAchievements] = useReducer(
    achievementsReducer,
    achievementsDefault
  );
  const [users, dispatchUsers] = useReducer(usersReducer, usersDefault);
  const [friends, dispatchFriends] = useReducer(friendsReducer, friendsDefault);
  const [invitations, dispatchInvitations] = useReducer(
    invitationsReducer,
    invitationsDefault
  );
  const [notifications, dispatchNotifications] = useReducer(
    notificationsReducer,
    notificationsDefault
  );
  const [qnas, dispatchQnas] = useReducer(qnasReducer, qnasDefault);

  // 로그인 로직
  const handleLogin = (stringId, password) => {
    const allUsers = [...usersDefault, ...users];
    const loginSuccess = allUsers.find(
      (user) => user.stringId === stringId && user.password === password
    );
    if (loginSuccess) {
      console.log(users); // 확인 용
      handleUserContext.setUser(loginSuccess);
      return loginSuccess; // 로그인 성공 시 유저 정보를 반환
    } else {
      return null; // 로그인 실패
    }
  };

  const handleLogout = () => {
    const logoutSuccess = userContextValue.user;
    setUserContextValue((prev) => ({
      ...prev,
      user: null,
    }));
    sessionStorage.removeItem('currentUser');
    return logoutSuccess;
  };

  const handleUserContext = {
    setUser: (newUser) => {
      if (newUser) {
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
      } else {
        sessionStorage.removeItem('currentUser');
      }
      setUserContextValue((prev) => ({
        ...prev,
        user: newUser,
      }));
    },
    setUserById: (userId) => {
      const allUsers = [...usersDefault, ...users];
      handleUserContext.setUser(
        allUsers.find((item) => parseInt(item.userId) === parseInt(userId))
      );
    },
    logout: handleLogout,
    login: handleLogin,
    // dispatchUsers로 새 유저 저장
    addUser: (user) => {
      dispatchUsers({ type: "add", ...user });
    },
    // dispatchUsers로 해당 유저 삭제 및 로그아웃
    removeUser: (userId) => {
      dispatchUsers({ type: "remove", userId });
      handleLogout();
    },
  };

  // 유저 바꿔치기 치트(임시)
  useEffect(() => {
    const cheat = (e) => {
      if (!e.shiftKey) {
        return;
      }
      if (!e.code.includes("Digit")) {
        return;
      }
      handleUserContext.setUserById(e.code.substring(5));
    };
    window.addEventListener("keydown", cheat);
    return () => {
      window.removeEventListener("keydown", cheat);
    };
  }, []);
  	// 유저정보가져오기
	useEffect(()=>{
		handleUserContext.setUser(
			sessionStorage.getItem('currentUser')
			?JSON.parse(sessionStorage.getItem('currentUser'))
			:null
		)
	},[])

    // 페이지가 변경될 때마다 스크롤 상태를 재설정
    const location = useLocation();
    useEffect(() => {
        document.body.style.overflow = 'auto';
        // window.scrollTo(0, 0);
    }, [location]);

  // 리턴 JSX
  return (
    <>
      <userContext.Provider
        value={{
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
          dispatchQnas: dispatchQnas,
        }}
      >
        <Routes>
          {/* 메인 */}
          <Route path={"/*"} element={<PageMain />} />
          <Route path={"/main"} element={<PageMain />} />
          {/* 문제풀이페이지 */}
          <Route path={"/play/:actId/:subjectId/"} element={<PagePlay />} />
          <Route path={"/play/:actId/*"} element={<PagePlay />} />
          {/* 사이트소개 */}
          <Route path={"/intro/*"} element={<PageIntro />} />
          {/* 공지리스트 */}
          <Route path={"/notice/*"} element={<PageNotice />} />
          {/* 마이페이지 */}
          <Route path={"/my/*"} element={<PageMy />} />
          {/* 로그인 선택 */}
          <Route path={"/login/*"} element={<PageLogin />} />
          {/* 회원가입 */}
          <Route path={"/register/*"} element={<PageRegister />} />
          {/* 회원 정보 입력 */}
          <Route path={"/detail/*"} element={<PageRegisterDetail />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;

