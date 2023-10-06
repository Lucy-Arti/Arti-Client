import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './landing.css';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const landingSection = css`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* margin-bottom: 2rem; */
	overflow-y: hidden;
`;
const bannerSection = css`
	width: 100%;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const LandingSection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	// 화면 너비 576px 이상이면 데스크탑 이미지 사용
	const selectedImage = windowWidth >= 576 ? '/img/desktopBanner' : '/img/mobileBanner';
	return (
		<>
			<div css={landingSection}>
				<div css={bannerSection}>
					<Swiper
						effect={'cube'}
						grabCursor={true}
						cubeEffect={{
							shadow: false,
							slideShadows: false,
							shadowOffset: 0,
							shadowScale: 0,
						}}
						pagination={true}
						modules={[EffectCube, Pagination, Autoplay]}
						className="mySwiper"
						autoplay={{ delay: 2500, disableOnInteraction: false }}
					>
						<SwiperSlide>
							<img src={selectedImage + '1.png'} alt="landing1" loading="lazy" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={selectedImage + '2.png'} alt="landing2" onClick={handleClick(`/vote`)} loading="lazy" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={selectedImage + '3.png'} alt="landing3" loading="lazy" />
						</SwiperSlide>
						<SwiperSlide>
							<a href="https://arti.channel.io" target="_blank">
								<img src={selectedImage + '4.png'} alt="landing4" loading="lazy" />
							</a>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default LandingSection;
