import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import RankingSection from '@ranking/RankingSection';
import Footer from '@/components/common/Footer';

const Ranking = () => {
    const spaceBetween = css`
        justify-content: space-between;
    `
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
	return (
		<div css={flexColumn}>
			<div className="headerLayout">
                <div css={spaceBetween} className='headerComponent'>
                    <img src='/img/blackLogo.svg'/>
                    <img src='/img/search.svg'/>
                </div>
            </div>
			<NavBar />
			<RankingSection/>
			<Footer/>
		</div>
	);
};

export default Ranking;
