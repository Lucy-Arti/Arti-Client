import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../common/ShareButton';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/utils/state';
import Login from '@/pages/Login';

const VoteMain = () => {
	const isLogged = useRecoilValue(isLoginAtom);

	const loginSection = css`
		width: 100%;
		background-color: white;
	`;
	const margintop =css`
		height: 50px;
	`
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
		return () => {
			navigate(page);
		};
	};
	if (!isLogged) {
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
	} else {
		return (
			<div css={loginSection}>
				<div css={margintop}></div>
				<Login content={`로그인하여 투표에 참여해 보세요!`} />
			</div>
		);
	}
};

export default VoteMain;
