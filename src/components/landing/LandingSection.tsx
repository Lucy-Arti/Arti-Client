import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './landing.css';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const landingSection = css`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
	overflow-y: hidden;
`;
const bannerSection = css`
	width: 100%;
	height: 80%;
	border-radius: 5px;
	margin-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
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
					modules={[EffectCube, Pagination, Autoplay]}
					className="mySwiper"
					autoplay={{ delay: 2500, disableOnInteraction: false }}
				>
					<SwiperSlide>
						<img src="/img/banner1.png" alt="landing2" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/banner2.png" alt="landing3" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/banner3.png" alt="landing4" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/img/banner4.png" alt="landing5" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default LandingSection;
