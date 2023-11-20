'use client';

import PointHeader from '../getPoint/PointHeader';
import React from 'react';
import { styled } from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const sampleData = {
	name: '할인쿠폰',
	date: '23.10.24',
};

const BuyHistory = () => {
	const router = useRouter();
	const showDetail = () => {
		router.push('/mypage/shop/history/detail');
	};
	return (
		<>
			<PointHeader text="구매 내역" backTo="/mypage/shop" />
			<Wrapper>
				<ExplainWrapper>
					<TextWrapper>
						<Text1>{sampleData.name} 구매</Text1>
						<Text2>{sampleData.date}</Text2>
					</TextWrapper>
					<StyledFiChevronRight size="26px" onClick={showDetail} />
				</ExplainWrapper>
			</Wrapper>
		</>
	);
};

export default BuyHistory;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid #f9f9f9;
	padding: 1.5rem;
`;

const ExplainWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text1 = styled.div`
	width: 100%;
	display: flex;
	color: black;
	font-size: 2rem;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.2rem;
	font-family: 'Pretendard Variable';
`;

const Text2 = styled.div`
	width: 100%;
	justify-content: flex-start;
	color: #9e9e9e;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	font-family: 'Pretendard Variable';
`;

const StyledFiChevronRight = styled(FiChevronRight)`
	cursor: pointer;
	margin-top: 0.4rem;
	margin-right: 3rem;
`;
