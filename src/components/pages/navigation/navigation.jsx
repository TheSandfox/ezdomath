import "./navigation.css";
import React, { useState, useEffect } from "react";
import { ButtonSmall, ButtonMedium } from "../../generic/Buttons";

export default function navigation() {
  const [isMyPageVisible, setIsMyPageVisible] = useState(false);
  const [isMenuPageVisible, setIsMenuPageVisible] = useState(false);

  // 마이 페이지 여닫는 함수
  function toggleMyPageVisibility() {
    if (isMenuPageVisible) {
      setIsMenuPageVisible(false); // menuPage가 열려 있으면 닫음
    }
    setIsMyPageVisible(!isMyPageVisible);
  }
  function onCloseMyPage() {
    setIsMyPageVisible(false);
  }

  // 전체 메뉴 페이지 여닫는 함수
  function toggleMenuPageVisibility() {
    if (isMyPageVisible) {
      setIsMyPageVisible(false);
    }
    setIsMenuPageVisible(!isMenuPageVisible);
  }
  function onCloseMenuPage() {
    setIsMenuPageVisible(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600 && isMenuPageVisible) {
        setIsMenuPageVisible(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuPageVisible]);

  return (
    <>
      <div className="navi_bar flex">
        <ul className="flex navi_left_cont">
          <li>
            <ButtonSmall className='logo_btn'>
            <img src="ezdomath/public/img/logo.webp" alt="사이트 로고" />
            </ButtonSmall>
          </li>
          <li>EZDOMATH</li>
          <li>공지사항</li>
          <li>
            <div className="button_wrapper">
              <div className="small_btn font_small">학습시작</div>
            </div>
          </li>
        </ul>
        <ul className="flex navi_right_cont">
          <li>
            <div className="Alarm_wrap user_btn">
              <div className="Alarm_active"></div>
              <img
                src="ezdomath/public/img/Alarm_icon_30.webp"
                alt="알림 아이콘"
              />
              {/* <div className="alarm"></div> */}
            </div>
          </li>
          <li>
            <div
              className="flex User_wrap user_btn"
              onClick={toggleMyPageVisibility}
            >
              <img
                className="User_profile"
                src="ezdomath/public/img/MyPage_icon_30.webp"
              />
              <img
                className="Up_arrow"
                src="ezdomath/public/img/Arrow_main.webp"
              />
            </div>
          </li>
          <li>
            <div className="Total_menu_wrap" onClick={toggleMenuPageVisibility}>
              <img
                className="Total_menu"
                src="ezdomath/public/img/Circled Menu.webp"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className={isMyPageVisible ? "myPage flex" : "myPage hidden"}>
        <div className="User_info_wrap">
          <div className="User_info">
            <p>학생</p>
            {/* 카카오 회원의 경우 이미지에 카카오 프로필이 들어옴 */}
            <img
              className="user_profile"
              src="ezdomath/public/img/Male _User_100.webp"
              alt="프로필 이미지"
            />
            {/* 나중에 유저 정보 중 이름 값이 들어옴 */}
            <p>안녕하세요 000님</p>
            {/* 마이페이지는 로그인 된 유저의 마이페이지로 이동되게 라우터 설정 */}
            <div className="button_wrapper">
              <div className="small_btn font_small">마이페이지</div>
            </div>
          </div>
          <ButtonSmall className="close" onClick={onCloseMyPage}>
          <img
            src="ezdomath/public/img/Multiply.webp"
            alt="닫기 버튼"
          />
          </ButtonSmall>
        </div>
        <div>
          <ul className="accordion_wrap">
            <li className="accordion_menu flex">
              <p>내정보</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>커뮤니티</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>진척도</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>QnA</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>북마크</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
          </ul>
        </div>
        <div className="flex User_etc">
          <span className="bug_report">문의사항</span>
          <span className="logout">로그아웃</span>
        </div>
      </div>
      <div
        className={isMenuPageVisible ? "menu_page flex" : "menu_page hidden"}
      >
        <div className="close_wrap">
          <img
            className="close"
            src="ezdomath/public/img/Multiply.webp"
            alt="닫기 버튼"
            onClick={onCloseMenuPage}
          />
        </div>
        <div className="login_wrap">
          <div className="button_wrapper">
            <div className="small_btn font_small Login">로그인</div>
            <div className="Sign_up">회원가입</div>
          </div>
        </div>
        <div className="page_wrap">
          <ul className="page_btn">
            <li className="accordion_menu flex">
              <p>EZDOMATH</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>공지사항</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
            <li className="accordion_menu flex">
              <p>학습시작</p>
              <img
                className="accordion_arrow"
                src="ezdomath/public/img/Arrow_darkest.webp"
                alt="마이페이지 화살표"
              />
            </li>
          </ul>
        </div>
        <div className="flex User_etc">
          <span className="bug_report">문의사항</span>
        </div>
      </div>
    </>
  );
}
