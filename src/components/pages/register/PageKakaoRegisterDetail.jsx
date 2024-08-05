import "./pageDetailRegister.css";
import { ButtonLarge, ButtonSmall } from "../../generic/Buttons";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import { USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER } from "../../../datas/usertypes";

export function PageKakaoRegisterDetail({}) {
  const { handleUserContext } = useContext(userContext);
  const navigate = useNavigate();
  const [kakaoUserInfo, setKakaoUserInfo] = useState(null);

  const [userTypeId, setUserTypeId] = useState(""); // 회원 유형을 저장하는 상태
  const [schoolName, setSchoolName] = useState(""); // 학교명을 저장하는 상태
  const [errors, setErrors] = useState({}); // 오류 메시지를 저장하는 상태

  // 해당 input 필드에 접근하기 위해 useRef 사용
  const userTypeRef = useRef(null);
  const schoolNameRef = useRef(null);

  // 유효성 검사 함수
  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "userTypeId":
        if (![USER_TYPE_STUDENT, USER_TYPE_PARENT, USER_TYPE_TEACHER].includes(value)) {
          error = "회원 유형을 선택해주세요.";
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

  useEffect(() => {
    const kakaoUserInfo = JSON.parse(localStorage.getItem('kakao_user_info'));
    if (!kakaoUserInfo) {
      navigate('/login'); // Kakao 정보가 없으면 로그인 페이지로 리다이렉트
    } else {
      setKakaoUserInfo(kakaoUserInfo);
    }
  }, [navigate]);

  // 저장 버튼 클릭 시 실행되는 함수
  const handleSave = () => {
    const fields = { userTypeId, schoolName };
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (firstErrorField) {
        switch (firstErrorField) {
          case "userTypeId":
            userTypeRef.current.focus();
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
      name: kakaoUserInfo.nickname,
      schoolName,
      profile: kakaoUserInfo.profile_image,
      stringId: `kakao_${kakaoUserInfo.id}`, // stringId 설정
      password: "" // 공란으로 설정
    };

    console.log('저장된 유저 정보:', user);
    handleUserContext.addUser(user); // 새로운 유저를 추가하는 함수 호출
    handleUserContext.setUser(user); // 로그인 상태로 설정
    navigate('/'); // 유효성 검사가 통과되었을 때 메인 페이지로 이동
  };

  return (
    <>
      <div className="flex page_register_detail">
        <div className="flex column_gap register_detail_inner">
          <div className="flex column_gap register_detail_main_top">
            <ul className="main_top_tit">
              <li className="font_medium">카카오 회원 정보입력</li>
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
                  <td className="table_tit">이름</td>
                  <td className="flex table_cont">
                    <div className="text_group">
                      <input className="text" type="text" value={kakaoUserInfo?.nickname || ''} disabled />
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
              <ButtonSmall className={'detailRegisterBtn'} onClick={handleSave} to={'/'}>저장</ButtonSmall>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
