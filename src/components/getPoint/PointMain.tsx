'use client';
import React from 'react';
import PointHeader from './PointHeader';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const sampleData = {
	point: 390,
	mission: {
		comment: true,
		vote: true,
		visit: false,
		follow: true,
		post: true,
		story: true,
		freind: false,
		designer: false,
	},
};
const PointMain = () => {
	const router = useRouter();
	return (
		<>
			<PointHeader text="포인트" backTo="/mypage" />
			<MainWrap>
				<PointProfileSection>
					<Text1>현재 아티 포인트</Text1>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">{sampleData.point}P</div>
						</UserPoint>
						<HistoryBtn onClick={() => router.push(`/mypage/point/history`)}>포인트 내역</HistoryBtn>
					</Text2>
					<GoToShopBox onClick={() => router.push(`/mypage/shop`)}>
						<LogoText>
							<img src="/img/shopping-bag.png" />
							<div className="text">모은 포인트를 교환해보세요</div>
						</LogoText>
						<StyledFiChevronRight1 size="26px" />
					</GoToShopBox>
				</PointProfileSection>
				{/* 일일 미션 */}
				<Section>
					<MissionTitle>
						<div>일일 미션</div>
						<div className="detail">미션은 매일 밤 12시에 다시 시작돼요.</div>
					</MissionTitle>
					<Mission $isPossible={sampleData.mission.comment}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">댓글 달기</div>
						</Group>
						{sampleData.mission.comment ? (
							<Group onClick={() => router.push(`/mypage/point/mission?type=comment`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
					<Line />
					<Mission $isPossible={sampleData.mission.vote}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">투표하기</div>
						</Group>
						{sampleData.mission.vote ? (
							<Group onClick={() => router.push(`/mypage/point/mission?type=vote`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
					<Line />
					<Mission $isPossible={sampleData.mission.visit}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">출석체크</div>
						</Group>
						{sampleData.mission.visit ? (
							<Group onClick={() => router.push(`/mypage/point/mission?type=visit`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
				</Section>
				{/* 인스타그램 미션 */}
				<Section>
					<MissionTitle>
						<div>인스타그램 미션</div>
					</MissionTitle>
					<Mission $isPossible={sampleData.mission.follow}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">Arti 계정 팔로우</div>
						</Group>
						{sampleData.mission.follow ? (
							<Group onClick={() => router.push(`/mypage/point/mission?type=follow`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
					<Line />
					<Mission $isPossible={sampleData.mission.post}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">Arti 태그 후 게시물 업로드</div>
						</Group>
						{sampleData.mission.post ? (
							<Group onClick={() => router.push(`/mypage/point//mission?type=post`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
					<Line />
					<Mission $isPossible={sampleData.mission.story}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">Arti 태그 후 스토리 업로드</div>
						</Group>
						{sampleData.mission.story ? (
							<Group onClick={() => router.push(`/mypage/point//mission?type=story`)}>
								<div className="point-text">250P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
				</Section>
				{/* 초대미션 */}
				<Section>
					<MissionTitle>
						<div>초대 미션</div>
					</MissionTitle>
					<Mission $isPossible={sampleData.mission.freind}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">친구 초대</div>
						</Group>
						{sampleData.mission.freind ? (
							<Group onClick={() => router.push(`/mypage/point//mission?type=freind`)}>
								<div className="point-text">700P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
					<Line />
					<Mission $isPossible={sampleData.mission.designer}>
						<Group>
							<div className="possible-circle" />
							<div className="mission-name">디자이너 초대</div>
						</Group>
						{sampleData.mission.designer ? (
							<Group onClick={() => router.push(`/mypage/point//mission?type=designer`)}>
								<div className="point-text">1000P</div>
								<StyledFiChevronRight2 size="26px" />
							</Group>
						) : (
							<img src="/img/check-circle.png" />
						)}
					</Mission>
				</Section>
			</MainWrap>
		</>
	);
};

export default PointMain;

const MainWrap = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const PointProfileSection = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Text1 = styled.div`
	width: 90%;
	justify-content: flex-start;
	color: #9e9e9e;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
`;

const Text2 = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;

const UserPoint = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 3rem;
	}
	.text {
		color: var(--black, #383838);
		font-size: 2.875rem;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		padding-left: 1rem;
	}
`;

const HistoryBtn = styled.div`
	border-radius: 5.625px;
	border: 0.563px solid #d9d9d9;
	color: var(--navbar, #888);
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;

const GoToShopBox = styled.div`
	margin-top: 2rem;
	margin-bottom: 3.3rem;
	cursor: pointer;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	background: var(--white-100, #fff);
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
`;

const LogoText = styled.div`
	padding: 1.8rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 3rem;
	}
	.text {
		color: var(--black, #383838);
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		padding-left: 1rem;
	}
`;

const StyledFiChevronRight1 = styled(FiChevronRight)`
	cursor: pointer;
	padding: 1.8rem 1.5rem;
	color: #383838;
`;

const StyledFiChevronRight2 = styled(FiChevronRight)`
	cursor: pointer;
	color: #383838;
	padding-left: 1rem;
`;

const Section = styled.div`
	border-top: solid 4px #f5f5f5;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 3rem;
`;
const MissionTitle = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 500;
	.detail {
		color: #a8a8a8;
		font-weight: 300;
	}
	margin-top: 3rem;
	margin-bottom: 1rem;
`;

const Mission = styled.div<{ $isPossible: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	padding: 2rem 0rem;
	.possible-circle {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		background-color: ${(props) => (props.$isPossible ? '#78EDAD' : 'gray')};
	}
	.mission-name {
		color: #4d4d4d;
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 600;
		padding-left: 1.5rem;
	}
	img {
		width: 3rem;
	}
`;

const Line = styled.div`
	width: 90%;
	height: 1.5px;
	background-color: #f9f9f9;
`;

const Group = styled.div`
	display: flex;
	align-items: center;
	.point-text {
		color: #a8a8a8;
		text-align: right;
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 600;
	}
`;
