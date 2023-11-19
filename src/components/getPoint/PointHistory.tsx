'use client';
import React from 'react';
import PointHeader from './PointHeader';
import styled from 'styled-components';

const sampleData = {
	point: 390,
	history: [
		{ mission: '댓글 달기', date: '23.10.24', point: 20 },
		{ mission: '할인쿠폰 구매', date: '23.10.24', point: -3000 },
		{ mission: '투표하기', date: '23.10.24', point: 100 },
		{ mission: '투표하기', date: '23.10.23', point: 100 },
		{ mission: '굿즈 구매', date: '23.10.22', point: -500 },
		{ mission: '투표하기', date: '23.10.21', point: 100 },
	],
};

const PointHistory = () => {
	return (
		<>
			<PointHeader text="포인트 내역" backTo="/mypage/point" />
			<MainWrap>
				<PointProfileSection>
					<Text1>현재 아티 포인트</Text1>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">{sampleData.point}P</div>
						</UserPoint>
					</Text2>
				</PointProfileSection>
				<Section>
					{sampleData.history.map((historyItem) => (
						<>
							<Mission>
								<Group>
									{historyItem.point > 0 ? <img src="/img/plus-circle.png" /> : <img src="/img/minus-circle.png" />}
									<Text>
										<div className="mission-name">{historyItem.mission}</div>
										<div className="mission-date">{historyItem.date}</div>
									</Text>
								</Group>
								<Group>
									{historyItem.point > 0 ? (
										<div className="point-text plus">+{historyItem.point}P</div>
									) : (
										<div className="point-text">{historyItem.point}P</div>
									)}
								</Group>
							</Mission>
							<Line />
						</>
					))}
				</Section>
			</MainWrap>
		</>
	);
};

export default PointHistory;

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
	padding-bottom: 3rem;
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

const Section = styled.div`
	border-top: solid 4px #f5f5f5;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 5rem;
`;

const Mission = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	padding: 2rem 0rem;
	.possible-circle {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
	}
	img {
		width: 3rem;
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1.5rem;
	padding-left: 1.5rem;
	.mission-name {
		color: #4d4d4d;
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 600;
	}
	.mission-date {
		color: #9e9e9e;
		font-family: Pretendard Variable;
		font-size: 1.75rem;
		font-weight: 400;
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
	color: #a8a8a8;
	.point-text {
		text-align: right;
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
	}
	.plus {
		color: var(--lime, #6bda01);
	}
`;
