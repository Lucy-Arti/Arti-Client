import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import VoteSection from '@/components/voting/VoteSection';
import {useNavigate } from 'react-router-dom';

const Voting = () => {
	const spaceBetween = css`
		justify-content: space-between;
	`;
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	return (
		<div css={flexColumn}>
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<img src="/img/backBtn.svg" onClick={handleClick('/rank/total')}/>
					<div
						css={css`
							font-size: 2rem;
							font-weight: 600;
						`}
					>
						투표하기
					</div>
					<div className="emptyDiv"></div>
				</div>
			</div>
			<VoteSection />
		</div>
	);
};

export default Voting;
