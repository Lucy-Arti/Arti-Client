import React, { useEffect, useState } from 'react';
import PointHeader from '../PointHeader';
import styled from 'styled-components';
import Image from 'next/image';
import { getPossibleMissionList, postScreenshot } from '@/apis/getPoint';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/app/recoilContextProvider';

const StoryMission = () => {
	const [userScreenShot, setUserScreenShot] = useState<any>();
	const [missionPossible, setMissionPossible] = useState(true);
	const isLogged = useRecoilValue(isLoginAtom);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		
		if (!userScreenShot) {
		  alert('스크린샷을 업로드 해주세요!');
		  return;
		}
	  
		const userConfirmed = window.confirm('스크린샷을 제출하시겠습니까?');
		if (userConfirmed) {
		  const formData = new FormData();
		  formData.append('image', userScreenShot);
	  
		  try {
			await postScreenshot(formData);
			setMissionPossible(false);
		  } catch (error) {
			console.error('Error posting screenshot:', error);
		  }
		}
	  };

	useEffect(() => {
		if (localStorage.getItem('access') && isLogged) {
			const getIsMissionPossible = async () => {
				try {
					const response = await getPossibleMissionList();
					if (response && response.data) {
						setMissionPossible(response.data.mission.story);
					} else {
						console.log('Failed to fetch mission data');
					}
				} catch (error) {
					console.error('Error fetching mission data:', error);
				}
			};
			getIsMissionPossible();
		} else {
			console.log('Not logged in user');
		}
	}, []);

	return (
		<MainWrapper>
			<Top>
				<PointHeader text="인스타그램 스토리 올리기" backTo="/mypage/point" />
				{!missionPossible ? (
					<ContentSection>
						<StyledImage src="/img/storyBanner.png" alt="스토리 올리기 미션 배너" fill priority />
						<Span>
							<div className="detail">@arti_fashion_design 인스타그램 계정을</div>
							스토리에 올리면 <span className="bold">250P</span>를 획득할 수 있어요
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
						<StyledImage src="/img/storyBanner.png" alt="팔로우 미션 배너" fill priority />
						<Span>
							<div className="detail">@arti_fashion_design 인스타그램 계정을</div>
							스토리에 올리면 <span className="bold">250P</span>를 획득할 수 있어요
						</Span>
						<div className="state">
							<StyledImage src="/img/missionstate1.png" alt="팔로우 미션 상태" fill priority />
						</div>
						<div className="text1">@arti_fashion_design 태그해서 인스타그램 스토리 업로드하기</div>
						<Info>
							<Circle />
							<div className="info">TIP : 아티 웹사이트 캡처해서 간단한 소감을 남겨주세요!</div>
						</Info>
						<div className="text1 margintop">업로드한 화면을 캡처해서 인증하기</div>
						<Info>
							<Circle />
							<div className="info">포인트 적립을 위해 캡처 화면을 업로드 해주세요!</div>
						</Info>
						<CustomFileInput>
							<Input
								type="file"
								name="screenShot"
								accept="image/*"
								onChange={(e) => setUserScreenShot(e.target.files ? e.target.files[0] : null)}
							/>
							<span>{userScreenShot ? userScreenShot.name : '사진 선택하기'}</span>
						</CustomFileInput>
						<SubmitBtn type="submit" onClick={handleSubmit}>
							캡처 화면 업로드하고 인증하기
						</SubmitBtn>
					</ContentSection>
				)}
			</Top>
			<MissionFooter>
				<div className="title">주의사항</div>
				<div className="detail">- 월요일에는 불가능한 미션이에요.</div>
				<div className="detail">- 올려주신 스토리는 아티 인스타그램 계정에서 리그램할 수 있어요.</div>
				<div className="detail">- 부적절한 방법으로 포인트를 적립하면 포인트 적립이 취소될 수 있어요</div>
			</MissionFooter>
		</MainWrapper>
	);
};

export default StoryMission;

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

const ContentSection = styled.form`
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
	.margintop {
		margin-top: 4rem;
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

const SubmitBtn = styled.button`
	border: none;
	outline: none;
	text-decoration: none;
	-webkit-appearance: none;
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

const CustomFileInput = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 2px dashed #ddd;
	border-radius: 7px;
	padding: 1.5rem;
	font-size: 1.75rem;
	cursor: pointer;
	input {
		display: none;
	}
	span {
		font-size: 1.75rem;
		color: #888;
		margin-top: 0.5rem;
	}
`;
