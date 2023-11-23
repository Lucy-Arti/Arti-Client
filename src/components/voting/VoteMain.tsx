import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../common/ShareButton';
import { useEffect, useState } from 'react';
import { getIsVotePossible } from '../../apis/vote';

const VoteMain = () => {
	const [possible, setIsPossible] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const checkPossible = async () => {
				const result = await getIsVotePossible();
				setIsPossible(result.data);
			};
			checkPossible();
		}
	}, []);

	const voteSection = css`
		width: 90%;
		min-height: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10rem;
	`;
	const bannerSection = css`
		width: 90%;
		height: fit-content;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
	`;

	const startBtn = css`
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
	`;

	const img = css`
		object-fit: contain;
		width: 70%;
	`;

	const shareSection = css`
		font-size: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
		gap: 10px;
	`;
	const navigate = useNavigate();
	const handleClick = (page: string) => {
		if (possible) {
			console.log('투표가 가능해요');
			navigate(page);
		} else {
			alert('1일 1회 투표가 가능해요. 내일 다시 투표해주세요!');
		}
	};

	return (
		<div css={voteSection}>
			<div css={bannerSection}>
				<img css={img} src="/img/votemainbanner.png" loading="lazy" />
			</div>
			<div
				css={[
					startBtn,
					css`
						cursor: pointer;
					`,
				]}
				onClick={() => handleClick('userVote')}
			>
				투표 시작하기
			</div>
			<div css={shareSection}>
				<ShareButton where="vote" />
			</div>
		</div>
	);
};

export default VoteMain;
