import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components';

const ModalCannotEdit = (props:{canEdit:boolean, setCanEdit:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const totalHeight = document.documentElement.scrollHeight;
	return (
		<ModalSection height={totalHeight}>
			<ModalStyle>본인의 댓글만 수정할 수 있어요</ModalStyle>
		</ModalSection>
	);
}

export default ModalCannotEdit

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	/* background-color: rgba(0, 0, 0, 0.5); */
	z-index: 3;
	@media (min-width: 576px) {
		width: 576px;
	}
`;
const ModalStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30rem;
	height: fit-content;
	font-size: 1.5rem;
	font-weight: bold;
	color: #ffffff;
	background-color: #464646;
	border-radius: 5px;
	opacity: 90%;
	z-index: 1;
	padding: 1rem 0 1rem 0;
	/* position: absolute; */
	margin-bottom: 7rem;
	@media (min-width: 576px) {
		width: 60%;
	}
`;