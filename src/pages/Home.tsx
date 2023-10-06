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
import LandingSection2 from '@/components/landing2/LandingSection2';

const Home = () => {
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const [userName, setUserName] = useRecoilState(userNameAtom);

	const flexColumn = css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: fit-content;
	`;

	// useEffect(() => {
	// 	if (localStorage.getItem('access')) {
	// 		const getUserProfile = async () => {
	// 			const data = await getUserInfo();
	// 			console.log(data);
	// 			setUserEmail(data.email);
	// 			setUserName(data.userName);
	// 		};
	// 		getUserProfile();
	// 	} else if (localStorage.getItem('access') && userName !== '') {
	// 		console.log('로그인 완료 상태');
	// 	}
	// });
	useEffect(() => {
		if (localStorage.getItem('access') && userName === '') {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				console.log(data);
				setUserEmail(data.email);
				setUserName(data.userName);
			};
			getUserProfile();
		}
	}, [userName]);

	return (
		<div css={flexColumn}>
			<Header where="main" />
			<NavBar />
			<LandingSection />
			<LandingSection2 />
			<Footer />
		</div>
	);
};

export default Home;
