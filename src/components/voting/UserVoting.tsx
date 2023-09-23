import { css } from '@emotion/react';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { WorldcupSample, worldcupList } from '@/types/request.d';
import DisplayCard from './DisplayCard';
import { useNavigate } from 'react-router-dom';

const progressProps = [
	{ progress: '8강', percentage: 33, translateX: 33 },
	{ progress: '4강', percentage: 66, translateX: 66 },
	{ progress: '결승', percentage: 100, translateX: 100 },
];

const UserVoting = () => {
	const [progress, setProgress] = useState(0);
	const [round, setRound] = useState({ count: 1, currentRound: 4 });
	const [roundList, setRoundList] = useState<WorldcupSample[]>(worldcupList);
	const [displays, setDisplays] = useState<WorldcupSample[]>([roundList[0], roundList[1]]);
	const [selectedItems, setSelectedItems] = useState<WorldcupSample[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (roundList.length >= 2) {
			setDisplays([roundList[0], roundList[1]]);
		} else {
			if (progress === 2) {
				console.log(selectedItems);
			} else {
				console.log(selectedItems);
				setRoundList(selectedItems);
				setSelectedItems([]);
				setProgress(progress + 1);
				setRound((prevRound) => ({
					...prevRound,
					count: 1,
					currentRound: prevRound.currentRound / 2,
				}));
			}
		}
	}, [selectedItems]);

	const handleCardClick = (item: WorldcupSample) => {
		if (progress === 2) {
			const encodedData = encodeURIComponent(item.product);
			navigate(`../userPick?p=${encodedData}&id=${item.id}`);
		} else {
			setRound((prevRound) => ({
				...prevRound,
				count: prevRound.count + 1,
			}));
		}
		setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
		setRoundList((prevRoundList) => prevRoundList.slice(2));
	};

	const userVoteSection = css`
		display: flex;
		width: 90%;
		height: fit-content;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;
	const cardSection = css`
		display: flex;
		width: 90%;
		height: 33rem;
		justify-content: space-around;
		align-items: center;
		object-fit: contain;
		margin-top: 25px;
	`;

	const textSection = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		@media (min-width: 0px) {
			margin-top: 54px;
			margin-bottom: 60px;
		}
		@media (min-width: 576px) {
			margin-top: 54px;
			margin-bottom: 40px;
		}
	`;

	const text = css`
		color: black;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		.pink {
			color: #ff4b8c;
		}
		.column {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	`;

	return (
		<div css={userVoteSection}>
			<ProgressBar progressprops={progressProps[progress]} />
			<div css={textSection} className="gap">
				<div css={text}>
					<div className="pink">{round.count}</div>&nbsp;/&nbsp;{round.currentRound}
				</div>
				<div css={text}>
					<div className="column">
						<div>둘 중 더 마음에 드는 옷을</div>
						<div>골라주세요</div>
					</div>
				</div>
			</div>

			<div css={cardSection}>
				{displays.map((item, index) => (
					<DisplayCard key={index} data={item} handleCardClick={handleCardClick} />
				))}
			</div>
		</div>
	);
};

export default UserVoting;
