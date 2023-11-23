'use client';
import React, { useEffect, useState } from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProductDetail } from '@/apis/pointshop';

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

const ShopDetail = () => {
	const params = useSearchParams();
	const id = params.get('id');
	const router = useRouter();
	const [active, setActive] = useState(false);
	const [detail, setDetail] = useState<Detail[]>([]);
	const point = 620;

	useEffect(() => {
		const getDetail = async () => {
			const result = await getProductDetail(id!);
			setDetail(result.data);
		};
		if (point >= 620) {
			setActive(true);
		}
		getDetail();
	}, []);

	const handleSubmit = () => {
		router.push(`/mypage/shop/detail?=${id}/delivery`);
	};

	return (
		<>
			<PointHeader text="" backTo="/mypage/shop" />
			{detail.map((item, index) => {
				return (
					<Wrapper key={index}>
						<img src={item.thumnail} />
						<ProductTextWrapper>
							<ProductArti>{item.brand}</ProductArti>
							<ProductName>{item.title}</ProductName>
							<Point>{item.price}</Point>
						</ProductTextWrapper>
						<ImageWrapper>
							<img src={item.image} alt={item.detail} />
						</ImageWrapper>
						<RouteBtn disabled={!active} onClick={handleSubmit}>
							{active ? '구매하기' : '포인트가 부족해요'}
						</RouteBtn>
						<BtnWrapper />
					</Wrapper>
				);
			})}
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
	img {
		width: 100%;
		height: fit-content;
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
	margin-top: 1.5rem;
	position: fixed;
	bottom: 3rem;
	z-index: 1;
`;

const ImageWrapper = styled.div`
	width: 100%;
	img {
		height: fit-content;
	}
`;
