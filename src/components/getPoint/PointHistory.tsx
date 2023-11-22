'use client';
import React, { useEffect, useState } from 'react';
import PointHeader from './PointHeader';
import styled from 'styled-components';
import { getPointHistory } from '@/apis/getPoint';
import { PointHistoryType } from '@/types/request';

const PointHistory = () => {
	const [historyList, setHistoryList] = useState<PointHistoryType>();
	useEffect(() => {
		if (localStorage.getItem('access')) {
			const getHistoryList = async () => {
				try {
					const response = await getPointHistory();
					if (response && response.data) {
						setHistoryList(response.data);
						console.log(response.data.pointhistory);
					} else {
						console.log('Failed to fetch history list');
					}
				} catch (error) {
					console.error('Error fetching history list:', error);
				}
			};
			getHistoryList();
		} else {
			console.log('Not logged in user');
		}
	}, []);

	return (
		<>
			<PointHeader text="포인트 내역" backTo="/mypage/point" />
			<MainWrap>
				<PointProfileSection>
					<Text1>현재 아티 포인트</Text1>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">{historyList?.savedpoint}P</div>
						</UserPoint>
					</Text2>
				</PointProfileSection>
				<Section>
					{/* 역순으로 배치 */}
					{historyList?.['point history'].slice().reverse().map((historyItem) => (
						<>
							<Mission >
								<Group>
									{historyItem.score > 0 ? <img src="/img/plus-circle.png" /> : <img src="/img/minus-circle.png" />}
									<Text>
										<div className="mission-name">{historyItem.title}</div>
										<div className="mission-date">{historyItem.date}</div>
									</Text>
								</Group>
								<Group>
									{historyItem.score > 0 ? (
										<div className="point-text plus">+{historyItem.score}P</div>
									) : (
										<div className="point-text">{historyItem.score}P</div>
									)}
								</Group>
							</Mission>
							<Line/>
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
