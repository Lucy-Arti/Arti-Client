import styled from 'styled-components';

const ModalProductUnsaved = () => {
	const totalHeight = document.documentElement.scrollHeight;

	return (
		<ModalSection height={totalHeight}>
			<ModalStyle>상품 저장이 취소됐어요</ModalStyle>
		</ModalSection>
	);
};

export default ModalProductUnsaved;

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
	background-color: #f4f4f4;
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
