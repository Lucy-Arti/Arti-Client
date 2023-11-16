'use client';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { MatchData } from '@/types/request.d';
import DisplayCard from './DisplayCard';
import { getVoteDataList, postMatchList } from '@/apis/vote';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const progressProps = [
	{ progress: '8강', percentage: 33, translateX: 33 },
	{ progress: '4강', percentage: 66, translateX: 66 },
	{ progress: '결승', percentage: 100, translateX: 100 },
];

interface BodyType {
	fourth: number[]; // 4강까지 올라온 아이템 리스트 (number 배열)
	second: number[]; // 2강까지 올라온 아이템의 ID (number)
	first: number; // 최종 선택된 아이템의 ID (number)
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
		first: 0,
	});
	const route = useRouter();

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
					const clothesIdArray = selectedItems.map((item) => item.clothesId);
					setBody((prevBody) => ({
						...prevBody,
						first: clothesIdArray[0], // 4강까지 올라온 아이템 리스트 업데이트
					}));
				} else {
					console.log(selectedItems);
					const clothesIdArray = selectedItems.map((item) => item.clothesId);
					if (progress === 0) {
						setBody((prevBody) => ({
							...prevBody,
							fourth: clothesIdArray, // 4강까지 올라온 아이템 리스트 업데이트
						}));
					} else if (progress === 1) {
						const clothesIdArray = selectedItems.map((item) => item.clothesId);
						setBody((prevBody) => ({
							...prevBody,
							second: clothesIdArray, // 2강까지 올라온 아이템의 첫 번째 ID 업데이트
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
		if (apiBody.first) {
			const body = {
				fourth: apiBody.fourth.filter((id) => !apiBody.second.includes(id)),
				second: apiBody.second.filter((id) => id !== apiBody.first)[0],
				first: apiBody.first,
			};
			// console.log(body);
			postMatchList(body)
				.then((response) => {
					console.log('투표결과 전송 완료:', response.data);
					const encodedData = encodeURIComponent(selectedItems[0].clothesName);
					setTimeout(() => {
						// route.push(`userPick?p=${encodedData}&id=${selectedItems[0].clothesId}`);
					}, 500);
				})
				.catch((error) => {
					// 로그인하고 이미 투표했는데 url 접근으로 들어온 사람들
					console.log(error);
					alert('1일 1회 투표가 가능해요. 내일 다시 투표해주세요!');
					setTimeout(() => {
						// route.push(`/`);
					}, 500);
				});
		}
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

	return (
		<Wrapper>
			<UserVoteSection>
				<ProgressBar progressprops={progressProps[progress]} />
				<TextSection className="gap">
					<Text>
						<div className="pink">{round.count}</div>&nbsp;/&nbsp;{round.currentRound}
					</Text>
					<Text>
						<div className="column">
							<div>둘 중 더 마음에 드는 옷을</div>
							<div>골라주세요</div>
						</div>
					</Text>
				</TextSection>

				<CardSection>
					{displays?.map((item, index) => <DisplayCard key={index} data={item} handleCardClick={handleCardClick} />)}
				</CardSection>
			</UserVoteSection>
		</Wrapper>
	);
};

export default UserVoting;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
const UserVoteSection = styled.div`
	display: flex;
	width: 90%;
	height: fit-content;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const CardSection = styled.div`
	display: flex;
	width: 90%;
	height: 33rem;
	justify-content: space-around;
	align-items: center;
	object-fit: contain;
	margin-top: 25px;
`;

const TextSection = styled.div`
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

const Text = styled.div`
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
