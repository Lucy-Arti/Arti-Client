import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const Voting = () => {
	const isUserPickPage = window.location.pathname.includes('/userPick');
	const spaceBetween = css`
		justify-content: space-between;
		z-index: 2;
		${isUserPickPage ? 'color: white;' : ''}
	`;
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		${isUserPickPage ? 'background: linear-gradient(180deg, #6BDA01 -11.87%, rgba(107, 218, 1, 0.00) 99%), rgba(255, 255, 255, 1) 100%;' : ''}
	`;

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	return (
		<div css={flexColumn} >
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<FiChevronLeft cursor="pointer" size="3rem" onClick={handleClick('/rank/total')} />
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
