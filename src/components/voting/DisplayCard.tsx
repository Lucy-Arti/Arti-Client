import { MatchData} from '@/types/request';
import { css } from '@emotion/react';
import { useState } from 'react';
import ZoomImg from './ZoomImg';
import { IoSearchOutline } from 'react-icons/io5';

const DisplayCard = ({
	data,
	handleCardClick,
}: {
	data: MatchData;
	handleCardClick: (item: MatchData) => void;
}) => {
	const [isZoomed, setIsZoomed] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleZoom = () => {
		setIsZoomed((prevIsZoomed) => !prevIsZoomed);
	};

	const handleCardClickInternal = () => {
		setIsClicked(true);

		setTimeout(() => {
			setIsClicked(false);
		}, 500);

		handleCardClick(data);
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
		border: ${isClicked ? '3px solid #6bda01' : 'none'};
		background-color: ${isClicked ? '3px solid #6bda01' : 'none'};
		transition:
			border 0.1s ease-in-out,
			background-color 0.1s ease-in-out;
		@media (hover: hover) {
			&:hover {
				border: 3px solid #6bda01;
				background-color: #6bda01;
			}
		}

		@media (min-width: 0px) {
			height: 230px;
		}
		@media (min-width: 470px) {
			width: 95%;
		}
	`;
	const productimg = css`
			object-fit: cover;
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
			<div css={contentSection} onClick={handleCardClickInternal}>
				<img css={productimg} src={data.preview} />
			</div>
			<div css={info}>
				<div>{data.clothesName}</div>
				<IoSearchOutline
					onClick={handleZoom}
					css={css`
						cursor: pointer;
					`}
				/>
			</div>
			{isZoomed ? <ZoomImg image={data.preview} setIsZoomed={setIsZoomed} /> : ''}
		</div>
	);
};

export default DisplayCard;