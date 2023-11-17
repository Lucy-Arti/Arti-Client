import React, { useState } from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const FollowMission = () => {
	const router = useRouter();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [userAccount, setUserAccount] = useState('');
	const handleSubmit = () => {
		if (!userAccount) {
			alert('계정을 입력해주세요.');
			return;
		}

		const userConfirmed = typeof window !== 'undefined' ? window.confirm(`계정 확인 : ${userAccount}`) : false;

		if (userConfirmed) {
			setIsSubmitted(true);
			// 새로고침하면 useEffect 발동하면서 팔로우 이벤트 신청 여부 검사하고 다른 컴포넌트 띄워주기
		}
	};

	if (isSubmitted) {
		return (
			<MainWrapper>
				<Top>
					<PointHeader text="인스타그램 팔로우하기" backTo="/mypage/point" />
					<ContentSection>
						<StyledImage src="/img/followBanner.png" alt="팔로우 미션 배너" fill priority />
						<Span>
							<div className="detail">@arti_fashion_design 인스타그램 계정을</div>
							팔로우하면 <span className="bold">250P</span>를 획득할 수 있어요
						</Span>
						<div className="state">
							<StyledImage src="/img/missionstate2.png" alt="팔로우 미션 상태" fill priority />
						</div>
						<div className="text1">포인트 적립 기다리기</div>
						<Info>
							<Circle />
							<div className="info">최대 48시간이 소요될 수 있어요</div>
						</Info>
					</ContentSection>
				</Top>
				<MissionFooter>
					<div className="title">주의사항</div>
					<div className="detail">- 팔로우를 취소한 후 동일 계정으로 다시 팔로우하면 포인트가 적립되지 않아요.</div>
					<div className="detail">- 인스타그램 아이디를 정확히 입력해주셔야 포인트 적립이 가능해요.</div>
					<div className="detail">- 부적절한 방법으로 포인트를 적립하면 포인트 적립이 취소될 수 있어요.</div>
				</MissionFooter>
			</MainWrapper>
		);
	}
	return (
		<MainWrapper>
			<Top>
				<PointHeader text="인스타그램 팔로우하기" backTo="/mypage/point" />

				{isSubmitted ? (
					<ContentSection>
						<StyledImage src="/img/followBanner.png" alt="팔로우 미션 배너" fill priority />
						<Span>
							<div className="detail">@arti_fashion_design 인스타그램 계정을</div>
							팔로우하면 <span className="bold">250P</span>를 획득할 수 있어요
						</Span>
						<div className="state">
							<StyledImage src="/img/missionstate2.png" alt="팔로우 미션 상태" fill priority />
						</div>
						<div className="text1">포인트 적립 기다리기</div>
						<Info>
							<Circle />
							<div className="info">최대 48시간이 소요될 수 있어요</div>
						</Info>
					</ContentSection>
				) : (
					<ContentSection>
						<StyledImage src="/img/followBanner.png" alt="팔로우 미션 배너" fill priority />
						<Span>
							<div className="detail">@arti_fashion_design 인스타그램 계정을</div>
							팔로우하면 <span className="bold">250P</span>를 획득할 수 있어요
						</Span>
						<div className="state">
							<StyledImage src="/img/missionstate1.png" alt="팔로우 미션 상태" fill priority />
						</div>
						<div className="text1">@arti_fashion_design 인스타그램 팔로우하기</div>
						<RouteBtn
						// onClick={() => {

						// 	router.push('https://instagram.com/arti_fashion_design?igshid=NGVhN2U2NjQ0Yg==');
						// }}
						>
							<a
								href="https://instagram.com/arti_fashion_design?igshid=NGVhN2U2NjQ0Yg=="
								target="_blank"
								rel="noopener noreferrer"
							>
								팔로우하러 가기
							</a>
						</RouteBtn>
						<div className="text1">팔로우하고 인스타그램 아이디 입력하기</div>
						<Info>
							<Circle />
							<div className="info">포인트 적립을 위해 인스타그램 아이디를 입력해주세요!</div>
						</Info>
						<Input
							type="text"
							name="user"
							placeholder="ex) arti_fashion_design"
							value={userAccount}
							onChange={(e) => setUserAccount(e.target.value)} // 수정: 입력 값 업데이트
						/>
						<SubmitBtn
							onClick={() => {
								handleSubmit();
							}}
						>
							입력하기
						</SubmitBtn>
					</ContentSection>
				)}
			</Top>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 팔로우를 취소한 후 동일 계정으로 다시 팔로우하면 포인트가 적립되지 않아요.</div>
				<div className="detail">- 인스타그램 아이디를 정확히 입력해주셔야 포인트 적립이 가능해요.</div>
				<div className="detail">- 부적절한 방법으로 포인트를 적립하면 포인트 적립이 취소될 수 있어요.</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default FollowMission;

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
		padding-bottom: 0.5rem;
	}
	margin-bottom: 5.3rem;
	.state {
		width: 6.5rem;
		padding-bottom: 1.5rem;
	}
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
	.detail {
		font-size: 1.5rem;
		color: var(--black, #383838);
		padding-bottom: 0.5rem;
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
	margin-bottom: 4.5rem;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background: #9689f0;
	color: white;
	font-size: 1.75rem;
	font-weight: 600;
	cursor: pointer;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		padding: 1.8rem 0rem;
		text-decoration: none;
		color: white;
	}
`;
const SubmitBtn = styled.div`
	margin-top: 1.2rem;
	margin-bottom: 1.4rem;
	display: flex;
	width: 100%;
	padding: 1.8rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background: #9689f0;
	color: white;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 600;
	cursor: pointer;
`;

const Input = styled.input`
	border-radius: 7px;
	margin-top: 1.2rem;

	border: 1px solid #f0f0f0;
	outline: none;
	font-size: 1.75rem;
	padding: 1.75rem 2rem;
	&::placeholder {
		color: var(--navbar, #888);
	}
	color: #000;
`;
