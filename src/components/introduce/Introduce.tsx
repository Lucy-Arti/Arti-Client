'use client';
import React from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Introduce = () => {
	const router = useRouter();

	return (
		<>
			<PointHeader text="Arti 소개" backTo="/" />
			<Wrapper>
				<img src="/img/arti1.png" alt="arti1" />
				<RouteBtn3
					onClick={() => {
						router.push('/wadiz');
					}}
				>
					ARTI X SANO 자세히 보기
				</RouteBtn3>
				<img src="/img/arti2.png" alt="arti2" />
				<BtnWrapper>
					<RouteBtn1
						onClick={() => {
							router.push('/vote');
						}}
					>
						투표하러 가기
					</RouteBtn1>
					<a href="https://bit.ly/introducelandingtomakeclothes" target="_blank" rel="noopener noreferrer">
						<RouteBtn2>디자이너로 함께하기</RouteBtn2>
					</a>
				</BtnWrapper>
			</Wrapper>
		</>
	);
};

export default Introduce;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000;
	img {
		width: 100%;
		height: fit-content;
	}
	a {
		text-decoration: none;
	}
`;

const BtnWrapper = styled.div`
	width: 55rem;
	display: flex;
	position: fixed;
	justify-content: space-evenly;
	bottom: 3rem;
`;

const RouteBtn1 = styled.div`
	display: flex;
	width: 22rem;
	padding: 1.5rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background-color: #a5e865;
	color: white;
	font-size: 1.5rem;
	font-weight: 600;
	cursor: 'pointer';
	z-index: 1;
`;

const RouteBtn2 = styled.div`
	display: flex;
	width: 22rem;
	padding: 1.5rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background-color: #a5e865;
	color: white;
	font-size: 1.5rem;
	font-weight: 600;
	cursor: 'pointer';
	z-index: 1;
`;

const RouteBtn3 = styled.div`
	display: flex;
	width: 46rem;
	padding: 1.5rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.48638rem;
	background: #5ccacb;
	color: black;
	font-size: 2.5rem;
	font-weight: 600;
	cursor: pointer;
	z-index: 3;
	margin-bottom: 3rem;
`;
