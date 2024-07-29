import Navigation from "../navigation/navigation";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";

export function PageLogin({}) {
  return (
    <>
      <div className="page_login">
        <div className="login_inner">
          <div className="login_main_top">
            <ul className="main_top_tit">
              <li>로그인</li>
              <li className="top_tit_deco"></li>
            </ul>
            <ul className="main_top_cont">
              <li>
                지금 <span>로그인</span> 하고 다양한 <span>서비스</span>를
                이용해보세요!
              </li>
              <li>
                회원 가입 시 회원 정보를 완전히 기입해야 서비스를 정상 이용
                가능합니다.
              </li>
            </ul>
          </div>
          <div className="login_form">
            <div className="login_select_tap">
              <div className="user_tap">
                <img alt="유저 이미지" />
                <span>아이디 로그인</span>
              </div>
              <div className="kakao_user_tap">
                <img alt="카카오 이미지" />
                <span>카카오 로그인</span>
              </div>
            </div>
            <div className="login_user_info_wrap">
              <div className="login_user_info_input">
                <div className="user_id">
                  <div>
                    <label>아이디</label>
                    <input placeholder="아이디를 입력해주세요" />
                  </div>
                  <img alt="cancle" />
                </div>
                <div className="user_pw">
                  <div>
                    <label>비밀번호</label>
                    <input placeholder="비밀번호를 입력해주세요" />
                  </div>
                  <img alt="cancle" />
                </div>
              </div>
              <ButtonLarge className={"user_login_btn"} to={'/'}>로그인</ButtonLarge>
            </div>
            <div className="user_info_routing">
              <p>
                아직 <span>회원</span>이 아니라면?
              </p>
              <ButtonSmall to={"register"} className={'user_register'}>
                회원가입
              </ButtonSmall>
            </div>
          </div>
		  <p className="user_info_sub">만 14세 미만 어린이 회원가입 시 법률에의거 보호자(법적대리인)의 동의가 필요합니다.</p>
        </div>
      </div>
    </>
  );
}
