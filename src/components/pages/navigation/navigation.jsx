import "./navigation.css";
import React, { useState, useEffect } from "react";
import { ButtonIcon, ButtonMedium, ButtonSmall } from "../../generic/Buttons";

export default function Navigation() {
  const [isMyPageVisible, setIsMyPageVisible] = useState(false);
  const [isMenuPageVisible, setIsMenuPageVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsMenuPageVisible(false);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
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

  // 전체메뉴 버튼을 위한 윈도우 리사이즈 핸들러
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && isMenuPageVisible) setIsMenuPageVisible(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuPageVisible]);

  // 내 정보 창에 들어갈 데이터 배열
  const naviMyPageAccordionContent = [
    { text: "내정보", imgSrc: "img/Arrow_darkest.webp" },
    { text: "커뮤니티", imgSrc: "img/Arrow_darkest.webp" },
    { text: "진척도", imgSrc: "img/Arrow_darkest.webp" },
    { text: "QnA", imgSrc: "img/Arrow_darkest.webp" },
    { text: "북마크", imgSrc: "img/Arrow_darkest.webp" },
  ];
  const naviMenuPageAccordionContent = [
    { text: "EZDOMATH", imgSrc: "img/Arrow_darkest.webp", to: "/" },
    { text: "공지사항", imgSrc: "img/Arrow_darkest.webp", to: "/" },
    { text: "학습시작", imgSrc: "img/Arrow_darkest.webp", to: "/" },
  ];

  return (
    <>
      <NavigationBar
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        toggleMyPageVisibility={toggleMyPageVisibility}
        toggleMenuPageVisibility={toggleMenuPageVisibility}
      />
      <MyPage
        isMyPageVisible={isMyPageVisible}
        onCloseMyPage={onCloseMyPage}
        naviMyPageAccordionContent={naviMyPageAccordionContent}
        handleLogout={handleLogout}
      />
      <MenuPage
        isMenuPageVisible={isMenuPageVisible}
        onCloseMenuPage={onCloseMenuPage}
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
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
}) => (
  <div className="navi_dom">
    <div className="navi_bar flex">
      <ul className="flex navi_left_cont">
        <li>
          <ButtonIcon to="/" className="logo_btn navi_btn_icon">
            <img src="img/logo.webp" alt="사이트 로고" />
          </ButtonIcon>
        </li>
        <li>EZDOMATH</li>
        <li>공지사항</li>
        <li>
          <div className="button_wrapper">
            <ButtonSmall className="small_btn font_small">학습시작</ButtonSmall>
          </div>
        </li>
      </ul>
      <ul className="flex navi_right_cont">
        {!isLoggedIn ? (
          <>
            <li className="Before_login">
              <div>
                <ButtonSmall className="Sign_up">회원가입</ButtonSmall>
              </div>
            </li>
            <li className="Before_login">
              <div>
                <ButtonSmall className="Login" onClick={handleLogin}>
                  로그인
                </ButtonSmall>
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="After_login">
              <div className="Alarm_wrap user_btn">
                <div className="Alarm_active"></div>
                <ButtonIcon className="navi_btn_icon">
                  <img
                    className="Alarm"
                    src="img/Alarm_icon_30.webp"
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
                <img className="User_profile" src="img/MyPage_icon_30.webp" />
                <img className="Up_arrow" src="img/Arrow_main.webp" />
              </div>
            </li>
          </>
        )}
        <li>
          <div className="Total_menu_wrap" onClick={toggleMenuPageVisibility}>
            <img className="Total_menu" src="img/Circled Menu.webp" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const MyPage = ({ isMyPageVisible, onCloseMyPage, naviMyPageAccordionContent, handleLogout }) => (
  <div className={isMyPageVisible ? "myPage flex" : "myPage hidden"}>
    <div className="User_info_wrap">
      <div className="User_info">
        <p>학생</p>
        <img className="user_profile" src="img/Male _User_100.webp" alt="프로필 이미지" />
        <p>안녕하세요 000님</p>
        <div className="button_wrapper">
          <ButtonMedium className="small_btn font_small">마이페이지</ButtonMedium>
        </div>
      </div>
      <ButtonIcon className="close navi_btn_icon" onClick={onCloseMyPage}>
        <img src="img/Multiply.webp" alt="닫기 버튼" />
      </ButtonIcon>
    </div>
    <div>
      <ul className="accordion_wrap">
        {naviMyPageAccordionContent.map((item, index) => (
          <li key={index} className="accordion_menu flex">
            <ButtonMedium className="menu_page_btn">
              <p>{item.text}</p>
              <img className="accordion_arrow" src={item.imgSrc} alt="마이페이지 화살표" />
            </ButtonMedium>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex User_etc">
      <span className="bug_report">문의사항</span>
      <ButtonSmall className={"logout"} onClick={handleLogout}>로그아웃</ButtonSmall>
    </div>
  </div>
);

const MenuPage = ({ isMenuPageVisible, onCloseMenuPage, naviMenuPageAccordionContent, handleLogin, isLoggedIn }) => (
  <div className={isMenuPageVisible ? "menu_page flex" : "menu_page hidden"}>
    <div className="close_wrap">
      <ButtonIcon onClick={onCloseMenuPage} className="close">
        <img src="img/Multiply.webp" alt="닫기 버튼" />
      </ButtonIcon>
    </div>
    <div className={isLoggedIn ? "login_wrap hidden" : "login_wrap visible"}>
      <div className="button_wrapper">
        <ButtonMedium className="small_btn font_small Login" onClick={handleLogin}>로그인</ButtonMedium>
        <div className="Sign_up">회원가입</div>
      </div>
    </div>
    <div className="page_wrap">
      <ul className="page_btn">
        {naviMenuPageAccordionContent.map((item, index) => (
          <li key={index} className="accordion_menu flex">
            <ButtonMedium className="menu_page_btn">
              <p>{item.text}</p>
              <img className="accordion_arrow" src={item.imgSrc} alt="마이페이지 화살표" />
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
