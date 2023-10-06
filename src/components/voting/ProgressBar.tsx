import { css } from '@emotion/react';
interface ProgressBarProps {
	progress: string;
	percentage: number;
	translateX: number;
}

const ProgressBar = ({ progressprops }: { progressprops: ProgressBarProps }) => {
	const progressBar = css`
		display: flex;
		align-items: center;
		width: 100%;
		height: 14px;
		border-radius: 20px;
		background: #ededed;
		margin-top: 2rem;
		position: relative;
	`;

	const progress = css`
		background-color: var(--lime, #6bda01);
		border-radius: 20px;
		height: 100%;
		width: ${progressprops.percentage}%;
		transition: width 0.5s ease-in-out;
		position: relative;
	`;

	const progressLogoWrap = css`
		position: absolute;
		margin-top: -11px;
		width: 40px;
		right: -16px;
		color: var(--lime, #6bda01);
		font-size: 1.5rem;
		text-align: center;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	const progressText = css`
		margin-top: 3px;
	`;

	const progressLogo = css`
		margin-top: 5px;
		width: 25px;
		height: 25px;
		border-radius: 21px;
		background: rgba(178, 255, 106, 0.4);
		z-index: 1;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
		backdrop-filter: blur(2.254070520401001px);
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	return (
		<div css={progressBar}>
			<div css={progress}>
				<div css={progressLogoWrap}>
					<div css={progressLogo}>
						<img src="/img/progresslogo.svg" loading="lazy" />
					</div>
					{/* <img css={progressLogo} src="/img/progressLogo.svg" /> */}
					<div css={progressText}>{progressprops.progress}</div>
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
