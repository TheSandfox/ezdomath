import "./navigation.css";
import { userContext } from "../../../App";
import React, { useState, useEffect, useContext } from "react";
import { ButtonIcon, ButtonMedium, ButtonSmall } from "../../generic/Buttons";
import {
  USER_TYPE_STUDENT,
  USER_TYPE_PARENT,
  USER_TYPE_TEACHER,
  USER_TYPE_ADMIN,
} from "../../../datas/usertypes";

export default function Navigation() {
  const { handleUserContext, user } = useContext(userContext);
  const [isMyPageVisible, setIsMyPageVisible] = useState(false);
  const [isMenuPageVisible, setIsMenuPageVisible] = useState(false);

  const handleLogin = () => {
    setIsMenuPageVisible(false);
  };

  const handleLogout = () => {
    const currentUser = handleUserContext.logout();
    if (currentUser && confirm(`${currentUser.name}님 정말로 로그아웃 하시겠습니까?`)) {
      // 실제 로그아웃 로직을 여기에 추가
    } else {
      // 로그아웃 취소 시 사용자 상태를 다시 설정
      handleUserContext.setUser(currentUser);
    }
    setIsMyPageVisible(false);
  };

  const toggleMyPageVisibility = () => {
    if (isMenuPageVisible) setIsMenuPageVisible(false);
    setIsMyPageVisible(!isMyPageVisible);
  };

  const toggleMenuPageVisibility = () => {
    if (isMyPageVisible) setIsMyPageVisible(false);
    setIsMenuPageVisible(!isMenuPageVisible);
  };

  const onCloseMyPage = () => setIsMyPageVisible(false);
  const onCloseMenuPage = () => setIsMenuPageVisible(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isMenuPageVisible)
        setIsMenuPageVisible(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuPageVisible]);

  const naviMyPageAccordionContent = [
    {
      text: "내정보",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/my/info",
    },
    {
      text: "커뮤니티",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/my/community/students",
    },
    {
      text: "진척도",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/my/achievement/0",
    },
    { text: "QnA", imgSrc: "/ezdomath/img/Arrow_darkest.webp", to: "/my/info" },
    {
      text: "북마크",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/my/qna",
    },
  ];
  const naviMenuPageAccordionContent = [
    { text: "EZDOMATH", imgSrc: "/ezdomath/img/Arrow_darkest.webp", to: "/" },
    { text: "공지사항", imgSrc: "/ezdomath/img/Arrow_darkest.webp", to: "/" },
    { text: "학습시작", imgSrc: "/ezdomath/img/Arrow_darkest.webp", to: "/" },
  ];

  return (
    <>
      <NavigationBar
        isLoggedIn={user !== null}
        handleLogin={handleLogin}
        toggleMyPageVisibility={toggleMyPageVisibility}
        toggleMenuPageVisibility={toggleMenuPageVisibility}
        user={user} // user 정보를 NavigationBar 컴포넌트에 전달
      />
      {user && ( // user가 있을 때만 MyPage 컴포넌트를 렌더링
        <MyPage
          isMyPageVisible={isMyPageVisible}
          onCloseMyPage={onCloseMyPage}
          naviMyPageAccordionContent={naviMyPageAccordionContent}
          handleLogout={handleLogout}
          user={user} // user 정보를 MyPage 컴포넌트에 전달
        />
      )}
      <MenuPage
        isMenuPageVisible={isMenuPageVisible}
        onCloseMenuPage={onCloseMenuPage}
        handleLogin={handleLogin}
        isLoggedIn={user !== null}
        naviMenuPageAccordionContent={naviMenuPageAccordionContent}
      />
    </>
  );
}

const NavigationBar = ({
  isLoggedIn,
  handleLogin,
  toggleMyPageVisibility,
  toggleMenuPageVisibility,
  user, // user 정보를 받아옴
}) => (
  <div className="navi_dom">
    <div className="navi_bar flex">
      <ul className="flex navi_left_cont">
        <li>
          <ButtonIcon to="/" className="logo_btn navi_btn_icon">
            <img src="/ezdomath/img/logo.webp" alt="사이트 로고" />
          </ButtonIcon>
        </li>
        <li>
          <div className="button_wrapper">
            <ButtonSmall className="small_btn font_small" to={"/intro"}>
              EZDOMATH
            </ButtonSmall>
          </div>
        </li>
        <li>
          <div className="button_wrapper">
            <ButtonSmall className="small_btn font_small" to={"/notice"}>
              공지사항
            </ButtonSmall>
          </div>
        </li>
        <li>
          <div className="button_wrapper">
            <ButtonSmall className="small_btn font_small" to={'/play/0'}>학습시작</ButtonSmall>
          </div>
        </li>
      </ul>
      <ul className="flex navi_right_cont">
        {!isLoggedIn ? ( // 로그인되지 않았을 때
          <>
            <li className="Before_login">
              <div>
                <ButtonSmall className="Sign_up" to={"/register"}>
                  회원가입
                </ButtonSmall>
              </div>
            </li>
            <li className="Before_login">
              <div>
                <ButtonSmall
                  className="Login_page_routing"
                  onClick={handleLogin}
                  to={"/login"}
                >
                  로그인
                </ButtonSmall>
              </div>
            </li>
          </>
        ) : (
          // 로그인되었을 때
          <>
            <li className="After_login">
              <div className="Alarm_wrap user_btn">
                <div className="Alarm_active"></div>
                <ButtonIcon className="navi_btn_icon">
                  <img
                    className="Alarm"
                    src="/ezdomath/img/Alarm_icon_30.webp"
                    alt="알림 아이콘"
                  />
                </ButtonIcon>
              </div>
            </li>
            <li className="After_login">
              <div
                className="flex User_wrap user_btn"
                onClick={toggleMyPageVisibility}
              >
                <img
                  className="User_profile"
                  src={user?.profile} // user가 존재할 때만 profile에 접근
                  alt="유저 프로필 이미지"
                />
                <img className="Up_arrow" src="/ezdomath/img/Arrow_main.webp" />
              </div>
            </li>
          </>
        )}
        <li>
          <div className="Total_menu_wrap" onClick={toggleMenuPageVisibility}>
            <img className="Total_menu" src="/ezdomath/img/Circled Menu.webp" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const MyPage = ({
  isMyPageVisible,
  onCloseMyPage,
  naviMyPageAccordionContent,
  handleLogout,
  user, // user 정보를 받아옴
}) => (
  <div className={isMyPageVisible ? "myPage flex" : "myPage hidden"}>
    <div className="User_info_wrap">
      <div className="User_info">
        {/* userTypeId에 따라 표시되는 텍스트를 조건부로 설정 */}
        <p>
          {user?.userTypeId === USER_TYPE_STUDENT
            ? "학생"
            : user?.userTypeId === USER_TYPE_PARENT
            ? "학부모"
            : user?.userTypeId === USER_TYPE_TEACHER
            ? "교사"
            : "관리자"}
        </p>
        <img
          className="user_profile"
          src={user?.profile} // user가 존재할 때만 profile에 접근
          alt="프로필 이미지"
        />
        <p>안녕하세요 {user?.name}님</p> {/* user가 존재할 때만 name에 접근 */}
        <div className="button_wrapper">
          <ButtonMedium className="small_btn font_small">
            마이페이지
          </ButtonMedium>
        </div>
      </div>
      <ButtonIcon className="close navi_btn_icon" onClick={onCloseMyPage}>
        <img src="/ezdomath/img/Multiply.webp" alt="닫기 버튼" />
      </ButtonIcon>
    </div>
    <div>
      <ul className="accordion_wrap">
        {naviMyPageAccordionContent.map((item, index) => (
          <li key={index} className="accordion_menu flex">
            <ButtonMedium className="menu_page_btn" to={item.to}>
              <p>{item.text}</p>
              <img
                className="accordion_arrow"
                src={item.imgSrc}
                alt="마이페이지 화살표"
              />
            </ButtonMedium>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex User_etc">
      <span className="bug_report">문의사항</span>
      <ButtonSmall className={"logout"} onClick={handleLogout}>
        로그아웃
      </ButtonSmall>
    </div>
  </div>
);

const MenuPage = ({
  isMenuPageVisible,
  onCloseMenuPage,
  naviMenuPageAccordionContent,
  handleLogin,
  isLoggedIn,
}) => (
  <div className={isMenuPageVisible ? "menu_page flex" : "menu_page hidden"}>
    <div className="close_wrap">
      <ButtonIcon onClick={onCloseMenuPage} className="close">
        <img src="/ezdomath/img/Multiply.webp" alt="닫기 버튼" />
      </ButtonIcon>
    </div>
    <div className={isLoggedIn ? "login_wrap hidden" : "login_wrap visible"}>
      <div className="button_wrapper">
        <ButtonMedium
          className="small_btn font_small Login"
          onClick={handleLogin}
          to={'/login'}
        >
          로그인
        </ButtonMedium>
        <ButtonMedium
          className="small_btn font_small register"
          to={'/register'}
        >
          회원가입
        </ButtonMedium>
      </div>
    </div>
    <div className="page_wrap">
      <ul className="page_btn">
        {naviMenuPageAccordionContent.map((item, index) => (
          <li key={index} className="accordion_menu flex">
            <ButtonMedium className="menu_page_btn">
              <p>{item.text}</p>
              <img
                className="accordion_arrow"
                src={item.imgSrc}
                alt="마이페이지 화살표"
              />
            </ButtonMedium>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex User_etc">
      <span className="flex bug_report">문의사항</span>
    </div>
  </div>
);
