'use client';
import React from 'react';
import Header from '../common/Header';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { useSetRecoilState } from 'recoil';
import { isLoginAtom, userEmailAtom, userNameAtom, userPhotoAtom, userRoleAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';

const MypageSettings = () => {
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setRole = useSetRecoilState(userRoleAtom);
	const setUserName = useSetRecoilState(userNameAtom);
	const setLogin = useSetRecoilState(isLoginAtom);
	const router = useRouter();

	const logout = () => {
		setUserEmail('');
		setRole('');
		setUserEmail('');
		setUserName('');
		setLogin(false);
		router.push('/');
	};
	return (
		<>
			<Header where="내 정보 수정" />
			<ArticleWrapper>
				<ListBox className="with-bottom" onClick={() => router.push('/mypage/settings/editprofile')}>
					<div>프로필 수정</div>
					<FiChevronRight size="26px" />
				</ListBox>
				<ListBox onClick={logout}>
					<div>로그아웃</div>
					<FiChevronRight size="26px" />
				</ListBox>
			</ArticleWrapper>
		</>
	);
};

export default MypageSettings;

const ArticleWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
`;

const ListBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	justify-content: space-between;
	padding: 2rem 0rem 2rem 1rem;
	font-size: 2rem;
	font-weight: 400;
	&.with-bottom {
		border-bottom: 1px solid rgba(240, 240, 240, 1);
	}
`;
