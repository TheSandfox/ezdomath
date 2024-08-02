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
import { PageKakaoRegisterDetail } from "./components/pages/register/PageKakaoRegisterDetail";
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

  // Kakao 사용자 정보 상태
  const [kakaoUserInfo, setKakaoUserInfo] = useState(null);

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
      handleUserContext.setUser(loginSuccess);
      return loginSuccess; // 로그인 성공 시 유저 정보를 반환
    } else {
      return null; // 로그인 실패
    }
  };

  // 카카오 로그인 로직
  const handleKakaoLogin = () => {
    const kakaoUserInfo = JSON.parse(localStorage.getItem('kakao_user_info'));
    if (kakaoUserInfo) {
      const kakaoUserId = `kakao_${kakaoUserInfo.id}`;
      const existingUser = users.find(user => user.stringId === kakaoUserId);
      const kakaoUser = existingUser || {
        stringId: kakaoUserId,
        name: kakaoUserInfo.nickname,
        profile: kakaoUserInfo.profile_image,
        userTypeId: 0, // 기본 회원 유형
      };
      handleUserContext.setUser(kakaoUser);
      return kakaoUser;
    } else {
      return null;
    }
  };

  const handleLogout = () => {
    const logoutSuccess = userContextValue.user;
    setUserContextValue((prev) => ({
      ...prev,
      user: null,
    }));
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('kakao_token'); // 로그아웃 시 Kakao 토큰 삭제
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
    setKakaoUserInfo: setKakaoUserInfo, // Kakao 사용자 정보 설정 함수
    logout: handleLogout,
    login: handleLogin,
    kakaoLogin: handleKakaoLogin, // Kakao 로그인 함수 추가
    addUser: (user) => {
      dispatchUsers({ type: "add", ...user });
    },
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
          kakaoUserInfo: kakaoUserInfo, // Kakao 사용자 정보 추가
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
          {/* 카카오 회원 정보 입력 */}
          <Route path={"/kakao-detail/*"} element={<PageKakaoRegisterDetail />}/>
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;

