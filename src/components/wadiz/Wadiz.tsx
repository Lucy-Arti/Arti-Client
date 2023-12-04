'use client';

import React from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Wadiz = () => {
	const router = useRouter();

	return (
		<>
			<PointHeader text="ARTI X 신진 디자이너 SANO" backTo="/" />
			<Wrapper>
				<img src="/img/wadiz1.png" alt="landing5" />
				<a href="https://www.wadiz.kr/web/campaign/detail/247662" target="_blank" rel="noopener noreferrer">
					<RouteBtn>판매중인 옷 구경하기</RouteBtn>
				</a>
				<img src="/img/wadiz2.png" alt="landing5" />
				<Wrapper2>
					<Text
						onClick={() => {
							router.push('/introduce');
						}}
					>
						더 자세한 아티 소개가 궁금하신가요? (클릭)
					</Text>
					<a href="https://bit.ly/greenbannertomakeclothes" target="_black" rel="noopener noreferrer">
						<Text>아티와 함께 옷을 제작해보고 싶으신가요? (클릭)</Text>
					</a>
					<a href="https://bit.ly/greenbannertorecruit" target="_black" rel="noopener noreferrer">
						<Text>아티 팀에 합류하고 싶으신가요? (클릭)</Text>
					</a>
				</Wrapper2>
			</Wrapper>
		</>
	);
};

export default Wadiz;

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	background-color: #121212;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: fit-content;
	}
	a {
		text-decoration: none;
	}
`;

const RouteBtn = styled.div`
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
	cursor: 'pointer';
	z-index: 3;
	margin-bottom: 3rem;
`;

const Wrapper2 = styled.div`
	width: 100%;
	height: 15rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #121212;
	padding: 5rem 0rem;
	bottom: 3rem;
`;

const Text = styled.div`
	color: var(--white, #fff);
	text-align: center;
	font-family: 'Pretendard';
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.375rem;
	letter-spacing: -0.05613rem;
	margin-bottom: 1rem;
	cursor: pointer;
`;
