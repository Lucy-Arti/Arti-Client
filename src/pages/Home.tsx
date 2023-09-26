import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import LandingSection from '@/components/landing/LandingSection';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	const link = location.href;
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	return (
		<div css={flexColumn}>
			<Helmet>
				<title>Arti</title>
				<meta name="description" content="투표 기반 신진 패션 디자이너 플랫폼" />
				<meta property="og:image" content="/img/desktopBanner1.png" />
				<meta property="og:url" content={link} />
			</Helmet>
			<Header where='main'/>
			<NavBar />
			<LandingSection />
			<Footer />
		</div>
	);
};

export default Home;
