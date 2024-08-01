import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLarge } from '../../generic/Buttons';

const KakaoLogin = ({ setUserInfo }) => {
  const Rest_api_key = 'c339a4ce87068c73b60764a965f764f0'; // REST API KEY
  const redirect_uri = 'http://localhost:5173/ezdomath/'; // Redirect URI
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      // 인가 코드를 이용해 토큰 요청
      fetch(`https://kauth.kakao.com/oauth/token`, {
        method: 'POST',
        headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`
      })
        .then(response => response.json())
        .then(data => {
          if (data.access_token) {
            // 토큰을 localStorage에 저장
            localStorage.setItem('kakao_token', data.access_token);

            // 토큰을 통해 사용자 정보 요청
            fetch('https://kapi.kakao.com/v2/user/me', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(response => {
                setUserInfo({
                  nickname: response.kakao_account.profile.nickname,
                  profile_image: response.kakao_account.profile.profile_image_url
                });

                // URL에서 인가 코드 제거
                window.history.pushState({}, document.title, window.location.pathname);

                // 메인 페이지로 리다이렉트
                navigate('/');
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
    }
  }, [navigate, Rest_api_key, redirect_uri, setUserInfo]);

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL; // 카카오 로그인 페이지로 이동
  };

  return (
    <ButtonLarge onClick={handleLogin}>카카오로 로그인</ButtonLarge>
  );
};

export default KakaoLogin;
