import '@styles/commonStyle.css';
import { css } from '@emotion/react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/common/Header';
import { useEffect, useState } from 'react';
import { isLoginAtom } from '@/utils/state';
import { useRecoilValue } from 'recoil';
import Login from '@/components/login/Login';

const Voting = () => {
	const location = useLocation();
	const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
	const isLogged = useRecoilValue(isLoginAtom);

	useEffect(() => {
		if (location.pathname.includes('/userPick')) {
			setBackgroundColor(
				'linear-gradient(180deg, #6BDA01 -11.87%, rgba(107, 218, 1, 0.00) 99%), rgba(255, 255, 255, 1) 100%',
			);
		} else if (location.pathname.includes('/userVote')) {
			setBackgroundColor('#FFFFFF');
		} else {
			setBackgroundColor('#EBEBEB');
		}
	}, [location.pathname]);

	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		background: ${backgroundColor};
	`;
	const loginSection = css`
		width: 100%;
		background-color: white;
	`;
	const margintop = css`
		height: 30px;
	`;
	return (
		<div css={flexColumn}>
			<Header where="투표하기" />
			{isLogged ? (
				<Outlet />
			) : (
				<div css={loginSection}>
					<div css={margintop}></div>
					<Login where="vote" />
				</div>
			)}
		</div>
	);
};

export default Voting;
