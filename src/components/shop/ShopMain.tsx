'use client';

import React, { useEffect } from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { getProductList } from '@/apis/pointshop';

const point = {
	point: 620,
};

const ShopMain = () => {
	const router = useRouter();
	const discount = [];
	const arti_item = [];
	const giftcorn = [];

	const goHistory = () => {
		router.push('/mypage/shop/history');
	};

	// useEffect(() => {
	// 	const getList = async () => {
	// 		const discountResult = await getProductList('DISCOUNT');
	// 		const artiItemResult = await getProductList('ARTI_ITEM');
	// 		const giftcornResult = await getProductList('GIFTCORN');

	// 		if (discountResult.data) {
	// 			discount.push(...discountResult.data);
	// 		}
	// 		if (artiItemResult.data) {
	// 			arti_item.push(...artiItemResult.data);
	// 		}
	// 		if (giftcornResult.data) {
	// 			giftcorn.push(...giftcornResult.data);
	// 		}
	// 	};
	// 	getList();
	// }, []);

	return (
		<>
			<PointHeader text="포인트 상점" backTo="/mypage" />
			<Wrapper>
				<PointSection>
					<Text1>현재 아티 포인트</Text1>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">{point.point}P</div>
						</UserPoint>
						<HistoryBtn onClick={goHistory}>구매 내역</HistoryBtn>
					</Text2>
				</PointSection>
				<Section>
					<MissionTitle>
						<Title>할인쿠폰</Title>
					</MissionTitle>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>ARTI</ProductArti>
							<ProductName>2000원 할인쿠폰</ProductName>
							<Point>620P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>ARTI</ProductArti>
							<ProductName>4000원 할인쿠폰</ProductName>
							<Point>1240P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
				</Section>
				<Section>
					<MissionTitle>
						<Title>아티 굿즈</Title>
					</MissionTitle>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>ARTI</ProductArti>
							<ProductName>ARTI 키링 SET</ProductName>
							<Point>480P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>ARTI</ProductArti>
							<ProductName>ARTI 리무버블 스티커 SET</ProductName>
							<Point>480P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>ARTI</ProductArti>
							<ProductName>ARTI 50x50 담요</ProductName>
							<Point>780P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
				</Section>
				<Section>
					<MissionTitle>
						<Title>기프티콘</Title>
					</MissionTitle>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>스타벅스</ProductArti>
							<ProductName>아이스 아메리카노</ProductName>
							<Point>120000P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
					<ProductWrapper>
						<img src="/img/product_img.png"></img>
						<ProductTextWrapper>
							<ProductArti>GS25</ProductArti>
							<ProductName>비타500</ProductName>
							<Point>15P</Point>
						</ProductTextWrapper>
					</ProductWrapper>
				</Section>
			</Wrapper>
		</>
	);
};

export default ShopMain;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const PointSection = styled.div`
	height: fit-content;
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	padding-bottom: 3rem;
`;

const HistoryBtn = styled.div`
	border-radius: 5.625px;
	border: 0.563px solid #d9d9d9;
	color: var(--navbar, #888);
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;

const Text1 = styled.div`
	width: 90%;
	justify-content: flex-start;
	color: #9e9e9e;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
`;

const Text2 = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1rem;
`;

const Title = styled.div`
	font-weight: bold;
`;

const UserPoint = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 3rem;
	}
	.text {
		color: var(--black, #383838);
		font-size: 2.875rem;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		padding-left: 1rem;
	}
`;

const Section = styled.div`
	border-top: solid 4px #f5f5f5;
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 3rem;
`;

const MissionTitle = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 500;
	.detail {
		color: #a8a8a8;
		font-weight: 300;
	}
	margin-top: 3rem;
	margin-bottom: 1rem;
`;

const ProductWrapper = styled.div`
	margin-top: 2rem;
	cursor: pointer;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	background: var(--white-100, #fff);
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
	img {
		width: 30%;
		object-fit: cover;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
`;

const ProductTextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const ProductArti = styled.div`
	color: #9e9e9e;
	font-size: 1.5rem;
	font-style: 'Pretendard Variable';
	font-weight: 400;
	padding-left: 2rem;
	padding-top: 1rem;
	padding-bottom: 0.5rem;
`;

const ProductName = styled.div`
	color: var(--black, #383838);
	font-size: 2.04rem;
	font-style: normal;
	font-weight: 700;
	line-height: 20px;
	padding-left: 2rem;
`;

const Point = styled.div`
	color: #a8a8a8;
	text-align: right;
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 600;
	padding: 1rem;
`;
