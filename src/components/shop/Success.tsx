'use client';

import styled from 'styled-components';

const Success = () => {
	return (
		<>
			<Wrapper>
				<img src="/img/check-circle2.png"></img>
				<Text1>구매가 완료되었어요!</Text1>
				<Text2>24시간 내로 문자 보내드릴게요</Text2>
				<Btn>홈으로</Btn>
			</Wrapper>
		</>
	);
};

export default Success;

const Wrapper = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
	margin-bottom: 2rem;
	img {
		padding-bottom: 3rem;
	}
`;

const Text1 = styled.div`
	color: var(--black, #383838);
	font-weight: 600;
	font-size: 2.7rem;
	font-style: 'Pretendard Variable';
	padding-left: 2rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const Text2 = styled.div`
	color: #9e9e9e;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	padding-left: 2rem;
	padding-bottom: 10rem;
`;

const Btn = styled.div`
	display: flex;
	width: 80%;
	/* margin-left: 1rem; */
	padding: 1.5rem 0rem;
	justify-content: center;
	align-items: center;
	border-radius: 5.625px;
	background: #a5e865;
	color: #000000;
	font-size: 1.75rem;
	font-weight: 600;
	cursor: pointer;
	margin-top: 1.5rem;
`;
