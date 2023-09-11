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
		aspect-ratio: 1 / 0.64;
		margin-top: 2rem;
		position: relative;
		background-color: aliceblue;
		overflow: -moz-hidden-unscrollable;
	`;

	const bannerChild = css`
		position: absolute;
	`;

	const bannerImg = css`
		width: 100%;
	`;
	const voteBtnImg = css`
		width: 35%;
		z-index: 1;
		margin-top: 40px;
		bottom: 2.8rem;
		right: 2.8rem;
		border-radius: 50%;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	`;
	return (
		<div css={rankingSection}>
			<div css={bannerSection}>
				<img css={[bannerChild, bannerImg]} src="/img/voteBanner.png" />
				<img css={[bannerChild, voteBtnImg]} src="img/goVoteBtn.png" />
			</div>
			<div>selectBtn</div>
			<div>cardSection</div>
		</div>
	);
};

export default RankingSection;
