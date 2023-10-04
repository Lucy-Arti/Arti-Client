import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../common/ShareButton';
import { useEffect, useState } from 'react';
import { getIsVotePossible } from '../../apis/vote';

const VoteMain = () => {
	const [possible, setIsPossible] = useState('');

	useEffect(() => {
		if (localStorage.getItem('access')) {
			const checkPossible = async () => {
				const result = await getIsVotePossible();
				setIsPossible(result);
			};
			checkPossible();
		}
	});

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

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		if (possible==='투표 가능') {
			return () => {
				navigate(page);
			};
		} else if(possible ==='투표 불가능'){
			alert('오늘 투표를 완료했습니다!');
		} else if(possible ==='로그인 필요'){
			alert('로그인을 먼저 해주세요!');
		} else {
			alert('뭔 오류임?');
		}
	};

	return (
		<div css={voteSection}>
			<div css={bannerSection}>
				<img css={img} src="/img/votemainbanner.png" />
			</div>
			<div
				css={[
					startBtn,
					css`
						cursor: pointer;
					`,
				]}
				onClick={handleClick('userVote')}
			>
				투표 시작하기
			</div>
			<div css={shareSection}>
				<ShareButton />
			</div>
		</div>
	);
};

export default VoteMain;
