import "./navigation.css";
import { userContext } from "../../../App";
import React, { useState, useEffect, useContext, useRef } from "react";
import { ButtonIcon, ButtonMedium, ButtonSmall } from "../../generic/Buttons";
import {
  USER_TYPE_STUDENT,
  USER_TYPE_PARENT,
  USER_TYPE_TEACHER,
  USER_TYPE_ADMIN,
} from "../../../datas/usertypes";
import { useLocation, useNavigate } from "react-router-dom";

const getUserTypeName = (userTypeId) => {
  switch (userTypeId) {
    case USER_TYPE_STUDENT:
      return "학생";
    case USER_TYPE_PARENT:
      return "학부모";
    case USER_TYPE_TEACHER:
      return "교사";
    case USER_TYPE_ADMIN:
      return "관리자";
    default:
      return "알 수 없음";
  }
};

export default function Navigation() {
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
    { text: "QnA", imgSrc: "/ezdomath/img/Arrow_darkest.webp", to: "/my/qna" },
    {
      text: "북마크",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/my/bookmark/all",
    },
  ];

  const naviMenuPageAccordionContent = [
    {
      text: "EZDOMATH",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/intro",
    },
    {
      text: "공지사항",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/notice",
    },
    {
      text: "학습시작",
      imgSrc: "/ezdomath/img/Arrow_darkest.webp",
      to: "/play/0",
    },
  ];

  const { handleUserContext, user, invitations, users } = useContext(userContext);
  const [activeComponent, setActiveComponent] = useState(null);
  const [isCallMessageVisible, setIsCallMessageVisible] = useState(false);
  const [callMessageContents, setCallMessageContents] = useState([]);
  const [dismissedMessages, setDismissedMessages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const myPageRef = useRef(null);
  const menuPageRef = useRef(null);
  const callMessageRef = useRef(null);

  const handleLogin = () => setActiveComponent(null);

  const handleLogout = () => {
    const currentUser = handleUserContext.logout();
    if (currentUser && confirm(`${currentUser.name}님 정말로 로그아웃 하시겠습니까?`)) {
      navigate("/");
    } else {
      handleUserContext.setUser(currentUser);
    }
    setActiveComponent(null);
  };

  const toggleComponentVisibility = (component) => {
    setActiveComponent((prev) => (prev === component ? null : component));
  };

  const handleClickOutside = (event) => {
    if (
      myPageRef.current && !myPageRef.current.contains(event.target) &&
      menuPageRef.current && !menuPageRef.current.contains(event.target) &&
      callMessageRef.current && !callMessageRef.current.contains(event.target)
    ) {
      setActiveComponent(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDismissedMessages([]);
    setCallMessageContents([]);

    if (user) {
      const userInvitations = invitations.filter(
        (invite) => invite.toUserId === user.userId
      );
      if (userInvitations.length > 0) {
        const messages = userInvitations
          .map((invitation, index) => {
            const fromUser = users.find(
              (u) => u.userId === invitation.fromUserId
            );
            const userType = getUserTypeName(fromUser.userTypeId);
            return {
              content: `[${userType}]${fromUser.name}님이 ${user.name}님의 ${userType}가 되고 싶어합니다.`,
              index,
            };
          })
          .filter((msg) => !dismissedMessages.includes(msg.index));
        setCallMessageContents(messages);
        setIsCallMessageVisible(messages.length > 0);
      } else {
        setIsCallMessageVisible(false);
      }
    }
  }, [invitations, user, users]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600 && activeComponent === "MenuPage") {
        setActiveComponent(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeComponent]);

  useEffect(() => {
    setIsCallMessageVisible(false);
    if (location.pathname === "/" && user) {
      const userInvitations = invitations.filter(
        (invite) => invite.toUserId === user.userId
      );
      if (userInvitations.length > 0) {
        setIsCallMessageVisible(true);
      }
    }
  }, [location, user, invitations]);

  return (
    <>
      <NavigationBar
        isLoggedIn={user !== null}
        handleLogin={handleLogin}
        toggleMyPageVisibility={() => toggleComponentVisibility("MyPage")}
        isCallMessageVisible={isCallMessageVisible}
        toggleCallMessageVisibility={() => toggleComponentVisibility("CallMessage")}
        toggleMenuPageVisibility={() => toggleComponentVisibility("MenuPage")}
        user={user}
      />
      {user && (
        <MyPage
          isMyPageVisible={activeComponent === "MyPage"}
          onCloseMyPage={() => setActiveComponent(null)}
          naviMyPageAccordionContent={naviMyPageAccordionContent}
          naviMenuPageAccordionContent={naviMenuPageAccordionContent}
          handleLogout={handleLogout}
          user={user}
          ref={myPageRef}
        />
      )}
      <MenuPage
        isMenuPageVisible={activeComponent === "MenuPage"}
        onCloseMenuPage={() => setActiveComponent(null)}
        handleLogin={handleLogin}
        isLoggedIn={user !== null}
        naviMenuPageAccordionContent={naviMenuPageAccordionContent}
        ref={menuPageRef}
      />
      {user && (
        <CallMessage
          isCallMessageVisible={activeComponent === "CallMessage"}
          callMessageContents={callMessageContents}
          onCloseMessage={(index) => {
            const updatedDismissedMessages = [...dismissedMessages, index];
            setDismissedMessages(updatedDismissedMessages);
            const remainingMessages = callMessageContents.filter(
              (msg) => !updatedDismissedMessages.includes(msg.index)
            );
            setCallMessageContents(remainingMessages);
            if (remainingMessages.length === 0) {
              setIsCallMessageVisible(false);
            }
          }}
          user={user}
          ref={callMessageRef}
        />
      )}
    </>
  );
}

const NavigationBar = ({
  isLoggedIn,
  handleLogin,
  toggleMyPageVisibility,
  toggleMenuPageVisibility,
  isCallMessageVisible,
  toggleCallMessageVisibility,
  user,
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
            <ButtonSmall className="small_btn font_small" to={"/play/0"}>
              학습시작
            </ButtonSmall>
          </div>
        </li>
      </ul>
      <ul className="flex navi_right_cont">
        {!isLoggedIn ? (
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
            <li>
              <div
                className="Total_menu_wrap"
                onClick={toggleMenuPageVisibility}
              >
                <img
                  className="Total_menu"
                  src="/ezdomath/img/Circled Menu.webp"
                />
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="After_login">
              <div
                className="Alarm_wrap user_btn"
                onClick={toggleCallMessageVisibility}
              >
                <div
                  className={
                    isCallMessageVisible
                      ? "Alarm_active expose"
                      : "Alarm_active hidden"
                  }
                ></div>
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
                  src={user?.profile}
                  alt="유저 프로필 이미지"
                />
                <img className="Up_arrow" src="/ezdomath/img/Arrow_main.webp" />
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
);

const MyPage = React.forwardRef(({
  isMyPageVisible,
  onCloseMyPage,
  naviMyPageAccordionContent,
  naviMenuPageAccordionContent,
  handleLogout,
  user,
}, ref) => (
  <div ref={ref} className={isMyPageVisible ? "myPage flex" : "myPage hidden"}>
    <div className="User_info_wrap">
      <div className="User_info">
        <p>
          {user?.userTypeId === USER_TYPE_STUDENT
            ? "학생"
            : user?.userTypeId === USER_TYPE_PARENT
            ? "학부모"
            : user?.userTypeId === USER_TYPE_TEACHER
            ? "교사"
            : "관리자"}
        </p>
        <img className="user_profile" src={user?.profile} alt="프로필 이미지" />
        <p>안녕하세요 {user?.name}님</p>
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
    <div className="page_wrap">
      <ul className="page_btn">
        {naviMenuPageAccordionContent.map((item, index) => (
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
));

const MenuPage = React.forwardRef(({
  isMenuPageVisible,
  onCloseMenuPage,
  naviMenuPageAccordionContent,
  handleLogin,
  isLoggedIn,
}, ref) => (
  <div ref={ref} className={isMenuPageVisible ? "menu_page flex" : "menu_page hidden"}>
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
          to={"/login"}
        >
          로그인
        </ButtonMedium>
        <ButtonMedium
          className="small_btn font_small register"
          to={"/register"}
        >
          회원가입
        </ButtonMedium>
      </div>
    </div>
    <div className="page_wrap">
      <ul className="page_btn">
        {naviMenuPageAccordionContent.map((item, index) => (
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
      <span className="flex bug_report">문의사항</span>
    </div>
  </div>
));

const CallMessage = React.forwardRef(({
  isCallMessageVisible,
  callMessageContents,
  onCloseMessage,
  user
}, ref) => (
  <div ref={ref} className={isCallMessageVisible ? "callUser" : "hidden callUser"}>
    {callMessageContents.map((content, index) => (
      <div key={index} className={`flex call_message_wrap message${index}`}>
        <ButtonMedium
          className={"message_txt call_message"}
          to={"/my/community/invitation"}
        >
          {content.content}
        </ButtonMedium>
        <ButtonIcon
          className={"message_btn"}
          onClick={() => onCloseMessage(content.index)}
        >
          <img src="/ezdomath/img/Multiply.webp" alt="닫기 버튼" />
        </ButtonIcon>
      </div>
    ))}
  </div>
));
