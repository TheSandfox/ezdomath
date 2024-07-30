import "./pageDetailRegister.css";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";

export function PageRegisterDetail({}) {
  return (
    <>
      <div className="flex page_register_detail">
        <div className="flex column_gap register_detail_inner">
          <div className="flex column_gap register_detail_main_top">
            <ul className="main_top_tit">
              <li>회원 정보입력</li>
              <li className="top_tit_deco"></li>
            </ul>
          </div>
          <div className="register_detail_form">
            <table>
                <thead>
                    <tr>
                        <th>회원유형</th>
                        <th>
                            <input type="radio"/>
                            <label>학생</label>
                            <input type="radio"/>
                            <label>학부모</label>
                            <input type="radio"/>
                            <label>교사</label>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>
                            <input type="text" />
                            <label>6~12자의 영문 대소문자와 숫자 사용.</label>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td>
                            <input type="text" />
                            <label>8~12자의 영문대소문자, 숫자, 특수문자 중 2종류 이상을 조합한 10자리 이상 또는 3종류이상을 조합한 8자리 이상 사용 가능.</label>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호 확인</td>
                        <td>
                            <input type="text" />
                            <label>비밀번호를 확인해주세요.</label>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>학교</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex btn_wrap">
                <ButtonSmall to={'/'}>취소</ButtonSmall>
                <ButtonSmall to={'/'}>저장</ButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
