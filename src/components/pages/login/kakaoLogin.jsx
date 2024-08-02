import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLarge } from '../../generic/Buttons';

const KakaoLogin = ({ handleUserContext }) => {
  const Rest_api_key = 'c339a4ce87068c73b60764a965f764f0';
  const redirect_uri = 'http://localhost:5173/ezdomath/';
  const navigate = useNavigate();

  const kakaoLogin = () => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      fetch(`https://kauth.kakao.com/oauth/token`, {
        method: 'POST',
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`
      })
        .then(response => response.json())
        .then(data => {
          if (data.access_token) {
            localStorage.setItem('kakao_token', data.access_token);
            fetch('https://kapi.kakao.com/v2/user/me', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(response => {
                const kakaoUserInfo = {
                  id: response.id,
                  nickname: response.kakao_account.profile.nickname,
                  profile_image: response.kakao_account.profile.profile_image_url
                };
                localStorage.setItem('kakao_user_info', JSON.stringify(kakaoUserInfo));

                // URL에서 인가 코드 제거
                window.history.replaceState({}, document.title, window.location.pathname);

                // 로그인 상태 처리 및 알림
                const user = handleUserContext.kakaoLogin(kakaoUserInfo);
                if (user) {
                  alert(`환영합니다. ${user.name}님!`);
                  navigate('/');
                } else {
                  navigate('/kakao-detail');
                }
              })
              .catch(error => {
                console.error('사용자 정보 요청 실패', error);
              });
          } else {
            console.error('토큰 요청 실패', data);
          }
        })
        .catch(error => {
          console.error('토큰 요청 에러', error);
        });
    } else {
      const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
      window.location.href = kakaoURL;
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      kakaoLogin();
    }
  }, []);

  return (
    <ButtonLarge onClick={kakaoLogin}>카카오로 로그인</ButtonLarge>
  );
};

export default KakaoLogin;
