'use client';

import { styled } from 'styled-components';
import { useState } from 'react';
import Modal from './Modal';
import PointHeader from '../getPoint/PointHeader';

const SignUp = () => {
	const [open, setOpen] = useState(false);
	const click = () => {
		setOpen(true);
	};
	return (
		<>
			<PointHeader text="회원가입" backTo="/" />
			<Wrapper>
				<Title>Arti 회원가입/로그인</Title>
				<SignupWrapper>
					<Title2>프로필 정보[필수]</Title2>
					<Line />
					<InputWrapper>
						<Text>이메일</Text>
						<Input placeholder="ex) artiKakao@kakao.com"></Input>
					</InputWrapper>
					<InputWrapper>
						<Text>이름</Text>
						<Input placeholder="ex) 홍길동" />
					</InputWrapper>
					<InputWrapper>
						<Text>출생연도</Text>
						<Input placeholder="ex) 1999" />
					</InputWrapper>
					<InputWrapper>
						<Text>성별</Text>
						<Input placeholder="ex) 남자, 여자" />
					</InputWrapper>
					<InputWrapper>
						<Text>전화번호</Text>
						<Input placeholder="ex) 010-1234-5678" />
					</InputWrapper>
					<Title2>프로필 정보[선택]</Title2>
					<Line />
					<InputWrapper>
						<Text>생일</Text>
						<Input placeholder="ex) 5월 7일" />
					</InputWrapper>
					<InputWrapper>
						<Text>닉네임</Text>
						<Input placeholder="ex) Arti 덕후" />
					</InputWrapper>
				</SignupWrapper>
				<Btn onClick={click}>완료</Btn>
			</Wrapper>
			{open && <Modal />}
		</>
	);
};

export default SignUp;

const Text = styled.div`
	width: 15rem;
	font-size: 15px;
	color: grey;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const InputWrapper = styled.div`
	width: 40rem;
	height: 300px;
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	font-size: 14px;
	height: 20px;
	width: 25rem;
	border-radius: 8px;
	border: 1px solid #888;
	padding: 10px;
	&::placeholder {
		color: darkgray;
		font-size: 13px;
		font-weight: 300;
		opacity: 1;
	}
`;

const Line = styled.div`
	width: 25rem;
	bottom: 0;
	border-bottom: 1px solid #707070;
	margin-bottom: 1rem;
`;

const Title = styled.div`
	font-size: 28px;
	font-weight: 700;
	margin-bottom: 25px;
	color: black;
	font-weight: 800;
`;

const Title2 = styled.div`
	font-size: 24px;
	font-weight: 500;
	margin-top: 4rem;
	margin-bottom: 1rem;
	color: black;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 57rem;
	height: 95rem;
`;

const SignupWrapper = styled.div`
	width: 55rem;
	height: 78rem;
	border: 3px solid #6bda01;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin-bottom: 3rem;
`;

const Btn = styled.button`
	width: 15rem;
	height: 45px;
	background-color: white;
	color: #6bd46b;
	border: 3px solid #6bda01;
	border-radius: 10px;
	display: center;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	margin-left: 1.9rem;
	cursor: pointer;
	&:hover {
		background-color: #6bd46b;
		color: white;
	}
`;
