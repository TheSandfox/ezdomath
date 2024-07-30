import "./pageRegister.css"
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";

export function PageRegister({}) {
  return (
    <>
      <div className="flex page_register">
        <div className="flex column_gap register_inner">
          <div className="flex column_gap register_main_top">
            <ul className="main_top_tit">
              <li className="font_title">회원가입</li>
              <li className="top_tit_deco"></li>
            </ul>
            <ul className="main_top_cont">
              <li className="font_small">EZDOMATH에 오신 것을 환영합니다.</li>
              <li className="font_small">
                회원가입 시 <span>회원정보</span>를 완전히 기입해야{" "}
                <span>서비스</span>를 정상 이용 가능합니다.
              </li>
            </ul>
          </div>
          <div className="register_form">
            <div className="register_user_info_wrap">
              <div className="flex register_user_info_tap">
                <div className="kakao_user_register_routing">
                  <div className="flex user_register_explain">
                    <img alt="유저 이미지" />
                    <span>일반회원</span>
                  </div>
                  <ButtonSmall to={'/detail'}>일반 회원으로 가입</ButtonSmall>
                </div>
                <div className="user_register_routing">
                  <div className="flex user_register_explain">
                    <img alt="카카오 이미지" />
                    <span>카카오회원</span>
                  </div>
                  <ButtonSmall>카카오 계정으로 가입</ButtonSmall>
                </div>
              </div>
            </div>
            <ul className="register_form_deco">
              <li>
                카카오 로그인의 경우 미회원은 반드시 추가 회원 정보를 입력하셔야
                서비스 이용이 가능합니다.
              </li>
              <li>
                만 14세 미만 어린이 회원가입 시 법률에의거 보호자(법적대리인)의
                동의가 필요합니다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
