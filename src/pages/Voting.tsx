import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header';
import { Helmet } from 'react-helmet-async';

const Voting = () => {
	const link = location.href;
	const isUserPickPage = window.location.pathname.includes('/userPick');
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		${isUserPickPage
			? 'background: linear-gradient(180deg, #6BDA01 -11.87%, rgba(107, 218, 1, 0.00) 99%), rgba(255, 255, 255, 1) 100%;'
			: ''}
	`;

	return (
		<div css={flexColumn}>
			<Helmet>
				<title>Arti 투표하기</title>
				<meta name="description" content="투표를 통해 세상에 숨겨져 있던 유니크한 옷들을 만나보세요" />
				<meta property="og:image" content="/img/voteBanner.png" />
				<meta property="og:url" content={link} />
			</Helmet>
			<Header where="투표하기" />
			<Outlet />
		</div>
	);
};

export default Voting;
