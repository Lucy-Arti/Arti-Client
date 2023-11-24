'use client';
import React from 'react';
import PointHeader from '../getPoint/PointHeader';
import styled from 'styled-components';

const Introduce = () => {
	return (
		<>
			<PointHeader text="Arti 소개" backTo="/" />
			<Wrapper>
				<BtnWrapper>
					<RouteBtn1>투표하러 가기</RouteBtn1>
					<RouteBtn2>디자이너로 함께하기</RouteBtn2>
				</BtnWrapper>
			</Wrapper>
		</>
	);
};

export default Introduce;

const Wrapper = styled.div`
	width: 100%;
	/* height: fit-content; */
	height: 98vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
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
	width: 30%;
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
