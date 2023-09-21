import { css } from '@emotion/react';

const landingSection = css`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;
const bannerSection = css`
	width: 100%;
	height: 300px;
	background-color: rgba(172, 253, 96, 0.7);
    border-radius: 5px;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LandingSection = () => {
	return (
		<div css={landingSection}>
			<div css={bannerSection}>
                Landing Banner
            </div>
		</div>
	);
};

export default LandingSection;
