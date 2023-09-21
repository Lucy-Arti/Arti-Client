import React from 'react';
import { kakaoURL } from '@/components/login/loginInfo';
import { css } from '@emotion/react';
import '@styles/commonStyle.css';

const Login = ({ content }: { content: string }) => {
	const loginSection = css`
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	`;

	const contentCss = css`
		font-size: 20px;
		font-weight: 700;
		text-align: center;
		line-height: 22px;
		letter-spacing: -0.408px;
	`;

	const kakao = css`
		border-radius: 5px;
		width: 75%;
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
			<div css={loginSection}>

				<div css={contentCss}>{content}</div>

				<div
				>
					{content}
				</div>

				<img src={'/img/voteBanner.png'}></img>
				<img src={'/img/kakao.png'} css={kakao} onClick={handleLogin} />
			</div>
		</>
	);
};

export default Login;
