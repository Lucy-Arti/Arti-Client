import { css } from '@emotion/react';
import { RankingSample } from '../../types/request.d';
import { useState } from 'react';

const RankingCard = ({ data, index }: { data: RankingSample; index: number }) => {
	const [markState, setMarkState] = useState(data.mark);
	const [like, setLikeNum] = useState(data.like);

	const handleMark = () => {
		if (markState) {
			setMarkState(false);
			setLikeNum(like - 1);
		} else {
			setMarkState(true);
			setLikeNum(like + 1);
		}
	};

	const card = css`
		width: 100%;
		display: flex;
	`;

	const tag = css`
		margin-top: 0.625rem;
		width: 14%;
		z-index: 1;
		margin-left: 0.7rem;
		position: relative;
	`;

	const tagImg = css`
		width: 100%;
	`;

	const tagNumber = css`
		color: #fff;
		font-size: 1.5rem;
		font-weight: 500;
		position: absolute;
		top: 4%;
		z-index: 2;
		width: 100%;
		height: 25%;
		display: flex;
		justify-content: flex-start;
		padding-left: 1.2rem;
		align-items: center;
	`;

	const box = css`
		display: flex;
		width: 87%;
		aspect-ratio: 3.18 / 1;
		border-radius: 5px;
		background: #fff;
		box-shadow: 4px 4px 14px -1px rgba(0, 0, 0, 0.1);
		justify-content: space-between;
		margin-left: -2.5rem;
	`;

	const left = css`
		height: 100%;
		width: 32.5%;
	`;

	const middle = css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 2rem;
		height: fit-content;
		width: 48%;
		margin-left: 1rem;
	`;

	const right = css`
		height: 100%;
		width: 8%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		color: #ff4b8c;
		gap: 0.22rem;
		margin-right: 1.9rem;
	`;

	const productImg = css`
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px 0px 0px 5px;
	`;

	const row = css`
		display: flex;
		width: 100%;
	`;

	const heartSection = css`
		width: 100%;
	`;

	return (
		<div css={card}>
			<div css={tag}>
				<img css={tagImg} src={index === 0 ? '/img/greentag.png' : '/img/graytag.png'} />
				<div css={tagNumber}>{index + 1}</div>
			</div>
			<div css={box}>
				<div css={left}>
					<img css={productImg} src="/img/productsampleimg.png" />
				</div>
				<div css={middle}>
					<div css={row}>
						<img src="/img/profileLogo.svg" />
						<div
							css={css`
								font-size: 1.5rem;
								font-weight: 500;
							`}
						>
							&nbsp;{data.designer}&nbsp;
						</div>
						<div
							css={css`
								font-size: 1.5rem;
								font-weight: 500;
								color: #535353;
							`}
						>
							디자이너
						</div>
					</div>
					<div
						css={css`
							font-size: 2rem;
							font-weight: 500;
							margin-top: 0.3rem;
						`}
					>
						{data.product}
					</div>
				</div>
				<div css={right}>
					<img
						css={heartSection}
						onClick={handleMark}
						src={markState ? '/img/activeHeart.png' : '/img/nonactiveHeart.png'}
					/>
					{like}
				</div>
			</div>
		</div>
	);
};

export default RankingCard;
