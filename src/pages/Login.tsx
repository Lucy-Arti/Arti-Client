// import React from 'react';
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
		font-weight: 600;
		text-align: center;
		line-height: 22px;
		letter-spacing: -0.408px;
	`;

	const kakao = css`
		border-radius: 5px;
		width: 75%;
	`;

	const img = css`
		width: 45%;
		height: 35%;
	`;

	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	return (
		<>
			<div css={loginSection}>
				<div css={contentCss}>{content}</div>
				<img css={img} src={'/img/loginBanner.png'}></img>
				<img src={'/img/kakao.png'} css={kakao} onClick={handleLogin} />
			</div>
		</>
	);
};

export default Login;
