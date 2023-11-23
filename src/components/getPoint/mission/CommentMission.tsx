import React, { useEffect, useState } from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { checkCommentReward } from '@/apis/getPoint';

const CommentMission = () => {
	const router = useRouter();
	const [commentReward, setcommentReward] = useState();

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const checkReward = async () => {
				try {
					const response = await checkCommentReward();
					// 당일 출석 모달
					if (response) {
						setcommentReward(response.data.reward);
					} else {
						console.log('댓글 리워드 get 실패');
					}
				} catch (error) {
					console.error('Error fetching reward data:', error);
				}
			};
			checkReward();
		} else {
			console.log('Not logged in user');
		}
	}, []);

	return (
		<MainWrapper>
			<Top>
				<PointHeader text="댓글 달기" backTo="/mypage/point" />
				<ContentSection>
					<StyledImage src="/img/commentBanner.png" alt="댓글 미션 배너" fill priority />
					<Span>
						오늘 <span className="bold">{commentReward}P</span> 더 획득할 수 있어요
					</Span>
					<div className="text1">일러스트/작품에 대한 댓글 남기기</div>
					<RouteBtn onClick={()=>{router.push('/productlist')}}>댓글 남기고 자동으로 적립하기</RouteBtn>
					<Info>
						<Circle />
						<div className="info">여러분의 피드백으로 더 좋은 옷이 탄생돼요!</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">댓글 1개당 50P | 하루 최대 250P 획득 가능</div>
					</Info>
				</ContentSection>
			</Top>
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

const Top = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContentSection = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	.text1 {
		width: 100%;
		color: var(--black, #383838);
		font-size: 1.75rem;
		font-weight: 600;
	}
	margin-bottom: 5.3rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
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

const Info = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
	.info {
		color: #6f6f6f;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 400;
		padding-left: 1rem;
	}
`;

const Span = styled.span`
	padding-top: 4.5rem;
	padding-bottom: 3rem;
	width: 100%;
	color: var(--black, #383838);
	font-size: 2rem;
	font-weight: 500;
	.bold {
		font-weight: 700;
	}
`;

const Circle = styled.div`
	width: 0.625rem;
	height: 0.625rem;
	background-color: #6f6f6f;
	border-radius: 50%;
`;

const RouteBtn = styled.div`
	margin-top: 1.2rem;
	margin-bottom: 1.4rem;
	display: flex;
	width: 100%;
	padding: 1.8rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background: #76cc23;
	color: white;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 600;
	cursor : pointer;
`;
