import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import { Outlet} from 'react-router-dom';
import Header from '@/components/common/Header';

const Voting = () => {
	const isUserPickPage = window.location.pathname.includes('/userPick');
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		${isUserPickPage ? 'background: linear-gradient(180deg, #6BDA01 -11.87%, rgba(107, 218, 1, 0.00) 99%), rgba(255, 255, 255, 1) 100%;' : ''}
	`;

	return (
		<div css={flexColumn} >
			<Header where='투표하기'/>
			<Outlet />
		</div>
	);
};

export default Voting;
