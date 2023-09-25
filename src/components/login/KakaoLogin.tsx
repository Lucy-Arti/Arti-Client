// import { kakaoLogin } from '@/apis/login';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { isLoginAtom } from '@/utils/state';
import { useRecoilState } from 'recoil';

const KakaoLogin = () => {
	const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

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
		// window.location.href = '/';
		// console.log(body);
		// postCode(body);
		setIsLogin(true);
		console.log(isLogin);
	}, []);

	return (
		<div css={container}>
			<div css={fontSize}>로그인 중입니다...</div>
		</div>
	);
};

export default KakaoLogin;
