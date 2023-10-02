// import { kakaoLogin } from '@/apis/login';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { getUserInfo, postCode } from '@/apis/login';
import { useSetRecoilState } from 'recoil';
import { isLoginAtom } from '@/utils/state';
import { useNavigate } from 'react-router-dom';
import { userEmailAtom, userNameAtom } from '@/utils/state';

const KakaoLogin = () => {
	const navigate = useNavigate();
	const setIsLogin = useSetRecoilState(isLoginAtom);
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setUserName = useSetRecoilState(userNameAtom);

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

	useEffect(() => {
		const login = async () => {
			await postCode(body);
			setIsLogin(true);
			navigate('/');
		};
		login();
	}, []);

	return (
		<div css={container}>
			<div css={fontSize}>로그인이 완료되었습니다.</div>
		</div>
	);
};

export default KakaoLogin;
