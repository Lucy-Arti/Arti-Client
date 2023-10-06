// import React from 'react';
import { css } from '@emotion/react';
import '@styles/commonStyle.css';
import { kakaoURL } from './loginInfo';

const Login = ({ where }: { where: string }) => {
	const loginSection = css`
		margin-top: 5rem;
		width: 100%;
		height: 45rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	`;

	const contentCss = css`
		font-size: 2.2rem;
		font-weight: 900;
		text-align: center;
		line-height: 22px;
		letter-spacing: -0.408px;
		height: 6rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 2rem;
	`;

	const kakao = css`
		border-radius: 5px;
		width: 75%;
	`;

	const img = css`
		width: 30rem;
		height: 17rem;
	`;

	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	let content: string = '';

	if (where === 'vote') {
		content = '로그인하여\n투표에 참여해보세요!';
	} else if (where === 'mypage') {
		content = '아티와 함께하여\n새로운 스타일과 브랜드를 경험해 보세요!';
	}

	return (
		<>
			<div css={loginSection}>
				<div css={contentCss}>
					{content.split('\n').map((line, index) => (
						<span key={index}>
							{line}
							<br />
						</span>
					))}
				</div>
				<img css={img} src={'/img/loginBanner.png'} loading="lazy"></img>
				<img src={'/img/kakao.png'} css={kakao} onClick={handleLogin} loading="lazy" />
			</div>
		</>
	);
};

export default Login;
