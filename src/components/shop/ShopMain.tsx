'use client';

import React, { useEffect, useState } from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { getProductList } from '@/apis/pointshop';
import { checkMonthAttendance } from '@/apis/getPoint';

type Category = {
	brand: string;
	category: string;
	delivery: boolean;
	detail: string;
	id: number;
	image: string;
	price: string;
	thumnail: string;
	title: string;
};

const point = {
	point: 620,
};

const ShopMain = () => {
	const router = useRouter();
	const [discount, setDiscount] = useState<Category[]>([]);
	const [arti_item, setArtiItem] = useState<Category[]>([]);
	const [giftcorn, setGiftcorn] = useState<Category[]>([]);
	const [monthVisit, setMonthVisit] = useState<any>();

	const goHistory = () => {
		router.push('/mypage/shop/history');
	};

	useEffect(() => {
		const getList = async () => {
			const discountResult = await getProductList('DISCOUNT');
			const artiItemResult = await getProductList('ARTI_ITEM');
			const giftcornResult = await getProductList('GIFTCORN');

			if (discountResult.data) {
				setDiscount(discountResult.data);
			}
			if (artiItemResult.data) {
				setArtiItem(artiItemResult.data);
			}
			if (giftcornResult.data) {
				setGiftcorn(giftcornResult.data);
			}
		};
		if (localStorage.getItem('access')) {
			const checkTodayAttendance = async () => {
				try {
					const monthResponse = await checkMonthAttendance();
					// 이번 달 출석
					if (monthResponse) {
						setMonthVisit(monthResponse.data);
					} else {
						console.log('월 출석 데이터 패치 실패');
					}
				} catch (error) {
					console.error('Error fetching attendance data:', error);
				}
			};
			checkTodayAttendance();
		} else {
			console.log('Not logged in user');
		}
		getList();
	}, []);

	return (
		<>
			<PointHeader text="포인트 상점" backTo="/mypage" />
			<Wrapper>
				<PointSection>
					<Text1>현재 아티 포인트</Text1>
					<Text2>
						<UserPoint>
							<img src="/img/database.png" />
							<div className="text">{monthVisit?.point}P</div>
						</UserPoint>
						<HistoryBtn onClick={goHistory}>구매 내역</HistoryBtn>
					</Text2>
				</PointSection>
				<Section>
					<MissionTitle>
						<Title>할인쿠폰</Title>
					</MissionTitle>
					{discount.map((item, index) => (
						<ProductWrapper key={index} onClick={() => router.push(`/mypage/shop/detail?id=${item.id}`)}>
							<img src={item.thumnail} alt={item.detail}></img>
							<ProductTextWrapper>
								<ProductArti>{item.brand}</ProductArti>
								<ProductName>{item.title}</ProductName>
								<Point>{item.price}P</Point>
							</ProductTextWrapper>
						</ProductWrapper>
					))}
				</Section>
				<Section>
					<MissionTitle>
						<Title>아티 굿즈</Title>
					</MissionTitle>
					{arti_item.map((item, index) => (
						<ProductWrapper key={index} onClick={() => router.push(`/mypage/shop/detail?id=${item.id}`)}>
							<img src={item.thumnail} alt={item.detail}></img>
							<ProductTextWrapper>
								<ProductArti>{item.brand}</ProductArti>
								<ProductName>{item.title}</ProductName>
								<Point>{item.price}P</Point>
							</ProductTextWrapper>
						</ProductWrapper>
					))}
				</Section>
				<Section>
					<MissionTitle>
						<Title>기프티콘</Title>
					</MissionTitle>
					{giftcorn.map((item, index) => (
						<ProductWrapper key={index} onClick={() => router.push(`/mypage/shop/detail?id=${item.id}`)}>
							<img src={item.thumnail} alt={item.detail}></img>
							<ProductTextWrapper>
								<ProductArti>{item.brand}</ProductArti>
								<ProductName>{item.title}</ProductName>
								<Point>{item.price}P</Point>
							</ProductTextWrapper>
						</ProductWrapper>
					))}
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
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
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
