import { userEmailAtom, userNameAtom } from '@/utils/state';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const MypageUpperContent = () => {
	const userName = useRecoilValue(userNameAtom);
	const userEmail = useRecoilValue(userEmailAtom);
	const randomNum = Math.random() * 4;
	const randomNumFloor = Math.floor(randomNum);
	const navigate = useNavigate();
	const columnSort = css`
		display: flex;
		width: 90%;
		flex-direction: column;
	`;
	const profileWrapper = css`
		display: flex;
		margin: 2.5rem 0 4rem 1rem;
		align-items: center;
	`;
	const BtnWrapper = css`
		display: flex;
		filter: drop-shadow(0 0 0.3rem #9e9e9e);
		background-color: white;
		border-radius: 15px;
		justify-content: center;
		align-items: center;
		img {
			width: 30%;
		}
	`;
	const btnStyle = css`
		display: flex;
		flex-basis: 33%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* background-color: white; */
		gap: 1.5rem;
		padding: 3rem 0 3rem 0;
		&:hover {
			cursor: pointer;
		}
		&.start {
			border-right: 2px solid #f3f3f3;
		}
		&.last {
			border-left: 2px solid #f3f3f3;
		}
	`;

	return (
		<div css={columnSort}>
			<div css={profileWrapper}>
				<img width="20%" src={`/img/myProfile-${randomNumFloor}.png`} loading="lazy" />
				<div
					css={css`
						display: flex;
						flex-direction: column;
						margin-left: 2rem;
					`}
				>
					<div
						css={css`
							font-size: 3rem;
							font-weight: bolder;
							margin-bottom: 1rem;
						`}
					>
						{userName}
					</div>
					<div
						css={css`
							font-size: 1.5rem;
						`}
					>
						{userEmail}
					</div>
				</div>
			</div>
			<div css={BtnWrapper}>
				<div
					className="start"
					css={btnStyle}
					onClick={() => {
						navigate('voted');
					}}
				>
					<img src="/img/mypageVoteBtn.png" loading="lazy" />
					<div
						css={css`
							font-size: 1.5rem;
							font-weight: 600;
						`}
					>
						투표한 옷
					</div>
				</div>
				<div
					css={btnStyle}
					onClick={() => {
						navigate('recent');
					}}
				>
					<img src="/img/mypageRecentBtn.png" />
					<div
						css={css`
							font-size: 1.5rem;
							font-weight: 600;
						`}
					>
						최근 본 옷
					</div>
				</div>
				<div
					className="last"
					css={btnStyle}
					onClick={() => {
						navigate('marked');
					}}
				>
					<img src="/img/mypageHeart.png" loading="lazy" />
					<div
						css={css`
							font-size: 1.5rem;
							font-weight: 600;
						`}
					>
						저장한 옷
					</div>
				</div>
			</div>
		</div>
	);
};

export default MypageUpperContent;
