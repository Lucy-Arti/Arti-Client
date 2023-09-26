import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import LandingSection from '@/components/landing/LandingSection';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const Home = () => {
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	return (
		<div css={flexColumn}>
			<Header where='main'/>
			<NavBar />
			<LandingSection />
			<Footer />
		</div>
	);
};

export default Home;
