import { css } from '@emotion/react';
import { AiOutlineClose } from 'react-icons/ai';

interface ZoomImgProps {
	image: string;
	setIsZoomed: (b: boolean) => void;
}

const ZoomImg = ({ image, setIsZoomed }: ZoomImgProps) => {
	const handleClose = () => {
		setIsZoomed(false);
	};
	const zoomSection = css`
		position: absolute;
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
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		@media (min-width: 576px) {
			width: 576px;
		}
	`;

	const imgSection = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 70%;
		height: fit-content;
		object-fit: cover;
		overflow: hidden;
		@media (min-width: 576px) {
			width: 60%;
		}
	`;
	const closedBtn = css`
		width: 100%;
		height: fit-content;
		padding-bottom: 5px;
		display: flex;
		justify-content: end;
	`;
	const imgcss = css`
		width: 100%;
		border-radius: 15px;
	`;

	return (
		<div css={zoomSection}>
			<div css={imgSection}>
				<div css={closedBtn}>
					<AiOutlineClose color="white" size="2.8rem" onClick={handleClose} cursor="pointer" />
				</div>
				<img src={image} css={imgcss} />
			</div>
		</div>
	);
};

export default ZoomImg;
