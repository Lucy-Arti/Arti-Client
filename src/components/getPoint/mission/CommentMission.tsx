import React from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';

const CommentMission = () => {
	return (
		<MainWrapper>
			<PointHeader text="댓글 달기" backTo="/mypage/point" />
			<ContentSection></ContentSection>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 댓글을 삭제할 경우 포인트가 회수될 수 있어요.</div>
				<div className="detail">- 일일 미션은 매일 밤 12시에 다시 시작돼요.</div>
				<div className="detail">- 부적절한 댓글은 삭제될 수 있어요.</div>
				<div className="detail">- 250P를 다 받았다면 포인트는 적립되지 않지만, 댓글은 계속 달 수 있어요.</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default CommentMission;

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
        padding-bottom:1rem;
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
