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
import { notificationsDefault, notificationsReducer } from "./datas/notifications";
import { qnasDefault, qnasReducer } from "./datas/qnas";

export const userContext = createContext(null);

function App() {
  
  // 앱 전반적인 설정&핸들러
  const [userContextValue, setUserContextValue] = useState({
    user: JSON.parse(sessionStorage.getItem('currentUser')) || null,
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
      return loginSuccess;
    } else {
      return null;
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
        userTypeId: 0,
      };
      handleUserContext.setUser(kakaoUser);
      return kakaoUser;
    } else {
      return null;
    }
  };

  const handleLogout = () => {
    const currentUser = userContextValue.user;

    if (currentUser) {
      if (currentUser.stringId.startsWith('kakao_')) {
        const token = localStorage.getItem('kakao_token');
        if (token) {
          fetch('https://kapi.kakao.com/v1/user/unlink', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.status === 200) {
              localStorage.removeItem('kakao_token');
              alert('로그아웃 되었습니다.');
            } else {
              console.error('연결 해제 실패');
            }
          })
          .catch(error => {
            console.error('연결 해제 실패', error);
          });
        }
      }

      setUserContextValue((prev) => ({
        ...prev,
        user: null,
      }));
      sessionStorage.removeItem('currentUser');
    }

    return currentUser;
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

  // 페이지가 변경될 때마다 스크롤 상태를 재설정
  const location = useLocation();
  useEffect(() => {
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
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
          kakaoUserInfo: kakaoUserInfo
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
