'use client';

import PointHeader from '../getPoint/PointHeader';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { getBuyListDetail } from '@/apis/pointshop';

type Item = {
	id: number;
	title: string;
	brand: string;
	thumbnail: string;
	image: string;
	detail: string;
	price: number;
	category: string;
	delivery: boolean;
};

type BuyItem = {
	id: number;
	name: string | null;
	address: string | null;
	phoneNumber: string | null;
	delivery: boolean;
	item: Item;
	status: string | null;
	created_at: string;
};

const HistoryDetail = () => {
	const router = useRouter();
	const params = useSearchParams();
	const id = params.get('id');
	const [detail, setDetail] = useState<BuyItem>();

	useEffect(() => {
		const getDetail = async () => {
			const result = await getBuyListDetail(id!);
			setDetail(result.data);
		};
		getDetail();
	}, []);

	if (!detail) {
		return null;
	}

	return (
		<HistoryDetailSection>
			<PointHeader text="구매 정보 확인" backTo="/mypage/shop/history" />
			<StatusText>현재 상태 • {detail?.status}</StatusText>
			<Wrapper>
				<ExplainWrapper>
					<Name>{detail?.name}</Name>
					<Table>
						<tbody>
							<TableRow>
								<TableLabel>구매한 품목</TableLabel>
								<TableValue>{detail?.item?.title}</TableValue>
							</TableRow>
							<TableRow>
								<TableLabel>사용 포인트</TableLabel>
								<TableValue>{detail?.item?.price}P</TableValue>
							</TableRow>
							<TableRow>
								<TableLabel>전화번호</TableLabel>
								<TableValue>{detail?.phoneNumber}</TableValue>
							</TableRow>
							<TableRow>
								<TableLabel>구매한 날짜</TableLabel>
								<TableValue>{detail?.created_at}</TableValue>
							</TableRow>
							<TableRow>
								<TableLabel>배송지</TableLabel>
								<TableValue>{detail?.address}</TableValue>
							</TableRow>
						</tbody>
					</Table>
				</ExplainWrapper>
				<Modify>주소, 전화번호 수정이 필요하신가요?</Modify>
			</Wrapper>
		</HistoryDetailSection>
	);
};

export default HistoryDetail;

const HistoryDetailSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ExplainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	justify-content: center;
	text-align: flex-start;
	width: 80%;
	border-radius: 0.3125rem;
	border: 1px solid var(--grey, #a8a8a8);
	margin-bottom: 4rem;
`;

const StatusText = styled.div`
	width: 80%;
	display: flex;
	color: black;
	font-size: 2rem;
	align-items: center;
	margin-top: 5rem;
	margin-bottom: 1rem;
	font-family: 'Pretendard Variable';
	font-weight: 600;
`;

const Name = styled.div`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	font-weight: 600;
	margin-left: 1rem;
`;

const Modify = styled.div`
	color: #5c5c5c;
	text-align: center;
	font-family: 'Pretendard Variable';
	font-size: 2rem;
	font-weight: 500;
	text-decoration-line: underline;
	cursor: pointer;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

const TableRow = styled.tr``;

const TableLabel = styled.td`
	color: black;
	font-weight: 600;
	font-size: 2rem;
	padding: 1rem;
	width: 30%;
`;

const TableValue = styled.td`
	color: #9e9e9e;
	font-size: 2rem;
	font-weight: 500;
	align-self: flex-start;
	padding: 1rem;
`;
