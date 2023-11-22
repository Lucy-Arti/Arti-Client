import { styled } from 'styled-components';

const CancelModal = () => {
	const onClick = () => {};

	return (
		<Wrapper>
			<ModalSection>
				<Title>구매를 완료하지 못했어요.</Title>
				<Title>이대로 종료할까요?</Title>
				<Btn onClick={onClick}>취소</Btn>
				<Btn onClick={onClick}>종료하기</Btn>
			</ModalSection>
		</Wrapper>
	);
};

export default CancelModal;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const BtnWrapper = styled.div``;

const Btn = styled.div`
	width: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 6.5%;
	height: 52px;
	background-color: #ffd5d5;
	color: black;
	border-radius: 30px;
	background: linear-gradient(180deg, #c5e9ff 0%, #6bda01 100%);
	font-size: 2.3rem;
	font-weight: 600;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	color: var(--dark-gray, #585858);
`;

const ModalSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	height: 40%;
	border-radius: 20px;
	padding: 40px 20px;
	background-color: white;
	font-size: 16px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	margin-top: 3rem;
	position: absolute;
`;
