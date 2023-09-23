import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './landing.css';
import { EffectCube, Pagination } from 'swiper/modules';

const landingSection = css`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;
const bannerSection = css`
	width: 100%;
	height: 400px;
	border-radius: 5px;
	margin-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LandingSection = () => {
	return (
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
					modules={[EffectCube, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing2" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing3" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing4" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing5" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/voteBanner.png" alt="landing6" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default LandingSection;
