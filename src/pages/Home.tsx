import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import LandingSection from '@/components/landing/LandingSection';
import Footer from '@/components/common/Footer';

const Home = () => {
	const spaceBetween = css`
		justify-content: space-between;
	`;

	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	return (
		<div css={flexColumn}>
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<img src="/img/blackLogo.svg" />
					<img src="/img/search.svg" />
				</div>
			</div>
			<NavBar />
			<LandingSection />
			<Footer />
		</div>
	);
};

export default Home;
