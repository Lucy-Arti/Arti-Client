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
	height: fit-content;
	border-radius: 5px;
	margin-top: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const square = css`
	width: 100%;
	height: 285px;
	border-radius: 5px;
	background-color: rgba(172, 253, 96, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: grey;
`;

const square2 = css`
	width: 100%;
	height: 285px;
	border-radius: 5px;
	background-color: rgba(189, 244, 137, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: grey;
`;

const square3 = css`
	width: 100%;
	height: 285px;
	border-radius: 5px;
	background-color: rgba(137, 243, 39, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: grey;
`;

const square4 = css`
	width: 100%;
	height: 285px;
	border-radius: 5px;
	background-color: rgba(188, 244, 135, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: grey;
`;

const square5 = css`
	width: 100%;
	height: 285px;
	border-radius: 5px;
	background-color: rgba(117, 237, 4, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: grey;
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
						<div css={square}>Landing Banner</div>
					</SwiperSlide>
					<SwiperSlide>
						<div css={square2}>Landing Banner2</div>
					</SwiperSlide>
					<SwiperSlide>
						<div css={square3}>Landing Banner3</div>
					</SwiperSlide>
					<SwiperSlide>
						<div css={square4}>Landing Banner4</div>
					</SwiperSlide>
					<SwiperSlide>
						<div css={square5}>Landing Banner5</div>
					</SwiperSlide>
					{/* <SwiperSlide>
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
					</SwiperSlide> */}
				</Swiper>
			</div>
		</div>
	);
};

export default LandingSection;
