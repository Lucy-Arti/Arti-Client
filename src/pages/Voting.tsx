import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import { Outlet, useNavigate } from 'react-router-dom';

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
					<div
						css={css`
							width: 20px;
							display: flex;
							align-items: center;
							cursor: pointer;
						`}
						onClick={handleClick('/rank/total')}
					>
						<img src="/img/backBtn.svg" />
					</div>
					<div
						css={css`
							font-size: 2rem;
							font-weight: 600;
						`}
					>
						투표하기
					</div>
					<div
						css={css`
							width: 20px;
						`}
						className="emptyDiv"
					></div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Voting;
