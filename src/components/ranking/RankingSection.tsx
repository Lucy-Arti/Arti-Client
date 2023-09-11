import { css } from '@emotion/react';

const RankingSection = () => {
	const rankingSection = css`
		width: 90%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;
    const bannerSection = css`
        width: 100%;
        margin-top: 2rem;
    `
    const bannerImg = css`
        width: 100%;
    `
	return (
		<div css={rankingSection}>
			<div css={bannerSection}>
				<img css={bannerImg} src="/img/voteBanner.png"/>
                {/* <img src='img/goVoteBtn.png'/> */}
			</div>
			<div>selectBtn</div>
			<div>cardSection</div>
		</div>
	);
};

export default RankingSection;
