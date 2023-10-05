import { userNameAtom } from '@/utils/state';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ProductType } from '../list/ListView';
import { GetProductDetail } from '@/apis/list';
import { useEffect, useState } from 'react';

const FinalPick = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const targetId = searchParams.get('id');
	const userName = useRecoilValue(userNameAtom);
	const [productDetail, setProductDetail] = useState<ProductType>();
	const getProduct = async () => {
		const result = await GetProductDetail(targetId!);
		if (result === false) {
			alert('불러오기 오류 발생');
			navigate('/');
		} else {
			setProductDetail(result.data);
		}
	};
	useEffect(() => {
		getProduct();
	}, []);

	const finalpickSection = css`
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 130px;
	`;
	const background = css`
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;
		height: 90vh;
		top: 0;
		right: 50%;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0%);
		z-index: 1;
		@media (min-width: 576px) {
			width: 576px;
		}
	`;

	const heart1 = css`
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: -10%;
		right: -10%;
		object-fit: contain;
	`;
	const heart2 = css`
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: 20%;
		left: -10%;
		object-fit: contain;
	`;
	const heart3 = css`
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: 60%;
		right: 2%;
		object-fit: contain;
	`;
	const infoSection = css`
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
	`;
	const card = css`
		position: relative;
		width: 85%;
		object-fit: contain;
		overflow: hidden;
		display: flex;
		border-radius: 11px;
		margin-top: 35px;
		margin-bottom: 40px;
	`;
	const cardImg = css`
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 11px;
		z-index: 1;
	`;
	const info = css`
		display: flex;
		align-items: end;
		justify-content: center;
		position: absolute;
		z-index: 2;
		bottom: 0%;
		width: 100%;
		height: 241.348px;
		border-radius: 11px;
		background: linear-gradient(182deg, rgba(255, 255, 255, 0) 1.97%, rgba(255, 255, 255, 0.9) 79.42%);
	`;
	const pickText = css`
		color: #636363;
		font-size: 2rem;
		font-weight: 500;
		.black {
			color: black;
		}
		.productName {
			color: black;
			font-size: 3rem;
			font-weight: 500;
			line-height: normal;
		}
	`;
	const infoText = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
		gap: 3px;
		margin-bottom: 15px;
	`;
	const row = css`
		display: flex;
		align-items: center;
		width: 100%;
	`;
	const btnSection = css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 85%;
	`;
	const btn1 = css`
		color: white;
		font-size: 2rem;
		padding: 1.5rem 0rem;
		width: 45%;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		z-index: 3;
		background: linear-gradient(0deg, rgba(53, 53, 53, 0.8) 0%, rgba(53, 53, 53, 0.8) 100%), #fff;
	`;
	const btn2 = css`
		color: #464647;
		font-size: 2rem;
		padding: 1.25rem 0rem;
		width: 45%;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
		z-index: 3;
		background: white;
	`;
	return (
		<div css={finalpickSection}>
			<div css={background}>
				<img css={heart1} src="/img/backgreenheart.png" />
				<img css={heart2} src="/img/backgreenheart.png" />
				<img css={heart3} src="/img/backgreenheart.png" />
			</div>
			{productDetail && (
				<div css={infoSection}>
					<div css={pickText}>
						<span className="black">{`{${userName}}`}</span> 님의 PICK
					</div>
					<div css={card}>
						<img css={cardImg} src={`${productDetail.preview}`} />
						<div css={info}>
							<div css={infoText}>
								<div css={[row, pickText]}>
									<img src="/img/profileLogo.svg" />
									<span className="black">&nbsp;{productDetail.designerName}&nbsp;</span>디자이너
								</div>
								<div css={[row, pickText]}>
									<div className="black productName">{productDetail.clothesName}</div>
								</div>
							</div>
						</div>
					</div>
					<div css={btnSection}>
						<div css={btn1} onClick={() => navigate('../../')}>
							홈
						</div>
						<div css={btn2}onClick={() => navigate(`../../productlist/${targetId}`)}>옷 구경하기</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default FinalPick;
