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
	if (window.location.href.includes('netlify')) {
		window.location.href = 'https://arti-fashion.shop/';
	}
	useEffect(() => {
		if (localStorage.getItem('access')) {
			const getUserProfile = async () => {
				const data = await getUserInfo();
				// console.log(data);
				setUserEmail(data.email);
				setUserName(data.nickname);
				if (data.customProfile !== null) {
					setPhoto(data.customProfile);
				} else {
					if (data.profile === 'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg') {
						setPhoto('/img/myProfile-1.png');
					} else {
						setPhoto(data.profile);
					}
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
