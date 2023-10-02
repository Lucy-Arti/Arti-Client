import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import LandingSection from '@/components/landing/LandingSection';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useEffect } from 'react';
import { getUserInfo } from '@/apis/login';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoginAtom, userEmailAtom, userNameAtom } from '@/utils/state';

const Home = () => {
	const isLogin = useRecoilValue(isLoginAtom);
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setUserName = useSetRecoilState(userNameAtom);

	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				setUserEmail(data.email);
				setUserName(data.userName);
			};
			getUserProfile();
		}
	});

	return (
		<div css={flexColumn}>
			<Header where="main" />
			<NavBar />
			<LandingSection />
			<Footer />
		</div>
	);
};

export default Home;
