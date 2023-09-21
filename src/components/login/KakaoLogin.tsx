// import { kakaoLogin } from '@/apis/login';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { body, postCode } from '@/apis/login';

const KakaoLogin = () => {
	const container = css`
		height: 98vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	`;
	const fontSize = css`
		font-size: 24px;
		font-weight: 700;
	`;

	useEffect(() => {
		postCode(body);
		// window.location.href = '/mypage';
	}, []);

	return (
		<div css={container}>
			<div css={fontSize}>로그인 중입니다...</div>
		</div>
	);
};

export default KakaoLogin;
