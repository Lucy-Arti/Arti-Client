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

const BannerSection = styled.div<{$loadingWidth?:number}>`
	width: 100%;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	&.loading{
		width: 90%;
		height: ${props => (props.$loadingWidth && props.$loadingWidth >= 576)? `332.9px`:`490.8px`};
		background-color: #C9C9C9;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
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

	const onClickToExternel = (url: string) => {
		if (typeof window !== 'undefined') {
			window.open(url, '_blank');
		}
	};

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
							<img
								src={selectedImage + '1.png'}
								alt="landing1"
								onClick={() => onClickToExternel('https://bit.ly/web_contest_1')}
							/>
						</StyledSwiperSlide>
						<StyledSwiperSlide
							onClick={() => {
								router.push('/wadiz');
							}}
						>
							<img src={selectedImage + '2.png'} alt="landing2" />
						</StyledSwiperSlide>
						<StyledSwiperSlide
							onClick={() => {
								router.push('/introduce');
							}}
						>
							<img src={selectedImage + '3.png'} alt="landing3" />
						</StyledSwiperSlide>
						<StyledSwiperSlide onClick={() => onClickToExternel('https://bit.ly/designerbannertomakeclothes')}>
							<img src={selectedImage + '4.png'} alt="landing4" />
						</StyledSwiperSlide>
						<StyledSwiperSlide>
							<img src={selectedImage + '5.png'} alt="landing5" />
						</StyledSwiperSlide>
					</Swiper>
				</BannerSection>
			) : (
				<BannerSection className='loading' $loadingWidth={typeof window !== 'undefined' ? window.innerWidth : 0} />
			)}
			<ExplainWrapper
				onClick={() => {
					router.push('/introduce');
				}}
			>
				<TextWrapper>
					<Text1>Arti가 처음이신가요?</Text1>
					<Text2>Arti를 소개합니다.</Text2>
				</TextWrapper>
				<StyledFiChevronRight size="26px" />
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
	cursor: pointer;
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
	font-family: 'Pretendard';
	margin-bottom: 0.5rem;
`;

const Text2 = styled.div`
	width: 100%;
	display: flex;
	color: black;
	font-size: 2rem;
	font-family: 'Pretendard';
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.2rem;
	font-weight: 600;
`;

const StyledFiChevronRight = styled(FiChevronRight)`
	cursor: pointer;
	margin-top: 1.5rem;
`;
