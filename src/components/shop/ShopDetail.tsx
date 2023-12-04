'use client';
import React, { useEffect, useState } from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProductDetail } from '@/apis/pointshop';
import { checkMonthAttendance } from '@/apis/getPoint';

type Detail = {
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

type Point = {
	total: string;
	point: string;
};

const ShopDetail = () => {
	const params = useSearchParams();
	const id = params.get('id');
	const router = useRouter();
	const [active, setActive] = useState(false);
	const [detail, setDetail] = useState<Detail>();
	const [point, setPoint] = useState<any>();

	useEffect(() => {
		const getDetail = async () => {
			const result = await getProductDetail(id!);
			setDetail(result.data);
			const response = await checkMonthAttendance();
			if (response) {
				setPoint(response.data.point);
				if (response.data.point >= Number(result.data?.price)) {
					setActive(true);
				}
			} else {
				console.log('포인트 데이터 패칭 실패');
			}
		};
		getDetail();
	}, []);

	const handleSubmit = () => {
		if (active) {
			if (detail?.delivery) {
				router.push(`/mypage/shop/delivery?id=${id}`);
			} else if (!detail?.delivery) {
				router.push(`/mypage/shop/notDelivery?id=${id}`);
			}
		} else {
			return false;
		}
	};

	return (
		<>
			<PointHeader text="" backTo="/mypage/shop" />
			<Wrapper>
				<img src={detail?.thumnail} />
				<ProductTextWrapper>
					<ProductArti>{detail?.brand}</ProductArti>
					<ProductName>{detail?.title}</ProductName>
					<Point>
						<img src="/img/databasegreen.png" />
						{detail?.price}P
					</Point>
				</ProductTextWrapper>
				<ImageWrapper>
					<img src={detail?.image} alt={detail?.detail} />
				</ImageWrapper>
				<RouteBtn disabled={!active} onClick={handleSubmit}>
					{active ? '구매하기' : '포인트가 부족해요'}
				</RouteBtn>
				<BtnWrapper />
			</Wrapper>
		</>
	);
};

export default ShopDetail;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	pointer-events: none;
	img {
		width: 100%;
	}
`;

const ProductTextWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ProductArti = styled.div`
	color: #9e9e9e;
	font-size: 2rem;
	font-style: 'Pretendard';
	font-weight: 400;
	width: 90%;
	margin-top: 3rem;
`;

const ProductName = styled.div`
	color: var(--black, #383838);
	font-family: Pretendard;
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 600;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Point = styled.span`
	color: var(--lime, #6bda01);
	font-family: Pretendard;
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 600;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	img {
		width: 2.5rem;
		padding-bottom: 0.3rem;
		padding-right: 1rem;
	}
`;

const BtnWrapper = styled.div`
	width: 57.7rem;
	height: 8.1rem;
	position: fixed;
	bottom: 0rem;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, #fff 100%);
`;

const RouteBtn = styled.div<{ disabled?: boolean }>`
	display: flex;
	width: 47rem;
	padding: 1.5rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background: ${({ disabled }) => (disabled ? '#f0f0f0' : '#a5e865')};
	color: ${({ disabled }) => (disabled ? '#A8A8A8' : '#000000')};
	font-size: 1.75rem;
	font-weight: 600;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
	margin-top: 1.5rem;
	position: fixed;
	bottom: 3rem;
	z-index: 1;
`;

const ImageWrapper = styled.div``;
