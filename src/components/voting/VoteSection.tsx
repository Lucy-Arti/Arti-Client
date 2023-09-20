import { css } from '@emotion/react';

const VoteSection = () => {
	const voteSection = css`
		width: 90%;
        min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rem;
        margin-top: 5rem;
	`;
	const bannerSection = css`
		width: 90%;
		height: 300px;
		background-color: #D9D9D9;
		border-radius: 5px;
		margin-top: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const startBtn = css`
		width: 90%;
		height: 5.25rem;
		border-radius: 5px;
		background: linear-gradient(180deg, rgba(134, 230, 45, 0.56) 0%, rgba(107, 218, 1, 0.8) 100%), #fff;
		box-shadow:
			-10px -10px 30px 0px rgba(255, 255, 255, 0.25),
			5px 5px 10px 0px rgba(170, 238, 170, 0.4),
			-10px -10px 10px 0px rgba(174, 174, 192, 0.25) inset,
			10px 10px 10px 0px rgba(255, 255, 255, 0.25) inset;
		display: flex;
        align-items: center;
        justify-content: center;
		font-size: 2rem;
		font-weight: 500;
        margin-top: 5rem;
	`;

	return (
		<div css={voteSection}>
			<div css={css`font-size:3rem;`}>투표 시작문구 시작문구</div>
			<div css={bannerSection}>사진</div>
			<div css={startBtn}>투표 시작하기</div>
		</div>
	);
};

export default VoteSection;
