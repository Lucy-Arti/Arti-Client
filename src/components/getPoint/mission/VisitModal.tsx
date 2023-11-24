import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const VisitModal = () => {
	const totalHeight = document.documentElement.scrollHeight;
	return (
        <ModalSection height={totalHeight}>
        <ModalStyle>
          <Content>
            <div className="text1">출석 체크 완료</div>
            <div className="text2">30P</div>
            <div className="mascot-image">
              <StyledImage src="/img/visitmodalmascot.png" alt="출석체크 타이틀 마스코트" fill priority />
            </div>
          </Content>
        </ModalStyle>
      </ModalSection>
	);
};

export default VisitModal;

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
	width: 60%;
	font-size: 1.5rem;
	font-weight: bold;
	background-color: #ffffff;
	border-radius: 5px;
	z-index: 1;
`;

const Content = styled.div`
	display: flex;
    width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
    padding: 6rem 0rem;
	.text1 {
		color: #000;
		text-align: center;
		font-style: normal;
        font-size: 2rem;
		font-weight: 500;
	}
	.text2 {
		color: var(--lime, #6bda01);
		text-align: center;
		font-size: 3.5rem;
		font-weight: 600;
	}
	.mascot-image {
    width: 70%;
  }
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
    max-width: 100%;
`;
