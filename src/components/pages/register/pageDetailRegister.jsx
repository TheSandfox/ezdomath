import "./pageDetailRegister.css";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";

export function PageRegisterDetail({}) {
  return (
    <>
      <div className="flex page_register_detail">
        <div className="flex column_gap register_detail_inner">
          <div className="flex column_gap register_detail_main_top">
            <ul className="main_top_tit">
              <li className="font_medium">회원 정보입력</li>
              <li className="top_tit_deco"></li>
            </ul>
          </div>
          <div className="register_detail_form">
            <table className="user_info_detail">
              <thead>
                <tr>
                  <th className="table_tit">회원유형</th>
                  <th className="flex table_cont radio_cont">
                    <div className="radio_group">
                      <input type="radio" id="student" name="userType"/>
                      <label htmlFor="student">학생</label>
                    </div>
                    <div className="radio_group">
                      <input type="radio" id="parent" name="userType"/>
                      <label htmlFor="parent">학부모</label>
                    </div>
                    <div className="radio_group">
                      <input type="radio" id="teacher" name="userType"/>
                      <label htmlFor="teacher">교사</label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table_tit">아이디</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" />
                      <label className="font_small">6~12자의 영문 대소문자와 숫자 사용.</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">비밀번호</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" />
                      <label className="font_small">8~12자의 영문대소문자, 숫자, 특수문자 중 2종류 이상을 조합한 10자리 이상 또는 3종류이상을 조합한 8자리 이상 사용 가능.</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">비밀번호 확인</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" />
                      <label className="font_small">비밀번호를 확인해주세요.</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">이름</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">학교</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex btn_wrap">
              <ButtonSmall className={'detailRegisterBtn'} to={'/register'}>취소</ButtonSmall>
              <ButtonSmall className={'detailRegisterBtn'} to={'/'}>저장</ButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
