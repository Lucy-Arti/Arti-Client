import { css } from '@emotion/react';
// import HeaderSecond from "../common/HeaderSecond";
import Header from '../common/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { GetProductDetail, GetProductDetailByUser, getMarked, postMarked } from '@/apis/list';
import { useEffect, useState } from 'react';
import { ProductType } from './ListView';
import Footer from '../common/Footer';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/utils/state';
import ShareButton from '../common/ShareButton';

const ProductDetail = () => {
	const { idx } = useParams();
	const [markState, setMarkState] = useState(false);
	const [like, setLikeNum] = useState<number | null>(null);
	const [productDetail, setProductDetail] = useState<ProductType>();
	const isUser = useRecoilValue(isLoginAtom);

	const getProduct = async () => {
		if (isUser) {
			const result = await GetProductDetailByUser(idx!, localStorage.getItem('access'));
			if (result === false) {
				// alert("불러오기 오류 발생");
				// navigate('/');
			} else {
				setProductDetail(result.data);
			}
		} else {
			const result = await GetProductDetail(idx!);
			if (result === false) {
				// alert("불러오기 오류 발생");
				// navigate('/');
			} else {
				setProductDetail(result.data);
			}
		}
	};

	const getMark = async () => {
		if (isUser) {
			const result = await getMarked(idx!, localStorage.getItem('access'));
			if (result !== false) {
				setMarkState(result.data);
			}
		}
	};
	const postMark = async () => {
		const result = await postMarked(idx!, localStorage.getItem('access'));
		if (result === false) {
			console.log('불러오기 오류 발생');
			//나중에 이 부분 모달창이나 alert창 필요해보임! + error코드 분기처리
		} else {
			console.log('post 성공');
		}
	};
	useEffect(() => {
		getProduct();
		getMark();
	}, []);

	useEffect(() => {
		if (productDetail) {
			setLikeNum(productDetail.likeCount);
		}
	}, [productDetail]);

	const handleMarkClick = () => {
		if (isUser) {
			if (markState) {
				setMarkState(false);
				if (like !== null) {
					setLikeNum(like - 1);
				}
				postMark();
			} else {
				setMarkState(true);
				if (like !== null) {
					setLikeNum(like + 1);
				}
				postMark();
			}
		} else {
			alert('로그인 후 저장이 가능합니다!');
		}
	};

	const navigate = useNavigate();
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`;
	const designerBox = css`
		display: flex;
		align-items: center;
		margin: 18px;
		padding: 2rem 0 2rem 1.5rem;
		border-radius: 10px;
		background-color: white;
		filter: drop-shadow(0 0 0.3rem #9e9e9e);
	`;
	const makebold = css`
		font-size: 2rem;
		margin-left: 1rem;
		font-weight: 600;
	`;
	const fontsize = css`
		font-size: 2rem;
		margin-left: 0.5rem;
	`;
	const Title = css`
		display: flex;
		flex-wrap: wrap;
		width: 70%;
		font-size: 2rem;
		font-weight: 600;
		margin-left: 0.5rem;
	`;
	const flexrow = css`
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 3rem 2rem 3rem 2rem;
		&.icon-box {
			margin: 0;
			gap: 1rem;
		}
	`;
	const gapDesign = css`
		background-color: #f5f5f5;
		height: 1rem;
		width: 100%;
		margin-top: 2rem;
	`;
	const heartSection = css`
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1px;
		color: #ff4b8c;
	`;
	return (
		<>
			<div css={flexColumn}>
				<Header where="detail" />
			</div>
			{productDetail && (
				<div>
					<img width="100%" src={`${productDetail.preview}`} loading="lazy" />
					<div onClick={() => navigate(`/designer/${productDetail.designerId}`)} css={designerBox}>
						<div
							css={css`
								display: flex;
								width: 3rem;
							`}
						>
							<img width="100%" src="/img/profile-large.png" />
						</div>
						<div css={makebold}>{productDetail.designerName}</div>
						<div css={fontsize}> 디자이너</div>
					</div>
					<div css={flexrow}>
						<div css={Title}>{productDetail.clothesName}</div>
						<div css={flexrow} className="icon-box">
							<div css={heartSection}>
								{markState === true ? (
									<img
										css={css`
											:hover {
												cursor: pointer;
											}
										`}
										width="30rem"
										src="/img/activeHeart.png"
										onClick={handleMarkClick}
										loading="lazy"
									/>
								) : (
									<img
										css={css`
											:hover {
												cursor: pointer;
											}
										`}
										width="30rem"
										src="/img/nonactiveHeart.png"
										onClick={handleMarkClick}
										loading="lazy"
									/>
								)}
								<div>{like}</div>
							</div>

							{/* <BiShareAlt css={css`:hover{cursor: pointer;}`} size="3rem" /> */}
							<ShareButton where="product" />
						</div>
					</div>
					<div css={gapDesign} />
					<div>
						<img width="100%" src={`${productDetail.detailImg}`} loading="lazy" />
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

export default ProductDetail;
