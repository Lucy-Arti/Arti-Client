'use client';
import React, { useEffect } from 'react';
import LandingSection from './LandingSection';
import LandingSection2 from './LandingSection2';
import { getUserInfo } from '@/apis/login';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userEmailAtom, userNameAtom, userPhotoAtom, userRoleAtom } from '@/app/recoilContextProvider';

const LandingHome = () => {
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setRole = useSetRecoilState(userRoleAtom);
	const setPhoto = useSetRecoilState(userPhotoAtom);
	const [userName, setUserName] = useRecoilState(userNameAtom);

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				console.log(data);
				setUserEmail(data.email);
				setUserName(data.nickname);
				if(data.customProfile){
					setPhoto(data.customProfile);
				} else {
					setPhoto(data.profile);
				}
				setRole(data.userRole);
			};
			getUserProfile();
		}
	}, []);

	return (
		<>
			<LandingSection />
			<LandingSection2 />
		</>
	);
};

export default LandingHome;
