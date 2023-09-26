import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { BiShareAlt } from 'react-icons/bi';

const VoteMain = () => {
	const voteSection = css`
		width: 90%;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rem;
		margin-top: 40px;
	`;
	const bannerSection = css`
		width: 90%;
		height: 250px;
		background-color: #d9d9d9;
		border-radius: 5px;
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const startBtn = css`
		width: 90%;
		height: 5.25rem;
		border-radius: 5px;
		background: linear-gradient(0deg, rgba(122, 210, 42, 0.8) 0%, rgba(122, 210, 42, 0.8) 100%), #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		font-weight: 500;
		margin-top: 30px;
	`;

	const shareSection = css`
		font-size: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
		gap: 10px;
	`;

	const shareBtn = css`
		width: 37px;
		height: 37px;
		border-radius: 18.5px;
		background: linear-gradient(0deg, #e7e7e7 0%, #e7e7e7 100%), #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	`;

	const shareData = {
		title: 'ARTI 아티',
		text: '투표를 통해 세상에 숨겨져 있던 유니크한 옷들을 만나보세요',
		url: 'https://lucy-arti.netlify.app/vote',
	};

	const handleShare = async () => {
		try {
			await navigator.share(shareData);
		} catch (err) {
			alert('지원하지 않는 브라우저입니다.');
		}
	};

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	return (
		<div css={voteSection}>
			<div
				css={css`
					font-size: 3rem;
				`}
			>
				투표 시작문구 시작문구
			</div>
			<div css={bannerSection}>사진</div>
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
				<div>친구에게 공유하기</div>
				<div css={shareBtn} onClick={handleShare}>
					<BiShareAlt size="22px" />
				</div>
			</div>
		</div>
	);
};

export default VoteMain;
