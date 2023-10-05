import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { css } from '@emotion/react';

import './landing2.css';
import { useEffect, useState } from 'react';
import { ProductType } from '../list/ListView';
import { GetAllProductLists } from '@/apis/list';
import { useNavigate } from 'react-router-dom';

const LandingSection2 = () => {
	const productList: ProductType[] = [];
	const [products, setProducts] = useState<ProductType[]>(productList);
	// const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	const getProducts = async () => {
		const result = await GetAllProductLists();
		if (result === false) {
			// alert('불러오기 오류 발생');
		} else {
			var newArr:ProductType[] = [];
			var preData:ProductType[] = result.data;
			for (let i = 0; i < 7; i++) {
				let randomNum = Math.floor( Math.random() * (preData.length - i) );
    			let element = preData.splice(randomNum, 1);
				newArr = newArr.concat(element);
			}
            // setProducts(products.concat(result.data));
            setProducts(products.concat(newArr));
		}
	};
	useEffect(() => {
		getProducts();
	}, []);

	const landingSection2 = css`
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	`;

	const bannerSection2 = css`
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: end;
	`;
	
	const swipeSection = css`
		width: 100%;
		max-height: 300px;
	`;

	const introduce = css`
		font-size: 2.8rem;
		font-weight: 600;
	`;

	const more = css`
		font-size: 1.7rem;
		font-weight: 300;
		cursor: pointer;
	`;

	const card = css`
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 230px;
		object-fit: cover;
		overflow: hidden;
		border-radius: 11px;
	`;

	const cardImg = css`
		object-fit: cover;
		border-radius: 11px;
		min-height: 230px;
		z-index: 1;
	`;
	const info = css`
		display: flex;
		align-items: end;
		justify-content: center;
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
		border-radius: 11px;
		background: linear-gradient(182deg, rgba(255, 255, 255, 0) 1.97%, rgba(255, 255, 255, 0.9) 75.42%);
	`;
	const pickText = css`
		color: #636363;
		font-size: 1.5rem;
		font-weight: 500;
		@media (max-width: 380px) {
			font-size: 1rem;
		}
		.black {
			color: black;
		}
		.productName {
			color: black;
			font-size: 2rem;
			font-weight: 500;
			line-height: normal;
			@media (max-width: 380px) {
				font-size: 1.5rem;
			}
		}
		img {
			width: 1.7rem;
		}
	`;
	const infoText = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		gap: 3px;
		margin-bottom: 15px;
	`;
	const row = css`
		display: flex;
		align-items: center;
		width: 100%;
	`;

	const settings = {
		spaceBetween: 20,
		navigation: {},
		scrollbar: { draggable: true, el: null },
		slidesPerView: 3,
		// 수정된 부분
	};

	return (
		<div css={landingSection2}>
			<div css={bannerSection2}>
				<div css={introduce}>소개합니다</div>
				<div css={more} onClick={()=>{navigate('productlist')}}>더보기</div>
			</div>
			<div css={swipeSection}>
				<Swiper {...settings} className="mySwiper">
					{products && products.map((product: ProductType, index) => (
						<SwiperSlide key={index}>
							<div css={card} onClick={()=>{navigate(`productlist/${product.clothesId}`)}}>
								<img css={cardImg} src={`${product.preview}`} />
								<div css={info}>
									<div css={infoText}>
										<div css={[row, pickText]}>
											<img src="/img/profileLogo.svg" />
											<span className="black">&nbsp;{product.designerName}&nbsp;</span>
										</div>
										{/* <div css={[row, pickText]}>
											<div className="black productName">{product.clothesName}</div>
										</div> */}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default LandingSection2;
