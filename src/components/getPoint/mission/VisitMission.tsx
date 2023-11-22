import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PointHeader from '../PointHeader';
import Image from 'next/image';
import VisitModal from './VisitModal';
import { checkAttendance, checkMonthAttendance, checkConsecutiveAttendance } from '@/apis/getPoint';

const VisitMission = () => {
	const [showModal, setShowModal] = useState(false);
	const [monthVisit, setMonthVisit] = useState<number>();
	const [consecutiveVisit, setConsecutiveVisit] = useState<number>();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowModal(false);
		}, 2000);

		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const chekTodayAttendance = async () => {
				try {
					const todayAttendanceResponse = await checkAttendance();
					const monthResponse = await checkMonthAttendance();
					const consecutiveResponse = await checkConsecutiveAttendance();
					// 당일 출석 모달
					if (todayAttendanceResponse) {
						setShowModal(true);
						setTimeout(() => {
							setShowModal(false);
						}, 2000);
					} else {
						console.log('당일 출석 실패');
					}
					// 이번 달 출석
					if (monthResponse) {
						setMonthVisit(monthResponse.data);
					} else {
						console.log('월 출석 데이터 패치 실패');
					}
					// 연속 출석
					if (consecutiveResponse) {
						setConsecutiveVisit(consecutiveResponse.data);
					} else {
						console.log('연속출석 데이터 패치 실패');
					}
				} catch (error) {
					console.error('Error fetching attendance data:', error);
				}
			};
			chekTodayAttendance();
		} else {
			console.log('Not logged in user');
		}
	}, []);

	return (
		<MainWrapper>
			{showModal && <VisitModal />}
			<PointHeader text="출석 체크" backTo="/mypage/point" />
			<FirstSection>
				<PointAlert>
					<div className="title1">현재 보유 아티 포인트</div>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">390P</div>
						</UserPoint>
					</Text2>
				</PointAlert>
				<BoxTopDesign>
					<Span>
						이번 달 출석 <span className="bold">{monthVisit}일</span> 완료
					</Span>
					<div className="mascot-image">
						<StyledImage src="/img/visittopimage.png" alt="출석체크 타이틀 마스코트" fill priority />
					</div>
				</BoxTopDesign>
				<Box>
					<div className="sub2">매일 출석하고 추가 포인트 보상을 받아보세요!</div>
					<div className="title2">🎉 연속 출석 보상</div>
					<div className="sub3">현재 {consecutiveVisit}일 연속 출석중이에요!</div>
					<StampGroup>
						<div className="stamp-image">
							{consecutiveVisit && consecutiveVisit >= 3 ? (
								<StyledImage src="/img/donestamp.png" alt="출석체크 스탬프" fill priority />
							) : (
								<StyledImage src="/img/notdonestamp.png" alt="출석체크 스탬프" fill priority />
							)}
							<div>3일 연속 출석</div>
						</div>
						<div className="line" />
						<div className="stamp-image">
						{consecutiveVisit && consecutiveVisit >= 5 ? (
								<StyledImage src="/img/donestamp.png" alt="출석체크 스탬프" fill priority />
							) : (
								<StyledImage src="/img/notdonestamp.png" alt="출석체크 스탬프" fill priority />
							)}
							<div>5일 연속 출석</div>
						</div>
						<div className="line" />
						<div className="stamp-image">
						{consecutiveVisit && consecutiveVisit >= 7 ? (
								<StyledImage src="/img/donestamp.png" alt="출석체크 스탬프" fill priority />
							) : (
								<StyledImage src="/img/notdonestamp.png" alt="출석체크 스탬프" fill priority />
							)}
							<div>7일 연속 출석</div>
						</div>
					</StampGroup>
				</Box>
			</FirstSection>
			<SecondSection>
				<TextGroup>
					<div className="text1">연속으로 출석하면</div>
					<div className="text1">더 많은 포인트를 얻을 수 있어요!</div>
					<div className="text2">내일도 잊지 말고 찾아와주세요!</div>
					<div className="mascot-image">
						<StyledImage src="/img/visitmascot.png" alt="출석체크 타이틀 마스코트" fill priority />
					</div>
				</TextGroup>
			</SecondSection>
		</MainWrapper>
	);
};

export default VisitMission;

const MainWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FirstSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const PointAlert = styled.div`
	width: 85%;
	position: relative;
	margin-bottom: -10%;
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	.title1 {
		color: #000;
		font-size: 2.2rem;
		font-weight: 500;
	}
`;
const Box = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background: #fff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
	padding: 3.8rem 0rem;
	z-index: 1;
	.title1 {
		color: #000;
		text-align: center;
		font-size: 2.2rem;
		font-weight: 500;
	}
	.green-text {
		color: var(--lime, #6bda01);
		text-align: center;
		font-size: 3.75rem;
		font-weight: 600;
		margin-top: 1rem;
	}
	.mascot-image {
		width: 47.5%;
	}
	.sub1 {
		color: #000;
		text-align: center;
		font-size: 1.6rem;
		font-weight: 400;
		margin-top: 2.625rem;
	}
	.sub2 {
		width: 90%;
		color: var(--navbar, #888);
		font-size: 1.5rem;
		font-weight: 500;
		padding-bottom: 0.7rem;
	}
	.title2 {
		width: 90%;
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 600;
	}
	.sub3 {
		width: 90%;
		margin-top: 2.3rem;
		color: var(--navbar, #888);
		font-size: 1.5rem;
		font-weight: 500;
	}
	.stamp-image {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--black, #383838);
		text-align: center;
		font-size: 1.5rem;
		font-weight: 500;
		z-index: 2;
	}
	.line {
		position: relative;
		width: 20%;
		height: 0;
		border-top: 2px dashed #f0f0f0;
		margin-left: -10%;
		margin-right: -10%;
	}
`;

const BoxTopDesign = styled.div`
	width: 83%;
	margin-top: 2rem;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	z-index: 1;
	padding-right: 2rem;
	.mascot-image {
		width: 27%;
	}
`;

const Span = styled.span`
	color: var(--black, #383838);
	font-size: 2rem;
	font-weight: 600;
	padding-bottom: 1.8rem;
	.bold {
		color: var(--lime, #6bda01);
		font-size: 2.87rem;
		font-weight: 700;
	}
	.title2 {
		color: #000;
		text-align: center;
		font-size: 2.2rem;
		font-weight: 500;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const StampGroup = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
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
		font-size: 3.75rem;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
		padding-left: 1rem;
	}
`;

const SecondSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 5rem;
	margin-top: 5rem;
	border-radius: 25px 25px 0 0;
	background: rgba(228, 244, 213, 0.8);
`;

const TextGroup = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	.text1 {
		color: var(--black, #383838);
		font-size: 2.5rem;
		font-weight: 600;
		padding-bottom: 1rem;
	}
	.text2 {
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 400;
	}
	.mascot-image {
		position: relative;
		left: 70%;
		width: 30%;
		margin-top: -6%;
	}
`;
