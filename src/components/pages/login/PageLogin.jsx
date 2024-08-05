import "./pageLogin.css";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../../../App";
import {
  ButtonLarge,
  ButtonSmall,
  ButtonIcon,
  ButtonTab,
} from "../../generic/Buttons";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./kakaoLogin";

export function PageLogin({}) {
  const { handleUserContext, user } = useContext(userContext);
  const navigate = useNavigate();

  const [stringId, setStringId] = useState("");
  const [password, setPassword] = useState("");
  const [tabed, setTabed] = useState(false);
  const [errors, setErrors] = useState({});

  const login = () => {
    if (!stringId) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        stringId: "아이디를 다시 확인해주세요",
      }));
    }
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "비밀번호를 다시 확인해주세요",
      }));
    }
    if (stringId && password) {
      const user = handleUserContext.login(stringId, password);
      if (user) {
        alert(`환영합니다. ${user.name}님!`);
        navigate('/');
      } else {
        alert('아이디와 비밀번호를 다시 확인해주세요.');
      }
    }
  };

  const clearInput = (inputType) => {
    if (inputType === "id") {
      setStringId("");
      setErrors((prevErrors) => ({ ...prevErrors, stringId: "" }));
    } else if (inputType === "password") {
      setPassword("");
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <div className="flex page_login">
        <div className="flex column_gap login_inner">
          <div className="flex column_gap_half login_main_top">
            <ul className="flex main_top_tit">
              <li className="font_title">로그인</li>
              <li className="top_tit_deco"></li>
            </ul>
            <ul className="main_top_cont">
              <li className="font_medium">
                지금 <span>로그인</span> 하고 다양한 <span>서비스</span>를
                이용해보세요!
              </li>
              <li className="font_small">
                회원 가입 시 회원 정보를 완전히 기입해야 서비스를 정상 이용
                가능합니다.
              </li>
            </ul>
          </div>
          <div className="flex column_gap login_form">
            <div className="flex login_select_tap">
              <ButtonTab
                className={`user_tap common_user_tap ${!tabed ? "active" : ""}`}
                onClick={() => setTabed(false)}
              >
                <img
                  className="icon"
                  src={`${
                    !tabed
                      ? "/ezdomath/img/Male User.webp"
                      : "/ezdomath/img/Male _User_100.webp"
                  }`}
                  alt="유저 이미지"
                />
                <span>아이디 로그인</span>
              </ButtonTab>
              <ButtonTab
                className={`user_tap kakao_user_tap ${tabed ? "active" : ""}`}
                onClick={() => setTabed(true)}
              >
                <img
                  className="icon"
                  src="/ezdomath/img/kakao_icon.webp"
                  alt="카카오 이미지"
                />
                <span>카카오 로그인</span>
              </ButtonTab>
            </div>
            <div
              className={`flex column_gap login_user_info_wrap ${
                !tabed ? "" : "invi"
              }`}
            >
              <div className="login_user_info_input">
                <div className="flex user_id">
                  <div className="flex input_wrap">
                    <label>아이디</label>
                    <input
                      placeholder="아이디를 입력해주세요"
                      value={stringId}
                      onChange={(e) => {
                        setStringId(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            stringId: "",
                          }));
                        } else {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            stringId: "아이디를 다시 확인해주세요",
                          }));
                        }
                      }}
                    />
                  </div>
                  <ButtonIcon
                    className={"login_page_cancle"}
                    onClick={() => clearInput("id")}
                  >
                    <img src="/ezdomath/img/Multiply.webp" alt="cancel" />
                  </ButtonIcon>
                </div>
                {errors.stringId && <p className="error_message">{errors.stringId}</p>}
                <div className="flex user_pw">
                  <div className="flex input_wrap">
                    <label>비밀번호</label>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (e.target.value) {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            password: "",
                          }));
                        } else {
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            password: "비밀번호를 다시 확인해주세요",
                          }));
                        }
                      }}
                    />
                  </div>
                  <ButtonIcon
                    className={"login_page_cancle"}
                    onClick={() => clearInput("password")}
                  >
                    <img src="/ezdomath/img/Multiply.webp" alt="cancel" />
                  </ButtonIcon>
                </div>
                {errors.password && <p className="error_message">{errors.password}</p>}
              </div>
              <ButtonLarge
                className={"user_login_btn"}
                onClick={login}
                disabled={!stringId || !password}
              >
                로그인
              </ButtonLarge>
            </div>
            <div
              className={`flex column_gap kakao_login_user_wrap ${
                tabed ? "" : "invi"
              }`}
            >
              <KakaoLogin handleUserContext={handleUserContext} user={user} />
            </div>
            <div className="flex user_info_routing">
              <p>
                아직 <span>회원</span>이 아니라면?
              </p>
              <ButtonSmall to={"/register"} className={"user_register"}>
                회원가입
              </ButtonSmall>
            </div>
          </div>
          <p className="user_info_sub">
            만 14세 미만 어린이 회원가입 시 법률에의거 보호자(법적대리인)의
            동의가 필요합니다.
          </p>
        </div>
      </div>
    </>
  );
}
