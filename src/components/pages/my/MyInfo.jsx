import './myinfo.css';
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyTitle } from "./PageMy";
import * as User from '/src/utils/User';
import { ButtonLarge, ButtonSmall, ButtonMedium } from '/src/components/generic/Buttons';
import { userContext } from '../../../App';

export function Left({}) {
  return <></>;
}

export function Main({handleTabIndex, index}) {
  const { user, handleUserContext } = useContext(userContext);
  const navigate = useNavigate();

  const handleUnlink = () => {
    if (window.confirm("정말로 회원탈퇴를 하시겠습니까?")) {
      handleUserContext.removeUser(user.userId);
	  navigate('/');
    }
  };
  
  useEffect(()=>{
    handleTabIndex.set(index);
  },[]);
  
  return (
    <div className="contents myInfo">
      {/* 타이틀 */}
      <MyTitle title={'회원정보'}/>
      {/* 테이블 */}
      <div className="table font_main">
        <table>
          <tbody>
            <tr>
              <td className='label'>이름</td>
              <td>
                {user?user.name:''}
              </td>
            </tr>
            <tr>
              <td className='label'>회원유형</td>
              <td>
                {user?User.getUserTypeName(parseInt(user.userTypeId)):''}
              </td>
            </tr>
            <tr>
              <td className='label'>학교</td>
              <td>
                <div className='schoolRow'>
                  {user?user.schoolName:''}
                  <ButtonSmall>변경하기</ButtonSmall>
                </div>
              </td>
            </tr>
            <tr>
              <td className='label'>식별코드</td>
              <td>
                {user?User.getUserIdString(user.userId):''}
              </td>
            </tr>
            <tr>
              <td className='label'>로그인ID</td>
              <td>
                {user?user.stringId:''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 버튼두개 */}
      <div className='bottom'>
        <ButtonMedium>비밀번호 변경</ButtonMedium>
        <ButtonMedium onClick={handleUserContext.logout}>로그아웃</ButtonMedium>
      </div>
      {/* 회탈 */}
      <div className='unlink font_small' onClick={handleUnlink}>
        <p>회원탈퇴</p>
      </div>
    </div>
  );
}
