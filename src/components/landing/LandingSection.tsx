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
	const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
	const router = useRouter();

	const handleResize = () => {
		setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
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
	const selectedImage = windowWidth >= 576 ? '/img/desktopBanner' : '/img/mobileBanner';

	return (
		<LandingSectionContainer>
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
						<img src={selectedImage + '1.png'} alt="landing1" loading="lazy" />
					</StyledSwiperSlide>
					<StyledSwiperSlide>
						<img src={selectedImage + '2.png'} alt="landing2" onClick={handleClick(`/vote`)} loading="lazy" />
					</StyledSwiperSlide>
					<StyledSwiperSlide>
						<img src={selectedImage + '3.png'} alt="landing3" />
					</StyledSwiperSlide>
					<StyledSwiperSlide>
						<a href="https://arti.channel.io" target="_blank" rel="noopener noreferrer">
							<img src={selectedImage + '4.png'} alt="landing4" />
						</a>
					</StyledSwiperSlide>
				</Swiper>
			</BannerSection>
		</LandingSectionContainer>
	);
};

export default LandingSection;
