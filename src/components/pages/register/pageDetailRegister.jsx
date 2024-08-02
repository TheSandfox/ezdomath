import "./pageDetailRegister.css";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";

export function PageRegisterDetail({}) {
  const { handleUserContext } = useContext(userContext);
  const navigate = useNavigate();

  const [userTypeId, setUserTypeId] = useState(""); // 회원 유형을 저장하는 상태
  const [stringId, setStringId] = useState(""); // 아이디를 저장하는 상태
  const [password, setPassword] = useState(""); // 비밀번호를 저장하는 상태
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인을 저장하는 상태
  const [name, setName] = useState(""); // 이름을 저장하는 상태
  const [schoolName, setSchoolName] = useState(""); // 학교명을 저장하는 상태

  const [errors, setErrors] = useState({}); // 오류 메시지를 저장하는 상태

  // 해당 input 필드에 접근하기 위해 useRef 사용
  const userTypeRef = useRef(null);
  const stringIdRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const schoolNameRef = useRef(null);
  
  // 유효성 검사 함수
  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "userTypeId":
        // 회원 유형 중 하나라도 선택하지 않으면 오류메세지 출력
        if (![USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER].includes(value)) {
          error = "회원 유형을 선택해주세요.";
        }
        break;
      case "stringId":
        // 아이디 유효성 검사
        const idRegex = /^[a-zA-Z0-9]{6,12}$/;
        if (!idRegex.test(value)) {
          error = "아이디는 6~12자의 영문 대소문자와 숫자만 사용 가능합니다.";
        }
        break;
      case "password":
        // 비밀번호 유효성 검사
        const passwordRegex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/; // 영문 대소문자, 숫자 중 2종류 이상 조합, 10자리 이상
        const passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // 영문 대소문자, 숫자, 특수문자 중 3종류 이상 조합, 8자리 이상
        if (!passwordRegex1.test(value) && !passwordRegex2.test(value)) {
          error = "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합한 10자리 이상 또는 3종류 이상을 조합한 8자리 이상이어야 합니다.";
        }
        break;
      case "confirmPassword":
        // 비밀번호 확인 유효성 검사
        if (value !== password) {
          error = "비밀번호가 일치하지 않습니다.";
        }
        break;
      case "name":
        // 이름 유효성 검사
        const nameRegex = /^[가-힣]{1,6}$/; // 한글만 사용, 1~6글자
        if (!nameRegex.test(value)) {
          error = "이름은 숫자 없이 1~6글자 이내로 입력해주세요.";
        }
        break;
      case "schoolName":
        // 학교명 유효성 검사, 아직은 제한 없음
        if (!value) {
          error = "학교명을 입력해주세요.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // 저장 버튼 클릭 시 실행되는 함수
  const handleSave = () => {
    const fields = { userTypeId, stringId, password, confirmPassword, name, schoolName };
    const newErrors = {};
    let firstErrorField = null;

    // 각 필드에 대해 유효성 검사 실행
    for (const [field, value] of Object.entries(fields)) {
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        if (!firstErrorField) {
          firstErrorField = field;
        }
      }
    }

    // 오류가 있으면 오류 메시지를 설정하고 저장하지 않음
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (firstErrorField) {
        // 첫 번째 오류 필드로 포커스 이동
        switch (firstErrorField) {
          case "userTypeId":
            userTypeRef.current.focus();
            break;
          case "stringId":
            stringIdRef.current.focus();
            break;
          case "password":
            passwordRef.current.focus();
            break;
          case "confirmPassword":
            confirmPasswordRef.current.focus();
            break;
          case "name":
            nameRef.current.focus();
            break;
          case "schoolName":
            schoolNameRef.current.focus();
            break;
          default:
            break;
        }
      }
      return;
    }

    // 오류가 없으면 유저 정보 저장
    const user = {
      userTypeId,
      stringId,
      password,
      name,
      schoolName,
      profile: '/ezdomath/profile/dummy.png'
    };
    console.log('저장된 유저 정보:', user);
    handleUserContext.addUser(user); // 새로운 유저를 추가하는 함수 호출
    navigate('/login'); // 유효성 검사가 통과되었을 때 페이지 이동
  };

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
                    <div className="flex radio_group" ref={userTypeRef}>
                      <input type="radio" id="student" className="radio" name="userType" checked={userTypeId === USER_TYPE_STUDENT} onChange={() => {
                        setUserTypeId(USER_TYPE_STUDENT);
                        setErrors(errors => ({ ...errors, userTypeId: "" })); // 오류 메시지 초기화
                      }} />
                      <label htmlFor="student">학생</label>
                    </div>
                    <div className="flex radio_group">
                      <input type="radio" id="parent" className="radio" name="userType" checked={userTypeId === USER_TYPE_PARENT} onChange={() => {
                        setUserTypeId(USER_TYPE_PARENT);
                        setErrors(errors => ({ ...errors, userTypeId: "" }));
                      }} />
                      <label htmlFor="parent">학부모</label>
                    </div>
                    <div className="flex radio_group">
                      <input type="radio" id="teacher" className="radio" name="userType" checked={userTypeId === USER_TYPE_TEACHER} onChange={() => {
                        setUserTypeId(USER_TYPE_TEACHER);
                        setErrors(errors => ({ ...errors, userTypeId: "" }));
                      }} />
                      <label htmlFor="teacher">교사</label>
                    </div>
                    {errors.userTypeId && <p className="error_message font_small">{errors.userTypeId}</p>}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table_tit">아이디</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" value={stringId} onChange={(e) => {
                        setStringId(e.target.value);
                        setErrors(errors => ({ ...errors, stringId: "" }));
                      }} ref={stringIdRef} />
                      {errors.stringId && <p className="error_message font_small">{errors.stringId}</p>}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">비밀번호</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors(errors => ({ ...errors, password: "" }));
                      }} ref={passwordRef} />
                      {errors.password && <p className="error_message font_small">{errors.password}</p>}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">비밀번호 확인</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="password" value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setErrors(errors => ({ ...errors, confirmPassword: "" }));
                      }} ref={confirmPasswordRef} />
                      {errors.confirmPassword && <p className="error_message font_small">{errors.confirmPassword}</p>}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">이름</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" value={name} onChange={(e) => {
                        setName(e.target.value);
                        setErrors(errors => ({ ...errors, name: "" }));
                      }} ref={nameRef} />
                      {errors.name && <p className="error_message font_small">{errors.name}</p>}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="table_tit">학교</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" value={schoolName} onChange={(e) => {
                        setSchoolName(e.target.value);
                        setErrors(errors => ({ ...errors, schoolName: "" }));
                      }} ref={schoolNameRef} />
                      {errors.schoolName && <p className="error_message font_small">{errors.schoolName}</p>}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex btn_wrap">
              <ButtonSmall className={'detailRegisterBtn'} to={'/register'}>취소</ButtonSmall>
              <ButtonSmall className={'detailRegisterBtn'} onClick={handleSave}>저장</ButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}