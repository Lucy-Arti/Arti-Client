'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './landing.css';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiChevronRight } from 'react-icons/fi';

const LandingSectionContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: hidden;
`;

const BannerSection = styled.div`
	width: 100%;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
	img {
		max-width: 100%;
		height: auto;
	}
`;

const LandingSection = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const router = useRouter();

	const handleResize = () => {
		setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth);
			window.addEventListener('resize', handleResize);
			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	const handleClick = (page: string) => {
		return () => {
			router.push(page);
		};
	};

	// 화면 너비 576px 이상이면 데스크탑 이미지 사용
	const selectedImage = windowWidth >= 576 ? '/img/desktopBanner' : windowWidth > 0 ? '/img/mobileBanner' : '';

	return (
		<LandingSectionContainer>
			{windowWidth ? (
				<BannerSection>
					<Swiper
						grabCursor={true}
						cubeEffect={{
							shadow: false,
							slideShadows: false,
							shadowOffset: 0,
							shadowScale: 0,
						}}
						effect={'cube'}
						pagination={true}
						modules={[EffectCube, Pagination, Autoplay]}
						className="mySwiper"
						autoplay={{ delay: 2500, disableOnInteraction: false }}
					>
						<StyledSwiperSlide>
							<img src={selectedImage + '1.png'} alt="landing1" onClick={handleClick(`/vote`)} />
						</StyledSwiperSlide>
						<StyledSwiperSlide
							onClick={() => {
								router.push('/wadiz');
							}}
						>
							<img src={selectedImage + '2.png'} alt="landing2" />
						</StyledSwiperSlide>
						<StyledSwiperSlide>
							<img src={selectedImage + '3.png'} alt="landing3" />
						</StyledSwiperSlide>
						<StyledSwiperSlide>
							<img src={selectedImage + '4.png'} alt="landing4" />
						</StyledSwiperSlide>
						<StyledSwiperSlide>
							<a href="https://bit.ly/designerbannertomakeclothes" target="_blank" rel="noopener noreferrer">
								<img src={selectedImage + '5.png'} alt="landing5" />
							</a>
						</StyledSwiperSlide>
					</Swiper>
				</BannerSection>
			) : (
				<></>
			)}
			<ExplainWrapper>
				<TextWrapper>
					<Text1>Arti가 처음이신가요?</Text1>
					<Text2>Arti를 소개합니다.</Text2>
				</TextWrapper>
				<StyledFiChevronRight
					size="26px"
					onClick={() => {
						router.push('/introduce');
					}}
				/>
			</ExplainWrapper>
		</LandingSectionContainer>
	);
};

export default LandingSection;

const ExplainWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 83%;
	padding: 2rem;
	border-radius: 1.25rem;
	background: #f0f0f0;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text1 = styled.div`
	width: 100%;
	justify-content: flex-start;
	color: #9e9e9e;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	font-family: 'Pretendard Variable';
	margin-bottom: 0.5rem;
`;

const Text2 = styled.div`
	width: 100%;
	display: flex;
	color: black;
	font-size: 2rem;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.2rem;
	font-weight: 600;
	font-family: 'Pretendard Variable';
`;

const StyledFiChevronRight = styled(FiChevronRight)`
	cursor: pointer;
	margin-top: 1.5rem;
`;
