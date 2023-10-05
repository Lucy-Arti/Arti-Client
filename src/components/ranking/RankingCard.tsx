import { getMarked, postMarked } from '@/apis/list';
import { RankData } from '@/types/request';
import { isLoginAtom } from '@/utils/state';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

type RankingCardPropsType = {
	data:RankData;
	index:number;
	setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RankingCard = (props:RankingCardPropsType) => {
	const [like, setLikeNum] = useState(props.data.likeCount);
	const [markState, setMarkState] = useState(false);
	const [isSuccessed, setIsSuccessed] = useState(false);
	const isUser = useRecoilValue(isLoginAtom);
	const navigate = useNavigate();

	const getMark = async () => {
		if (isUser) {
			// const result = await getMarked(props.clothesId, localStorage.getItem("access"));
			const result = await getMarked(props.data.clothesId, localStorage.getItem('access'));
			if (result !== false) {
				setMarkState(result.data);
			}
		}
	};

	useEffect(() => {
		getMark();
	}, []);
	const postMark = async () => {
		const result = await postMarked(props.data.clothesId, localStorage.getItem('access'));
		// if (result === false) {
		//     setIsSuccessed(false);
		//     //나중에 이 부분 모달창이나 alert창 필요해보임! + error코드 분기처리
		// } else {
		//     setIsSuccessed(true);
		// }
	};
	const handleMarkClick = () => {
		if (isUser) {
			if (markState) {
				setMarkState(false);
				setLikeNum(like-1);
				postMark();
				props.setUnsavedModalIsOpen(true);
				setIsSuccessed(false);
				setTimeout(() => {
					props.setUnsavedModalIsOpen(false);
				}, 1000);
			
			} else {
				setMarkState(true);
				setLikeNum(like+1);
				postMark();
				props.setSavedModalIsOpen(true);
				setIsSuccessed(false);
				setTimeout(() => {
					props.setSavedModalIsOpen(false);
				}, 1000);
			}
		} else {
			props.setLoginModalIsOpen(true);
		}
	};

	const card = css`
		width: 100%;
		display: flex;
	`;

	const tag = css`
		margin-top: 0.625rem;
		width: 14%;
		height: fit-content;
		z-index: 1;
		position: relative;
		display: flex;
	`;

	const tagImg = css`
		width: 100%;
	`;

	const tagNumber = css`
		color: #fff;
		font-size: 1.5rem;
		font-weight: 500;
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		padding-left: 1.2rem;
		align-items: center;
	`;

	const box = css`
		display: flex;
		width: 92%;
		aspect-ratio: 3.18 / 1;
		border-radius: 5px;
		background: #fff;
		box-shadow: 4px 4px 14px -1px rgba(0, 0, 0, 0.1);
		justify-content: space-between;
		margin-left: -2.9rem;
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
		height:80%;
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
				<img css={tagImg} src={props.index === 0 ? '/img/greentag.png' : '/img/graytag.png'} />
				<div css={tagNumber}>{props.index + 1}</div>
			</div>
			<div css={box}>
				<div css={left}  onClick={()=>navigate(`../../productlist/${props.data.clothesId}`)}>
					<img css={productImg} src={`${props.data.preview}`} />
				</div>
				<div css={middle}  onClick={()=>navigate(`../../productlist/${props.data.clothesId}`)}>
					<div css={row}>
						<img src="/img/profileLogo.svg" />
						<div
							css={css`
								font-size: 1.5rem;
								font-weight: 500;
							`}
						>
							&nbsp;{props.data.designerName}&nbsp;
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
						{props.data.clothesName}
					</div>
				</div>
				<div css={right}>
					<img
						css={heartSection}
						onClick={handleMarkClick}
						src={markState ? '/img/activeHeart.png' : '/img/nonactiveHeart.png'}
					/>
					{like}
				</div>
			</div>
		</div>
	);
};

export default RankingCard;
