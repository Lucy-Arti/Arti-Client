'use client';
import React, { useEffect } from 'react';
import LandingSection from './LandingSection';
import LandingSection2 from './LandingSection2';
import { getUserInfo } from '@/apis/login';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userEmailAtom, userNameAtom, userRoleAtom } from '@/app/recoilContextProvider';

const LandingHome = () => {
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setRole = useSetRecoilState(userRoleAtom);
	const [userName, setUserName] = useRecoilState(userNameAtom);

	useEffect(() => {
		if (localStorage.getItem('access') && userName === '') {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				console.log(data);
				setUserEmail(data.email);
				setUserName(data.userName);
				setRole(data.role);
			};
			getUserProfile();
		}
	}, [userName]);

	return (
		<>
			<LandingSection />
			<LandingSection2 />
		</>
	);
};

export default LandingHome;
