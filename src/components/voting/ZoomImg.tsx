import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

interface ZoomImgProps {
	image: string;
	setIsZoomed: (b: boolean) => void;
}

const ZoomImg = ({ image, setIsZoomed }: ZoomImgProps) => {
	const handleClose = () => {
		setIsZoomed(false);
	};

	return (
		<ZoomSection>
			<ImgSection>
				<ClosedBtn>
					<AiOutlineClose color="white" size="2.8rem" onClick={handleClose} cursor="pointer" />
				</ClosedBtn>
				<img src={image} />
			</ImgSection>
		</ZoomSection>
	);
};

export default ZoomImg;

const ZoomSection = styled.div`
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

const ImgSection = styled.div`
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
	img {
		width: 100%;
		border-radius: 15px;
	}
`;
const ClosedBtn = styled.div`
	width: 100%;
	height: fit-content;
	padding-bottom: 5px;
	display: flex;
	justify-content: end;
`;
