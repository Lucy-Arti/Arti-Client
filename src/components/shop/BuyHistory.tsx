'use client';

import PointHeader from '../getPoint/PointHeader';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { getBuyList } from '@/apis/pointshop';

interface Item {
	id: number;
	title: string;
	brand: string;
	thumbnail: string;
	image: string;
	detail: string;
	price: number;
	category: string;
	delivery: boolean;
}

interface BuyItem {
	id: number;
	name: string | null;
	address: string | null;
	phoneNumber: string | null;
	delivery: boolean;
	item: Item;
	status: string | null;
	created_at: string;
}

type BuyList = BuyItem[];

const BuyHistory = () => {
	const router = useRouter();
	const [buylist, setBuylist] = useState<BuyList>([]);

	useEffect(() => {
		const getList = async () => {
			try {
				const result = await getBuyList();
				setBuylist(result.data);
			} catch (error) {
				throw error;
			}
		};
		getList();
	}, []);

	return (
		<>
			<PointHeader text="구매 내역" backTo="/mypage/shop" />
			<Wrapper>
				{buylist.map((item) => (
					<ExplainWrapper key={item.id}>
						<TextWrapper>
							<Text1>{item.item.title} 구매</Text1>
							<Text2>{item.created_at}</Text2>
						</TextWrapper>
						<StyledFiChevronRight
							size="26px"
							onClick={() => {
								router.push(`/mypage/shop/history/detail?id=${item.id}`);
							}}
						/>
					</ExplainWrapper>
				))}
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
	padding: 1.5rem;
`;

const ExplainWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 1.5rem;
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
