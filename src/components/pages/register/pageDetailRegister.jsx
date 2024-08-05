import "./pageDetailRegister.css";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";

export function PageRegisterDetail({}) {
  const { handleUserContext, users } = useContext(userContext);
  const navigate = useNavigate();

  const [userTypeId, setUserTypeId] = useState("");
  const [stringId, setStringId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [errors, setErrors] = useState({});
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(false);

  const userTypeRef = useRef(null);
  const stringIdRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const schoolNameRef = useRef(null);

  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "userTypeId":
        if (![USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER].includes(value)) {
          error = "회원 유형을 선택해주세요.";
        }
        break;
      case "stringId":
        const idRegex = /^[a-zA-Z0-9]{6,12}$/;
        if (!value) {
          error = "아이디는 6~12자의 영문 대소문자와 숫자만 사용 가능합니다.";
        } else if (!idRegex.test(value)) {
          error = "아이디는 6~12자의 영문 대소문자와 숫자만 사용 가능합니다.";
        } else if (!isIdChecked) {
          error = "아이디 중복 검사를 실시해주세요.";
        } else if (isDuplicate) {
          error = "중복된 아이디입니다.";
        } else {
          error = "사용 가능한 아이디 입니다.";
        }
        break;
      case "password":
        const passwordRegex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
        const passwordRegex2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex1.test(value) && !passwordRegex2.test(value)) {
          error = "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합한 10자리 이상 또는 3종류 이상을 조합한 8자리 이상이어야 합니다.";
        }
        break;
      case "confirmPassword":
        if (value !== password) {
          error = "비밀번호가 일치하지 않습니다.";
        }
        break;
      case "name":
        const nameRegex = /^[가-힣]{1,6}$/;
        if (!nameRegex.test(value)) {
          error = "이름은 숫자 없이 1~6글자 이내로 입력해주세요.";
        }
        break;
      case "schoolName":
        if (!value) {
          error = "학교명을 입력해주세요.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const checkDuplicateId = () => {
    const duplicate = users.some(user => user.stringId === stringId);
    setIsDuplicate(duplicate);
    setIsIdChecked(true);
    if (duplicate) {
      setErrors(errors => ({ ...errors, stringId: "중복된 아이디입니다." }));
    } else {
      setErrors(errors => ({ ...errors, stringId: "사용 가능한 아이디 입니다." }));
    }
  };

  useEffect(() => {
    if (stringId) {
      setIsIdChecked(false);
      setErrors(errors => ({ ...errors, stringId: "아이디 중복 검사를 실시해주세요." }));
    }
  }, [stringId]);

  const handleSave = () => {
    const fields = { userTypeId, stringId, password, confirmPassword, name, schoolName };
    const newErrors = {};
    let firstErrorField = null;

    for (const [field, value] of Object.entries(fields)) {
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        if (!firstErrorField) {
          firstErrorField = field;
        }
      }
    }

    if (Object.keys(newErrors).length > 0 || newErrors.stringId !== "사용 가능한 아이디 입니다.") {
      setErrors(newErrors);
      if (firstErrorField) {
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

    const user = {
      userTypeId,
      stringId,
      password,
      name,
      schoolName,
      profile: '/ezdomath/profile/dummy.png'
    };
    console.log('저장된 유저 정보:', user);
    handleUserContext.addUser(user);
    navigate('/login');
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
                        setErrors(errors => ({ ...errors, userTypeId: "" }));
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
                        setIsIdChecked(false);
                        setErrors(errors => ({ ...errors, stringId: stringId ? "아이디 중복 검사를 실시해주세요." : "아이디는 6~12자의 영문 대소문자와 숫자만 사용 가능합니다." }));
                      }} ref={stringIdRef} />
                      <button onClick={checkDuplicateId} disabled={!stringId}>중복확인</button>
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
