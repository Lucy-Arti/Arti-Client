'use client';

import '@styles/commonStyle.css';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/app/recoilContextProvider';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import VoteMain from './VoteMain';
import Login from '../login/Login';

const Voting = () => {
	const pathname = usePathname();
	const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
	const isLogged = useRecoilValue(isLoginAtom);

	useEffect(() => {
		if (pathname.includes('/userPick')) {
			setBackgroundColor(
				'linear-gradient(180deg, #6BDA01 -11.87%, rgba(107, 218, 1, 0.00) 99%), rgba(255, 255, 255, 1) 100%',
			);
		} else if (pathname.includes('/userVote')) {
			setBackgroundColor('#FFFFFF');
		} else {
			setBackgroundColor('#EBEBEB');
		}
	}, [location.pathname]);

	return (
		<FlexColumn $backgroundColor={backgroundColor}>
			{isLogged ? (
				<VoteMain />
			) : (
				<LoginSection>
					<Margintop />
					<Login where="vote" />
				</LoginSection>
			)}
		</FlexColumn>
	);
};

export default Voting;

const FlexColumn = styled.div<{ $backgroundColor: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.$backgroundColor || '#c6c6c6'};
`;

const LoginSection = styled.div`
	width: 100%;
	background-color: white;
`;

const Margintop = styled.div`
	height: 30px;
`;
