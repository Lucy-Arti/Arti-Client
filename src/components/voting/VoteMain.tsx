import ShareButton from '../common/ShareButton';
import { useEffect, useState } from 'react';
import { getIsVotePossible } from '../../apis/vote';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const VoteMain = () => {
	const [possible, setIsPossible] = useState('defalut');

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const checkPossible = async () => {
				const result = await getIsVotePossible();
				setIsPossible(result);
			};
			checkPossible();
		}
	}, []);

	const route = useRouter();
	const handleClick = (page: string) => {
		if (possible === 'defalut') {
			if (typeof window !== 'undefined') {
				window.location.reload();
			}
		} else if (possible === '투표 가능') {
			console.log('투표가 가능해요');
			route.push(page);
		} else if (possible === '투표 완료') {
			alert('1일 1회 투표가 가능해요. 내일 다시 투표해주세요!');
		} else if (possible === '로그인 필요') {
			alert('로그인을 먼저 해주세요!');
		} else {
			alert('알 수 없는 에러 발생');
		}
	};

	return (
		<VoteSection>
			<BannerSection>
				<img src="/img/votemainbanner.png" loading="lazy" />
			</BannerSection>
			<StartBtn onClick={() => handleClick('vote/userVote')}>투표 시작하기</StartBtn>
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

const ShareSection = styled.div`
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	gap: 10px;
`;
