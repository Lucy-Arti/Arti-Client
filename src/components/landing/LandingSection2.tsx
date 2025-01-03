'use client';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './landing2.css';
import { useEffect, useState } from 'react';
import { ProductType } from '@/types/request';
import { GetAllProductLists } from '@/apis/list';
import { useRouter } from 'next/navigation';
import DesignerLandingSkeleton from './DesignerLandingSkeleton';
import Image from 'next/image';

const LandingSectionContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
`;

const BannerSection = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: end;
`;

const SwipeSection = styled.div`
	width: 100%;
	max-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Introduce = styled.div`
	font-size: 2.8rem;
	font-weight: 600;
`;

const More = styled.div`
	font-size: 1.7rem;
	font-weight: 300;
	cursor: pointer;
`;

const Card = styled.div`
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

const CardDiv = styled.div`
	object-fit: cover !important;
	border-radius: 11px;
	min-height: 230px;
	z-index: 1;
`;

const Info = styled.div`
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

const PickText = styled.div`
	color: #636363;
	font-size: 1.5rem;
	font-weight: 500;

	&.black {
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

	@media (max-width: 380px) {
		font-size: 1rem;
	}
`;

const InfoText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	gap: 3px;
	margin-bottom: 15px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 1.5rem;
	&.black {
		color: black;
	}
	img {
		width: 1.7rem;
	}
`;

const settings = {
	spaceBetween: 20,
	navigation: {},
	scrollbar: { draggable: true, el: null },
	slidesPerView: 3,
	// 수정된 부분
};

const LandingSection2 = () => {
	const productList: ProductType[] = [];
	const [products, setProducts] = useState<ProductType[] | undefined>(undefined);
	const router = useRouter();

	const getProducts = async () => {
		const result = await GetAllProductLists();
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			var newArr: ProductType[] = [];
			var preData: ProductType[] = result.data;
			for (let i = 0; i < 7; i++) {
				let randomNum = Math.floor(Math.random() * (preData.length - i));
				let element = preData.splice(randomNum, 1);
				newArr = newArr.concat(element);
			}
			setProducts(productList.concat(newArr));
		}
	};
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<LandingSectionContainer>
			<BannerSection>
				<Introduce>Designers</Introduce>
				<More
					onClick={() => {
						router.push('productlist');
					}}
				>
					더보기
				</More>
			</BannerSection>
			<SwipeSection>
				{products ? (
					<Swiper {...settings} className="mySwiper">
						{products.map((product: ProductType, index) => (
							<SwiperSlide key={index}>
								<Card
									onClick={() => {
										router.push(`productlist/product?key=${product.clothesId}`);
									}}
								>
									<Image
										src={`${product.preview}`}
										alt={`${product.type === 'product' ? '제품' : '일러스트'} 이미지, ${
											product.designerName
										} 디자이너의 ${product.clothesName}`}
										width={400}
										height={230}
										style={{
											objectFit: 'cover',
											width: '100%',
											height: '230px',
											borderRadius: '11px',
											minHeight: '230px',
											zIndex: 1,
										}}
									/>

									<Info>
										<InfoText>
											<Row>
												<img src="/img/profileLogo.svg" />
												<span className="black">&nbsp;{product.designerName}&nbsp;</span>
											</Row>
										</InfoText>
									</Info>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<DesignerLandingSkeleton />
				)}
			</SwipeSection>
		</LandingSectionContainer>
	);
};

export default LandingSection2;
