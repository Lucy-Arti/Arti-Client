import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { css } from '@emotion/react';

import './landing2.css';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

const LandingSection2 = () => {
	const landingSection2 = css`
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: hidden;
	`;

	const bannerSection2 = css`
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;

	const introduce = css`
		font-size: 24px;
		font-weight: 600;
	`;

	const more = css`
		font-size: 16px;
		font-weight: 00;
		line-height: 6px;
	`;
	

	return (
		<div css={landingSection2}>
			<div css={bannerSection2}>
				<div css={introduce}>소개합니달ㄹㄹ</div>
				<div css={more}>더보기</div>
			</div>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				loop={true}
				modules={[EffectCoverflow]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="/img/productsampleimg.png" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/img/productsampleimg.png" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/img/productsampleimg.png" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="/img/productsampleimg.png" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default LandingSection2;
