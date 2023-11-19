import React from 'react';
import styled from 'styled-components';
import PointHeader from '../PointHeader';
import Image from 'next/image';

const VisitMission = () => {
	return (
		<MainWrapper>
			<PointHeader text="출석 체크" backTo="/mypage/point" />
			<FirstSection>
				<BoxTopDesign>
					<Span>
						이번 달 출석 <span className="bold">4일</span> 완료
					</Span>
					<div className="mascot-image">
						<StyledImage src="/img/topmascot.png" alt="출석체크 타이틀 마스코트" fill priority />
					</div>
				</BoxTopDesign>
				<Box>
					<div className="title1">오늘의 출석 체크 완료</div>
					<div className="green-text">30P</div>
					<div className="mascot-image">
						<StyledImage src="/img/visitmissionmascot.png" alt="출석체크 마스코트" fill priority />
					</div>
					<div className="sub1">내일도 잊지 말고 찾아와주세요!</div>
				</Box>
			</FirstSection>
			<SecondSection>
				<Box>
					<div className="sub2">매일 출석하고 추가 포인트 보상을 받아보세요!</div>
					<div className="title2">연속 출석 보상</div>
					<div className="sub3">현재 4일 연속 출석중이에요!</div>
					<StampGroup>
						<div className="stamp-image">
							<StyledImage src="/img/donestamp.png" alt="출석체크 스탬프" fill priority />
							<div>3일 연속 출석</div>
						</div>
						<div className="line" />
						<div className="stamp-image">
							<StyledImage src="/img/donestamp.png" alt="출석체크 스탬프" fill priority />
							<div>5일 연속 출석</div>
						</div>
						<div className="line" />
						<div className="stamp-image">
							<StyledImage src="/img/notdonestamp.png" alt="출석체크 스탬프" fill priority />
							<div>7일 연속 출석</div>
						</div>
					</StampGroup>
				</Box>
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
	}
	.title2 {
		width: 90%;
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 600;
	}
	.sub3 {
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
		z-index: 1;
	}
	.line {
		position: relative;
		width: 20%;
		height: 0;
		border-top: 2px dashed #F0F0F0;
		margin-left: -10%;
		margin-right: -10%;
	}
`;

const BoxTopDesign = styled.div`
	width: 80%;
	margin-top: 2rem;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	.mascot-image {
		width: 37%;
	}
`;

const Span = styled.span`
	color: var(--black, #383838);
	font-size: 2rem;
	font-weight: 600;
	padding-bottom: 1.625rem;
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

const SecondSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2.75rem;
	margin-bottom: 3rem;
`;

const StampGroup = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
