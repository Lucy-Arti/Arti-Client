import styled from 'styled-components';
interface ProgressBarProps {
	progress: string;
	percentage: number;
	translateX: number;
}

const ProgressBar = ({ progressprops }: { progressprops: ProgressBarProps }) => {
	return (
		<ProgressBarWrapper>
			<Progress $percentage={progressprops.percentage}>
				<ProgressLogoWrap>
					<ProgressLogo>
						<img src="/img/progresslogo.svg" loading="lazy" />
					</ProgressLogo>
					<ProgressText>{progressprops.progress}</ProgressText>
				</ProgressLogoWrap>
			</Progress>
		</ProgressBarWrapper>
	);
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 14px;
	border-radius: 20px;
	background: #ededed;
	margin-top: 2rem;
	position: relative;
`;

const Progress = styled.div<{$percentage:number}>`
	background-color: var(--lime, #6bda01);
	border-radius: 20px;
	height: 100%;
	width: ${(props) => props.$percentage}%;
	transition: width 0.5s ease-in-out;
	position: relative;
`;

const ProgressLogoWrap = styled.div`
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

const ProgressText = styled.div`
	margin-top: 3px;
`;

const ProgressLogo = styled.div`
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
