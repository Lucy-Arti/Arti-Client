import { MatchData } from '@/types/request';
import { useState } from 'react';
import ZoomImg from './ZoomImg';
import { IoSearchOutline } from 'react-icons/io5';
import styled from 'styled-components';

const DisplayCard = ({ data, handleCardClick }: { data: MatchData; handleCardClick: (item: MatchData) => void }) => {
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

	return (
		<Card>
			<ContentSection $isClicked={isClicked} onClick={handleCardClickInternal}>
				<img src={data.preview} />
			</ContentSection>
			<Info>
				<Infotext>{data.clothesName}</Infotext>
				<IoSearchOutline className="iosearchoutline" onClick={handleZoom} />
			</Info>
			{isZoomed ? <ZoomImg image={data.preview} setIsZoomed={setIsZoomed} /> : ''}
		</Card>
	);
};

export default DisplayCard;

const Card = styled.div`
	width: 45%;
	height: 350px;
	font-size: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;
const ContentSection = styled.div<{$isClicked:boolean}>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 250px;
	object-fit: cover;
	overflow: hidden;
	border-radius: 5px;
	border: ${(props) => (props.$isClicked ? '3px solid #6bda01' : 'none')};
	background-color: ${(props) => (props.$isClicked ?  '3px solid #6bda01' : 'none')};
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
	img {
		object-fit: cover;
		border-radius: 5px;
		@media (min-width: 0px) {
			height: 100%;
		}
		@media (min-width: 470px) {
			width: 100%;
		}
	}
`;

const Info = styled.div`
	width: 95%;
	display: flex;
	align-items: start;
	justify-content: space-between;
	.iosearchoutline {
		cursor: pointer;
		width: 10%;
		padding-top: 3px;
	}
`;
const Infotext = styled.div`
	width: 85%;
`;
