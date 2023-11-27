'use client';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import React from 'react';
import UserTab from './tab/UserTab';
import VoteTab from './tab/VoteTab';
import ClothesTab from './tab/ClothesTab';
import DesignerTab from './tab/DesignerTab';
import CommentTab from './tab/CommentTab';
import PointTab from './tab/PointTab';
import RequestTab from './tab/RequestTab';
import { useRecoilState } from 'recoil';
import { userRoleAtom } from '@/app/recoilContextProvider';

const adminLabels = [
	{ label: '사용자', type: 'user' },
	{ label: '투표', type: 'vote' },
	{ label: '옷', type: 'clothes' },
	{ label: '디자이너', type: 'designer' },
	{ label: '댓글', type: 'comment' },
	{ label: '포인트', type: 'point' },
	{ label: '요청 처리', type: 'request&option=reward' },
];

const AdminMain = () => {
	const [role, setRole] = useRecoilState(userRoleAtom);
	const router = useRouter();
	const params = useSearchParams();
	const type = params.get('type');

	const renderComponent = () => {
		console.log(type);
		switch (type) {
			case 'user':
				return <UserTab />;
			case 'vote':
				return <VoteTab />;
			case 'clothes':
				return <ClothesTab />;
			case 'designer':
				return <DesignerTab />;
			case 'comment':
				return <CommentTab />;
			case 'point':
				return <PointTab />;
			case 'request':
				return <RequestTab />;
			default:
				return <div>페이지가 존재하지 않습니다</div>; // 나중에 에러 컴포넌트 반환
		}
	};
	const handleClick = (type: string) => {
		return () => {
			router.push(`/admin?type=${type}`);
		};
	};
	return (
		<>
			{role === 'ROLE_ADMIN' ? (
				<Section>
					<Header>
						<BtnWrapper>
							<FaHome
								cursor="pointer"
								size="26px"
								onClick={() => {
									router.push('/');
								}}
							/>
							{adminLabels.map((tabs, index) => (
								<Btn key={index} onClick={handleClick(tabs.type)}>
									{tabs.label}
								</Btn>
							))}
						</BtnWrapper>
					</Header>
					{renderComponent()}
				</Section>
			) : (
				<>잘못된 접근입니다.</>
			)}
		</>
	);
};

export default AdminMain;

const Section = styled.div`
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
	-webkit-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	user-select: text;
	overflow: visible;
`;

const Header = styled.div`
	width: 100%;
	height: 9rem;
	background-color: white;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 3rem;
`;

const BtnWrapper = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Btn = styled.div`
	margin-left: 3rem;
	color: var(--Font1, #333);
	font-family: Pretendard;
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 600;
	cursor: pointer;
	:hover {
		color: green;
	}
`;
