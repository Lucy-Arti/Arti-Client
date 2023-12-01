import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/navigation';

const ModalLogin = (props: { setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const route = useRouter();
	const totalHeight = document.documentElement.scrollHeight;

	return (
		<ModalSection height={totalHeight}>
			<ModalStyle>
				<Content>
					로그인 후<br/>
					저장할 수 있어요
				</Content>
				<ButtonWrapper>
					<ButtonStyle onClick={() => props.setLoginModalIsOpen(false)} isRightButton={false}>
						취소
					</ButtonStyle>
					<ButtonStyle onClick={() => route.push('/mypage')} isRightButton={true}>
						로그인하기
					</ButtonStyle>
				</ButtonWrapper>
			</ModalStyle>
		</ModalSection>
	);
};

export default ModalLogin;

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
	@media (min-width: 576px) {
		width: 576px;
	}
`;

const ModalStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30rem;
	height: fit-content;
	font-size: 1.5rem;
	font-weight: bold;
	background-color: #ffffff;
	border-radius: 5px;
	z-index: 3;
	@media (min-width: 576px) {
		width: 60%;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	border-top: 1px solid #f3f3f3;
`;

const Content = styled.div`
	margin: 4rem 0 4rem 0;
	text-align: center;
`;

const ButtonStyle = styled.div<{ isRightButton: boolean }>`
	display: flex;
	text-align: center;
	justify-content: center;
	width: 49%;
	color: ${(props) => (props.isRightButton ? '#7edf22' : '#535353')};
	font-size: 1.5rem;
	margin: 2rem 0 2rem 0;
	border-left: ${(props) => (props.isRightButton ? '1px solid #f3f3f3' : 'none')};
`;
