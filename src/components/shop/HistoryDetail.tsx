'use client';

import PointHeader from '../getPoint/PointHeader';
import React from 'react';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

const sampleData = {
	user: '백은비',
	name: '할인쿠폰',
	date: '23.10.24',
	point: '3000P',
	phoneNum: '01085071301',
	address: '서울시 동작구 어쩌구',
	status: '상품 발송이 완료되었어요!',
};

const HistoryDetail = () => {
	const router = useRouter();

	return (
		<>
			<PointHeader text="구매 정보 확인" backTo="/mypage/shop/history" />
			<StatusText>현재 상태 • {sampleData.status}</StatusText>
			<Wrapper>
				<ExplainWrapper>
					<Name>{sampleData.user}</Name>
					<TextWrapper>
						<Text1>구매한 품목</Text1>
						<Text2>{sampleData.name}</Text2>
					</TextWrapper>
					<TextWrapper>
						<Text1>사용 포인트</Text1>
						<Text2>{sampleData.point}</Text2>
					</TextWrapper>
					<TextWrapper>
						<Text1>전화번호</Text1>
						<Text2>{sampleData.phoneNum}</Text2>
					</TextWrapper>
					<TextWrapper>
						<Text1>구매한 날짜</Text1>
						<Text2>{sampleData.date}</Text2>
					</TextWrapper>
					<TextWrapper>
						<Text1>배송지</Text1>
						<Text2>{sampleData.address}</Text2>
					</TextWrapper>
				</ExplainWrapper>
				<Modify>주소, 전화번호 수정이 필요하신가요?</Modify>
			</Wrapper>
		</>
	);
};

export default HistoryDetail;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid #f9f9f9;
`;

const ExplainWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.7rem;
	padding-top: 2.5rem;
	justify-content: center;
	text-align: flex-start;
	width: 80%;
	height: 25rem;
	border-radius: 0.3125rem;
	border: 1px solid var(--grey, #a8a8a8);
	margin-bottom: 4rem;
`;

const StatusText = styled.div`
	display: flex;
	color: black;
	font-size: 1.5rem;
	align-items: center;
	margin-left: 4.5rem;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	font-family: 'Pretendard Variable';
	font-weight: 600;
`;

const Name = styled.div`
	font-size: 2rem;
	margin-bottom: 1rem;
	font-weight: 600;
	margin-left: 1rem;
`;

const TextWrapper = styled.div`
	display: flex;
	width: 50%;
	padding: 1rem;
	justify-content: space-between;
`;

const TextWrapper2 = styled.div`
	display: flex;
	align-self: flex-start;
	width: 60%;
	padding: 1rem;
`;

const Text1 = styled.div`
	color: black;
	font-family: 'Pretendard Variable';
	font-weight: 600;
	font-size: 1.5rem;
	margin-bottom: 0.2rem;
`;

const Text2 = styled.div`
	color: #9e9e9e;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	font-family: 'Pretendard Variable';
	align-self: flex-start;
`;

const Modify = styled.div`
	color: #5c5c5c;
	text-align: center;
	font-family: 'Pretendard Variable';
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-decoration-line: underline;
	cursor: pointer;
`;
