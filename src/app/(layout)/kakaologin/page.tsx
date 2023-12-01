'use client';

import { useEffect } from 'react';
import { postCode } from '@/apis/login';
import { useSetRecoilState } from 'recoil';
import { postCodeBody } from '@/types/request';
import { isLoginAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const KakaoLogin = () => {
	const route = useRouter();
	const setIsLogin = useSetRecoilState(isLoginAtom);

	let code = null;

	if (typeof window !== 'undefined') {
		code = new URL(window.location.href).searchParams.get('code');
	}

	const body: postCodeBody = {
		authCode: code,
	};

	useEffect(() => {
		const login = async () => {
			await postCode(body);
			setIsLogin(true);
			route.push('/');
		};
		login();
	}, []);

	return (
		<Container>
			<FontSize>로그인이 완료되었습니다.</FontSize>
		</Container>
	);
};

export default KakaoLogin;

const Container = styled.div`
	height: 98vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const FontSize = styled.div`
	font-size: 24px;
	font-weight: 700;
`;
