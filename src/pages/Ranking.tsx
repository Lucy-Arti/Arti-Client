import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import RankingSection from '@ranking/RankingSection';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const Ranking = () => {
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
	return (
		<div css={flexColumn}>
			<Header where='main'/>
			<NavBar />
			<RankingSection/>
			<Footer/>
		</div>
	);
};

export default Ranking;
