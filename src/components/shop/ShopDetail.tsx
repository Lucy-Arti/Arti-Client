'use client';
import React, { useEffect, useState } from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const ShopDetail = () => {
	const [active, setActive] = useState(false);
	const point = 620;

	useEffect(() => {
		if (point >= 620) {
			setActive(true);
		}
	}, []);

	const handleSubmit = () => {
		console.log('구매 성공');
	};

	return (
		<>
			<PointHeader text="" backTo="/mypage/shop" />
			<Wrapper>
				<img src="/img/product_img.png" />
				<ProductTextWrapper>
					<ProductArti>스타벅스</ProductArti>
					<ProductName>아이스 아메리카노 T</ProductName>
					<Point>620P</Point>
				</ProductTextWrapper>
				<RouteBtn disabled={!active} onClick={handleSubmit}>
					{active ? '구매하기' : '포인트가 부족해요'}
				</RouteBtn>
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
	img {
		width: 100%;
		height: 37rem;
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
`;
