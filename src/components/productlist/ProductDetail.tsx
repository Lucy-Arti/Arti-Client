'use client'
import Header from '../common/Header';
import { useParams, usePathname, useRouter } from "next/navigation"
import { GetProductDetail, GetProductDetailByUser, getMarked, postMarked } from '@/apis/list';
import { useEffect, useState } from 'react';
import { ProductType } from './ListView';
import Footer from '../common/Footer';
import { useRecoilValue } from 'recoil';
import ShareButton from '../common/ShareButton';
import { isLoginAtom } from '@/app/recoilContextProvider';
import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { BiSolidDiscount } from "react-icons/bi";
import { GetAllCmts } from '@/apis/comments';

const ProductDetail = () => {
	// const { idx } = useParams();
	// const router  = useRouter();
	const withslashpathname  = usePathname();
	const pathname = withslashpathname.replace('/productlist/', '');
	const [markState, setMarkState] = useState(false);
	const [like, setLikeNum] = useState<number | null>(null);
	const [productDetail, setProductDetail] = useState<ProductType>();
	const isUser = useRecoilValue(isLoginAtom);

	const getProduct = async () => {
		if (isUser) {
			// const result = await GetProductDetailByUser(idx[idx.length-1]!, localStorage.getItem('access'));
			// const result = await GetProductDetailByUser(router.query.slug!, localStorage.getItem('access'));
			const result = await GetProductDetailByUser(pathname!, localStorage.getItem('access'));
			if (result === false) {
				// alert("불러오기 오류 발생");
				// navigate('/');
			} else {
				setProductDetail(result.data);
			}
		} else {
			// const result = await GetProductDetail(idx[idx.length-1]!);
			// const result = await GetProductDetail(router.query.slug!);
			const result = await GetProductDetail(pathname!);
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
			// const result = await getMarked(idx[idx.length-1]!, localStorage.getItem('access'));
			// const result = await getMarked(router.query.slug!, localStorage.getItem('access'));
			const result = await getMarked(pathname!, localStorage.getItem('access'));
			if (result !== false) {
				setMarkState(result.data);
			}
		}
	};
	const postMark = async () => {
		// const result = await postMarked(idx[idx.length-1]!, localStorage.getItem('access'));
		// const result = await postMarked(router.query.slug!, localStorage.getItem('access'));
		const result = await postMarked(pathname!, localStorage.getItem('access'));
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

	const route = useRouter();

	return (
		<>
			<FlexColumn>
				<Header where="detail" />
			</FlexColumn>
			{productDetail && (
				<div>
					<img width="100%" src={`${productDetail.preview}`} />
					<DesignerBox onClick={() => route.push(`/designer/${productDetail.designerId}`)}>
						<div className='imgwrapper'>
							<img width="100%" src="/img/profile-large.png" />
						</div>
						<MakeBold>{productDetail.designerName}</MakeBold>
						<FontSize> 디자이너</FontSize>
					</DesignerBox>
					<FlexRow>
						<Title>{productDetail.clothesName}</Title>
						<FlexRow className="icon-box">
							<HeartSection>
								{markState === true ? (
									<HeartImg
										width="30rem"
										src="/img/activeHeart.png"
										onClick={handleMarkClick}
									/>
								) : (
									<HeartImg
										width="30rem"
										src="/img/nonactiveHeart.png"
										onClick={handleMarkClick}
									/>
								)}
								<div>{like}</div>
							</HeartSection>

							{/* <BiShareAlt css={css`:hover{cursor: pointer;}`} size="3rem" /> */}
							<ShareButton where="product" />
						</FlexRow>
					</FlexRow>
					{
						productDetail.type === 'sketch' ? 
						<></>
						:
						<FlexRow className='purchase-wrapper'>
							<PurchaseBtn>구매하러가기</PurchaseBtn>
							<DiscountBtn>
								<BiSolidDiscount size='1.6rem' color='rgba(107, 218, 1, 1)' />
								<div>할인쿠폰</div>
							</DiscountBtn>
						</FlexRow>
					}
					<GapDesign />
					<div>
						<img width="100%" src={`${productDetail.detailImg}`}/>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

export default ProductDetail;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const DesignerBox = styled.div`
	display: flex;
	align-items: center;
	margin: 18px;
	padding: 2rem 0 2rem 1.5rem;
	border-radius: 10px;
	background-color: white;
	filter: drop-shadow(0 0 0.3rem #9e9e9e);
	& > .imgwrapper{
		display: flex;
		width: 3rem;
	}
`;
const MakeBold = styled.div`
	font-size: 2rem;
	margin-left: 1rem;
	font-weight: 600;
`;
const FontSize = styled.div`
	font-size: 2rem;
	margin-left: 0.5rem;
`;
const Title = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	font-size: 2.5rem;
	font-weight: 600;
	margin-left: 0.5rem;
`;
const FlexRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 2rem 3rem 2rem;
	&.icon-box {
		margin: 0;
		gap: 1rem;
	}
	&.purchase-wrapper{
		width: 90%;
		margin: 1rem 2rem 1rem 2rem;
	}
`;
const GapDesign = styled.div`
	background-color: #f5f5f5;
	height: 1rem;
	width: 100%;
	margin-top: 2rem;
`;
const HeartSection = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1px;
	color: #ff4b8c;
`;
const HeartImg = styled.img`
	&:hover{
		cursor: pointer;
	}
`

const BlankSpace = styled.div`
	display: flex;
	height: 120px;
`

const PurchaseBtn = styled.div`
	display: flex;
	width: 65%;
	background-color: #A5E865;
	border-radius: 0.6rem;
	font-size: 1.5rem;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	&:hover{
		cursor: pointer;
	}
`

const DiscountBtn = styled.div`
	display: flex;
	width: 30%;
	border-radius: 0.6rem;
	border: 1px solid rgba(107, 218, 1, 1);
	color: rgba(107, 218, 1, 1);
	gap: 1rem;
	font-size: 1.5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	justify-content: center;
	align-items: center;
	&:hover{
		cursor: pointer;
	}
`