// import React from 'react';
import { css } from '@emotion/react';
import '@styles/commonStyle.css';
import { kakaoURL } from './loginInfo';

const Login = ({ where }: { where: string }) => {
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

	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	let content;

	if (where === 'vote') {
		content = '로그인하여 \n 투표에 참여해보세요!';
	} else if (where === 'mypage') {
		content = '아티와 함께해 \n 새로운 스타일과 브랜드를 경험해 보세요!';
	}

	return (
		<>
			<div css={loginSection}>
				<div css={contentCss}>{content}</div>
				{/* <img src={'/img/voteBanner.png'}></img> */}
				<img src={'/img/kakao.png'} css={kakao} onClick={handleLogin} />
			</div>
		</>
	);
};

export default Login;
