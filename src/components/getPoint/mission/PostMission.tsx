import React from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';

const PostMission = () => {
	return (
		<MainWrapper>
			<PointHeader text="인스타그램 게시글 올리기" backTo="/mypage/point" />
			<ContentSection></ContentSection>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 투표는 하루에 한 번만 할 수 있어요.</div>
				<div className="detail">- 오늘 투표를 완료했다면, 밤 12시에 다시 투표할 수 있어요.</div>
				<div className="detail">- 부적절한 방법으로 투표를 진행하면 포인트 적립이 취소될 수 있어요.</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default PostMission;

const MainWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ContentSection = styled.div`
	width: 90%;
`;

const MissionFooter = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	padding-top: 3.3rem;
	padding-bottom: 4.5rem;
	.title {
		color: var(--black, #383838);
		font-size: 1.75rem;
		font-weight: 400;
		padding-bottom: 1rem;
		padding-left: 2.3rem;
	}
	.detail {
		color: #505866;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 300;
		line-height: 160%;
		padding-left: 2.3rem;
	}
`;
