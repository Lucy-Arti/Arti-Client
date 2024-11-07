import ShareButton from '../common/ShareButton';
import { useEffect, useState } from 'react';
import { getIsVotePossible } from '../../apis/vote';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { CanVoteAtom } from '@/app/recoilContextProvider';

const VoteMain = () => {
	const [possible, setIsPossible] = useState(false);
	const canVoteVal = useRecoilValue(CanVoteAtom);

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const checkPossible = async () => {
				const result = await getIsVotePossible();
				setIsPossible(result.data);
			};
			checkPossible();
		}
	}, []);

	const route = useRouter();
	const handleClick = (page: string) => {
		if (possible) {
			// console.log('투표가 가능해요');
			route.push(page);
		} else {
			alert('1일 1회 투표가 가능해요. 내일 다시 투표해주세요!');
		}
	};

	return (
		<VoteSection>
			<BannerSection>
				<img src="/img/votemainbanner.png" />
			</BannerSection>
			{
				canVoteVal ? 
				<StartBtn onClick={() => handleClick('vote/userVote')}>투표 시작하기</StartBtn>
				:
				<VoteEndBtn>투표 종료</VoteEndBtn>
			}
			<ShareSection>
				<ShareButton where="vote" />
			</ShareSection>
		</VoteSection>
	);
};

export default VoteMain;

const VoteSection = styled.div`
	width: 90%;
	min-height: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10rem;
`;
const BannerSection = styled.div`
	width: 90%;
	height: fit-content;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	img {
		object-fit: contain;
		width: 70%;
	}
`;

const StartBtn = styled.div`
	width: 90%;
	height: 5.25rem;
	border-radius: 5px;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: 500;
	margin-top: 30px;
	cursor: pointer;
`;

// 투표 종료 시 버튼
const VoteEndBtn = styled.div`
	width: 90%;
	height: 5.25rem;
	border-radius: 5px;
	background-color: #979797;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: 500;
	margin-top: 30px;
`;

const ShareSection = styled.div`
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	gap: 10px;
`;
