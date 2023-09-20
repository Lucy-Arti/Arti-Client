import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import VoteSection from '@/components/voting/VoteSection';

const Voting = () => {
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
					<img src="/img/backBtn.svg" />
					<div
						css={css`
							font-size: 2rem;
							font-weight: 600;
						`}
					>
						투표하기
					</div>
					<div className='emptyDiv'></div>
				</div>
			</div>
			<VoteSection/>
		</div>
	);
};

export default Voting;
