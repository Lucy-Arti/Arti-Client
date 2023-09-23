import { WorldcupSample } from '@/types/request';
import { css } from '@emotion/react';
import { useState } from 'react';
import ZoomImg from './ZoomImg';

const DisplayCard = ({ data }: { data: WorldcupSample }) => {
	const [isZoomed, setIsZoomed] = useState(false);

	const handleZoom = () => {
		setIsZoomed((prevIsZoomed) => !prevIsZoomed);
	};

	const card = css`
		width: 45%;
		height: 350px;
		font-size: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	`;
	const contentSection = css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 250px;
		object-fit: cover;
		overflow: hidden;
		border-radius: 5px;
		&:hover {
			border: 3px solid #6bda01;
			background-color: #6bda01;
		}
		@media (min-width: 0px) {
			height: 230px;
		}
		@media (min-width: 470px) {
			height: 250px;
			width: 95%;
		}
	`;
	const productimg = css`
		border-radius: 5px;
		@media (min-width: 0px) {
			height: 100%;
		}
		@media (min-width: 470px) {
			width: 100%;
		}
	`;
	const info = css`
		width: 95%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
	return (
		<div css={card}>
			<div css={contentSection}>
				<img css={productimg} src={data.src} />
			</div>
			<div css={info}>
				<div>{data.product}</div>
				<img
					src="/img/voteSearch.svg"
					css={css`
						cursor: pointer;
					`}
					onClick={handleZoom}
				/>
			</div>
			{isZoomed ? <ZoomImg image={data.src} setIsZoomed={setIsZoomed} /> : ''}
		</div>
	);
};

export default DisplayCard;
