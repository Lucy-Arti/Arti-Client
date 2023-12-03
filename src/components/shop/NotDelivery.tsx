'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import styled, { css } from 'styled-components';
import DeliveryHeader from './DeliveryHeader';
import { useRouter, useSearchParams } from 'next/navigation';
import { buyItem } from '@/apis/pointshop';

interface BuyData {
	name: string;
	address?: string;
	phoneNumber: string;
	delivery: boolean;
	itemId: number;
}

const NotDelivery = () => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const params = useSearchParams();
	const id = params.get('id');
	const router = useRouter();

	const isButtonActive = name && phoneNumber;

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e.target.value);
	};

	const handleSubmit = async () => {
		if (isButtonActive) {
			const buyData: BuyData = {
				name: name,
				phoneNumber: phoneNumber,
				delivery: true,
				itemId: Number(id),
			};
			try {
				const handleUnload = (e: BeforeUnloadEvent) => {
					e.preventDefault();
				};
				window.removeEventListener('beforeunload', handleUnload);
				await buyItem(buyData);
				router.push('/mypage/shop/success');
			} catch (error) {
				alert('구매에 실패했습니다.');
			}
		}
	};

	useEffect(() => {
		const handleUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
		};

		window.addEventListener('beforeunload', handleUnload);

		return () => {
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);

	return (
		<>
			<DeliveryHeader text="구매 정보 입력" />
			<Wrapper>
				<InputSection>
					<Text1>이름</Text1>
					<Input placeholder="이름을 입력해주세요" value={name} onChange={handleNameChange}></Input>
				</InputSection>
				<InputSection>
					<Text1>전화번호</Text1>
					<Input placeholder="전화번호를 입력해주세요" value={phoneNumber} onChange={handlePhoneNumberChange}></Input>
				</InputSection>
				<RouteBtn disabled={!isButtonActive} onClick={handleSubmit}>
					구매하기
				</RouteBtn>
			</Wrapper>
		</>
	);
};

export default NotDelivery;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;

const InputSection = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-bottom: 4rem;
`;

const Text1 = styled.div`
	width: 90%;
	justify-content: flex-start;
	color: #9e9e9e;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	margin-left: 0.5rem;
	padding-bottom: 1rem;
`;

const Input = styled.input`
	width: 96%;
	padding: 1.2rem;
	font-size: 16px;
	border-radius: 7px;
	border: 1px solid #bdbdbd;
`;

const disabledStyles = css`
	background: #f0f0f0;
	color: #a8a8a8;
	cursor: not-allowed;
`;

const enabledStyles = css`
	background: #a5e865;
	color: black;
	cursor: pointer;
`;
const RouteBtn = styled.div<{ disabled?: boolean }>`
	display: flex;
	width: 90%;
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
`;
