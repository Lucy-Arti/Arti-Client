// import { kakaoLogin } from '@/apis/login';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { isLoginAtom } from '@/utils/state';
import { useRecoilState } from 'recoil';
import { postCode } from '@/apis/login';

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

	const code: string | null = new URL(window.location.href).searchParams.get('code');

	const body = {
		authCode: code,
	};

	console.log(body);

	useEffect(() => {
		// 이 useEffect는 페이지가 렌더링 됐을때 함수 실행시키는거
		// window.location.href = '/';
		// console.log(body);
		postCode(body); // 저 로그인 중입니다... 페이지가 뜨면 이 함수들을 실행
		setIsLogin(true);
		console.log(isLogin);
	}, [code]);

	return (
		<div css={container}>
			<div css={fontSize}>로그인 중입니다...</div>
		</div>
	);
};

export default KakaoLogin;
