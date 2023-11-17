'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import CommentMission from './mission/CommentMission';
import VoteMission from './mission/VoteMission';
import StoryMission from './mission/StoryMission';
import FollowMission from './mission/FollowMission';

const PointMission = () => {
	const params = useSearchParams();
	const type = params.get('type');

	const renderMissionComponent = () => {
		switch (type) {
			case 'comment':
				return <CommentMission />;
			case 'vote':
				return <VoteMission />;
			case 'story':
				return <StoryMission />;
			case 'follow':
				return <FollowMission />;
			default:
				return <div>미션이 존재하지 않습니다</div>; // 나중에 에러 컴포넌트 반환
		}
	};
	return <>{renderMissionComponent()}</>;
};

export default PointMission;
