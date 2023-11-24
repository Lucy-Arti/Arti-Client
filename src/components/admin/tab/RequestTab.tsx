import React from 'react';
import RewardTab from './RewardTab';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import FollowTab from './FollowTab';
import StoryTab from './StoryTab';

const RequestTab = () => {
	const router = useRouter();
	const params = useSearchParams();
	const option = params.get('option');

	const renderMissionComponent = () => {
		switch (option) {
			case 'reward':
				return <RewardTab />;
			case 'follow':
				return <FollowTab />;
			case 'story':
				return <StoryTab />;
			default:
				return <div>페이지가 존재하지 않습니다</div>; // 나중에 에러 컴포넌트 반환
		}
	};

	return (
		<>
			<Nav>
				<Title $active={option === 'reward'} onClick={() => router.push(`/admin?type=request&option=reward`)}>
					리워드 구매
				</Title>
				<Title $active={option === 'follow'} onClick={() => router.push(`/admin?type=request&option=follow`)}>
					인스타그램 팔로우
				</Title>
				<Title $active={option === 'story'} onClick={() => router.push(`/admin?type=request&option=story`)}>
					인스타그램 스토리
				</Title>
			</Nav>
			{renderMissionComponent()}
		</>
	);
};

export default RequestTab;

const Nav = styled.div`
	width: 80%;
	display: flex;
	gap: 3rem;
	color: var(--black, #383838);
	font-family: Pretendard;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
`;

const Title = styled.div<{ $active: boolean }>`
	color: ${(props) => (props.$active ? 'var(--lime, #6BDA01)' : 'var(--black, #383838)')};
`;
