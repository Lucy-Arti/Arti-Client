import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import LandingSection from '@/components/landing/LandingSection';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useEffect } from 'react';
import { getUserInfo } from '@/apis/login';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userEmailAtom, userNameAtom } from '@/utils/state';

const Home = () => {
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const [userName, setUserName] = useRecoilState(userNameAtom);

	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				console.log(data);
				setUserEmail(data.email);
				setUserName(data.userName);
			};
			getUserProfile();
		} else if (localStorage.getItem('access') && userName !== '') {
			console.log('로그인 완료 상태');
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
