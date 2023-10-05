import { css } from '@emotion/react';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { MatchData } from '@/types/request.d';
import DisplayCard from './DisplayCard';
import { useNavigate } from 'react-router-dom';
import { getVoteDataList } from '@/apis/vote';

const progressProps = [
	{ progress: '8강', percentage: 33, translateX: 33 },
	{ progress: '4강', percentage: 66, translateX: 66 },
	{ progress: '결승', percentage: 100, translateX: 100 },
];

interface BodyType {
	fourth: MatchData[]; // 4강까지 올라온 아이템 리스트 (number 배열)
	second: MatchData[]; // 2강까지 올라온 아이템의 ID (number)
	first: MatchData[]; // 최종 선택된 아이템의 ID (number)
}

const UserVoting = () => {
	const [progress, setProgress] = useState(0);
	const [round, setRound] = useState({ count: 0, currentRound: 4 });
	const [roundList, setRoundList] = useState<MatchData[]>();
	const [displays, setDisplays] = useState<MatchData[]>();
	const [selectedItems, setSelectedItems] = useState<MatchData[]>([]);
	const [isCardClickable, setIsCardClickable] = useState(true);
	const [apiBody, setBody] = useState<BodyType>({
		fourth: [],
		second: [],
		first: [],
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (!roundList) {
			if (localStorage.getItem('access')) {
				const getWorldcupList = async () => {
					const result = await getVoteDataList();
					setRoundList(result.data.data);
				};
				getWorldcupList();
			}
		} else {
			if (roundList.length >= 2) {
				if (round.count !== 0) {
					setTimeout(() => {
						setDisplays([roundList[0], roundList[1]]);
					}, 500);
				} else {
					setDisplays([roundList[0], roundList[1]]);
				}
			} else {
				if (progress === 2) {
					console.log(selectedItems);
					setBody((prevBody) => ({
						...prevBody,
						first: selectedItems, // 4강까지 올라온 아이템 리스트 업데이트
					}));
				} else {
					console.log(selectedItems);
					if (progress === 0) {
						setBody((prevBody) => ({
							...prevBody,
							fourth: selectedItems, // 4강까지 올라온 아이템 리스트 업데이트
						}));
					} else if (progress === 1) {
						setBody((prevBody) => ({
							...prevBody,
							second: selectedItems, // 2강까지 올라온 아이템의 첫 번째 ID 업데이트
						}));
					}
					setRoundList(selectedItems);
					setSelectedItems([]);
					setProgress(progress + 1);
					setTimeout(() => {
						setRound((prevRound) => ({
							...prevRound,
							count: 0,
							currentRound: prevRound.currentRound / 2,
						}));
					}, 500);
				}
			}
		}
	}, [selectedItems, roundList]);

	useEffect(() => {
		console.log(apiBody);
	  }, [apiBody]);

	const handleCardClick = (item: MatchData) => {
		if (!isCardClickable) {
			return; // 선택 불가능한 상태라면 클릭 무시
		}
		setIsCardClickable(false);
		if (progress === 2) {
			setRound((prevRound) => ({
				...prevRound,
				count: prevRound.count + 1,
			}));
			const encodedData = encodeURIComponent(item.clothesName);
			setTimeout(() => {
				navigate(`../userPick?p=${encodedData}&id=${item.clothesId}`);
			}, 500);
		
		} else {
			setRound((prevRound) => ({
				...prevRound,
				count: prevRound.count + 1,
			}));
		}
		setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
		setTimeout(() => {
			setIsCardClickable(true);
		}, 500);
		setRoundList((prevRoundList) => prevRoundList?.slice(2));
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
				{displays?.map((item, index) => <DisplayCard key={index} data={item} handleCardClick={handleCardClick} />)}
			</div>
		</div>
	);
};

export default UserVoting;
