import React from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const VoteMission = () => {
	const router = useRouter();
	return (
		<MainWrapper>
			<Top>
				<PointHeader text="투표하기" backTo="/mypage/point" />
				<ContentSection>
					<StyledImage src="/img/voteMissionBanner.png" alt="투표 미션 배너" fill priority />
					<Span>
						오늘 <span className="bold">250P</span> 더 획득할 수 있어요
					</Span>
					<div className="text1">실물로 보고싶은 옷에 투표하기</div>
					<RouteBtn onClick={()=>{router.push('/vote')}} >투표하고 자동으로 적립하기</RouteBtn>
					<Info>
						<Circle />
						<div className="info">여러분의 투표로 제작될 옷이 결정돼요!</div>
					</Info>
				</ContentSection>
			</Top>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 투표는 하루에 한 번만 할 수 있어요.</div>
				<div className="detail">- 오늘 투표를 완료했다면, 밤 12시에 다시 투표할 수 있어요.</div>
				<div className="detail">- 부적절한 방법으로 투표를 진행하면 포인트 적립이 취소될 수 있어요.</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default VoteMission;
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
	background: #6287E6;
	color: white;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 600;
	cursor : pointer;
`;
