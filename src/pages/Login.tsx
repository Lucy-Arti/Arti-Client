import React from 'react';
import { css } from '@emotion/react';
import '@styles/commonStyle.css';
import NavBar from '@/components/common/NavBar';

const Login: React.FC = () => {
	const loginSection = css`
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		/* background-color: black; */
	`;
	const kakao = css`
		border-radius: 5px;
		width: 75%;
	`;
	const spaceBetween = css`
		justify-content: space-between;
	`;
	const Rest_API_key = '209c9251e18aa84300b9f4dc8047c6cd';
	const Redirect_uri = 'http://localhost:3000/login';
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_API_key}&redirect_uri=${Redirect_uri}&response_type=code`;
	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	const code = new URL(window.location.href).searchParams.get('code');
	console.log(code);

	return (
		<>
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<img src="/img/blackLogo.svg" />
					<img src="/img/search.svg" />
				</div>
			</div>
			<NavBar />
			<div css={loginSection}>
				<img src={'/img/voteBanner.png'}></img>
				<img src={'/img/kakao.png'} css={kakao} onClick={handleLogin} />
			</div>
		</>
	);
};

export default Login;
