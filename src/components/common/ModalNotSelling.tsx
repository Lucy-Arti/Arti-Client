import React from 'react'
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const ModalNotSelling = (props:{setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>, onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;}) => {
    const route = useRouter();
	const totalHeight = document.documentElement.scrollHeight;

    const handleCloseModalWithCmt = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.setModalIsOpen(false);
        props.onClick(e);
    }

    return (
		<ModalSection height={totalHeight}>
			<ModalStyle>
				<Content>
					현재 판매 중이 아니에요.<br/>
					댓글로 디자이너에게<br/>
					구입 의사를 말해주세요!
				</Content>
				<ButtonWrapper>
					<ButtonStyle onClick={() => props.setModalIsOpen(false)} isRightButton={false}>
						확인
					</ButtonStyle>
					<ButtonStyle onClick={(e) => handleCloseModalWithCmt(e)} isRightButton={true}>
						로그인하기
					</ButtonStyle>
				</ButtonWrapper>
			</ModalStyle>
		</ModalSection>
	);
}

export default ModalNotSelling

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
