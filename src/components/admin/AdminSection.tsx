import { css } from '@emotion/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const AdminSection = () => {
	const adminLabels = [
		{ label: '사용자 정보', route: 'admin/' },
		{ label: '투표 현황', route: 'admin/votestatus' },
		{ label: '옷 정보', route: 'admin/clothes' },
		{ label: '디자이너 정보', route: 'admin/designer' },
	];

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	const section = css`
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		width: 100%;
		top: 0;
		right: 50%;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0%);
		height: fit-content;
		min-height: 100%;
		background-color: #f4f4f4;
		z-index: 1;
		overflow: scroll;
	`;

	const header = css`
		position: absolute;
		z-index: 1;
		top: 0;
		width: 100%;
		height: 90px;
		background-color: white;
		font-size: 2.5rem;
		display: flex;
		align-items: center;
	`;
	const btnWrapper = css`
		display: flex;
		width: fit-content;
		gap: 1rem;
	`;
	const btn =css`
	margin-left: 3rem;
		cursor: pointer;
		:hover{
			color: green;
		}
	`
	return (
		<div css={section}>
			<div css={header}>
			<FiChevronLeft css={btn} cursor="pointer" size="26px" onClick={handleClick('/')} />
				<div css={btnWrapper}>
					{adminLabels.map((tabs, index) => (
						<div css={btn} key={index} onClick={handleClick(`/${tabs.route}`)}>
							{tabs.label}
						</div>
					))}
				</div>
			</div>
			<Outlet/>
		</div>
	);
};

export default AdminSection;
