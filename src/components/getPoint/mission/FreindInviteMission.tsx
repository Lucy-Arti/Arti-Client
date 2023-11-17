import React from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FreindInviteMission = () => {
	return (
		<MainWrapper>
			<Top>
				<PointHeader text="친구 초대" backTo="/mypage/point" />
				<ContentSection>
					<StyledImage src="/img/freindMissionBanner.png" alt="친구초대 미션 배너" fill priority />
					<CodeBox>
						<div className="text">나의 초대 코드</div>
						<div className="invite-code">YGSHG3423J</div>
					</CodeBox>
					<div className="row">
						<Btn>코드복사</Btn>
						<Btn>공유하기</Btn>
					</div>
				</ContentSection>
				<Line />
				<ContentSection>
					<div className="result-title">친구초대 현황</div>
					<ResultBox>
						<Content>
					
								<div className="title">초대한 친구</div>
								<div className="orange">3명</div>
							
						</Content>
						<div className="line" />
						<Content>
							<div className="title">총 누적포인트</div>
							<div className="orange">3,000P</div>
						</Content>
					</ResultBox>
					<div className="subtitle">참여 방법</div>
					<Info>
						<Circle />
						<div className="info">댓글 1개당 50P | 하루 최대 250P 획득 가능</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">친구가 가입 후 초대 코드를 입력하면 자동으로 포인트 적립받기</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">또다른 친구 초대하기</div>
					</Info>
				</ContentSection>
			</Top>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 초대코드 입력은 가입 후 48시간 이내에만 가능해요.</div>
				<div className="detail">- 초대코드 입력은 마이페이지 하단 메뉴 ‘초대코드 입력’에서 가능해요.</div>
				<div className="detail">- 초대코드는 입력 후 변경할 수 없어요.</div>
				<div className="detail">- 부적절한 방법으로 포인트를 적립하면 캐시 적립이 취소될 수 있어요.</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default FreindInviteMission;

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
	margin-bottom: 3rem;
	.text1 {
		width: 100%;
		color: var(--black, #383838);
		font-size: 1.75rem;
		font-weight: 600;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.result-title {
		width: 100%;
		font-size: 2.5rem;
		font-weight: 600;
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 2rem;
	}
	.subtitle {
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 2.5rem;
	}
`;

const ResultBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-radius: 5px;
	background: #fff;
	margin-bottom: 4.5rem;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
	.line {
		width: 1px;
		height: 72px;
		background: #f5f5f5;
	}
`;

const Content = styled.div`
	width: 40%;
	margin: 2.5rem 0rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 400;
	}
	.orange {
		color: #fa9a41;
		font-size: 3rem;
		font-weight: 600;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const CodeBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: #f5f5f5;
	margin-top: 3rem;
	margin-bottom: 2rem;
	padding: 2rem 0rem;
	.text {
		color: var(--black, #383838);
		font-size: 2rem;
		font-weight: 400;
	}
	.invite-code {
		color: var(--black, #383838);
		font-size: 3.5rem;
		font-weight: 600;
	}
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

const Line = styled.div`
	width: 100%;
	height: 4px;
	background: #f5f5f5;
`;

const Btn = styled.div`
	width: 48%;
	border-radius: 5px;
	background: #ff9d43;
	text-align: center;
	font-size: 1.75rem;
	font-weight: 600;
	padding: 1.5rem 0rem;
`;

const Info = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding-bottom: 3rem;
	.info {
		color: #818181;
		text-align: center;
		font-size: 1.75rem;
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
	width: 1rem;
	height: 1rem;
	background-color: #fa9a41;
	border-radius: 50%;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #fa9a41;
`;