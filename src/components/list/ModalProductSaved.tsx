import { css } from '@emotion/react';

const ModalProductSaved = () => {
	const totalHeight = document.documentElement.scrollHeight;
	const modalSection = css`
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		top: 0;
		right: 50%;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0%);
		height: ${totalHeight};
		/* background-color: rgba(0, 0, 0, 0.5); */
		z-index: 3;
		@media (min-width: 576px) {
			width: 576px;
		}
	`;
	const modalStyle = css`
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
	return (
		<div css={modalSection}>
			<div css={modalStyle}>상품이 저장됐어요</div>
		</div>
	);
};

export default ModalProductSaved;
