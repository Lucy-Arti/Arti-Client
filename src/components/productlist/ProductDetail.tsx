'use client';
import Header from '../common/Header';
import { useRouter, useSearchParams } from 'next/navigation';
import { GetProductDetail, GetProductDetailByUser, getMarked, postMarked } from '@/apis/list';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ProductType } from './ListView';
import { useRecoilValue } from 'recoil';
import ShareButton from '../common/ShareButton';
import { isLoginAtom } from '@/app/recoilContextProvider';
import styled from 'styled-components';
import { BiSolidDiscount } from 'react-icons/bi';
import Comment from './Comment';
import CommentInput from './CommentInput';
import ModalNotSelling from '../common/ModalNotSelling';
import ModalLogin from '../common/ModalLogin';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';

const ProductDetail = () => {
	// const withslashpathname  = usePathname();
	// const pathname = withslashpathname.replace('/productlist/product?key=', '');
	const params = useSearchParams();
	const pathname = params.get('key');
	const [markState, setMarkState] = useState(false);
	const [like, setLikeNum] = useState<number | null>(null);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [loginModalPurpose, setLoginModalPurpose] = useState<string | undefined>(undefined);
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);

	const [productDetail, setProductDetail] = useState<ProductType>();
	const isUser = useRecoilValue(isLoginAtom);

	const [detailTab, setDetailTab] = useState('active');
	const [cmtTab, setCmtTab] = useState('');

	const [currentTab, setCurrentTab] = useState('detail');

	const [getFixed, setGetFixed] = useState('');
	const [replyName, setReplyName] = useState('');
	const [commentId, setCommentId] = useState<number>();
	const [rerenderCmts, setReRenderCmts] = useState(false);

	// tab 이동을 위한 ref들
	const heightRef = useRef<HTMLDivElement>(null);
	const towardCmtRef = useRef<HTMLDivElement>(null);
	const towardDetailRef = useRef<HTMLDivElement>(null);
	const commentHeightRef = useRef<HTMLDivElement>(null);

	const route = useRouter();

	//channel 버튼 숨기기 effect
	useEffect(() => {
		ChannelService.hideChannelButton();
	}, []);

	//handleTabScroll 콜백 + 콜백 호출 때마다 useEffect
	//목적 : tab 부분 상단 fix를 위함
	const handleTabScroll = useCallback((): void => {
		const scrollOffset = window.scrollY;
		const divHeight = heightRef?.current?.offsetHeight;
		if (scrollOffset && divHeight) {
			if (scrollOffset >= divHeight) {
				setGetFixed('active');
			} else {
				setGetFixed('');
			}
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleTabScroll, true);
		return () => {
			window.removeEventListener('scroll', handleTabScroll, true);
		};
	}, [handleTabScroll]);

	//handleTowardCmtScroll 콜백 + 콜백 호출 때마다 useEffect
	//목적 : comment와 detail간 스크롤로 이동 시, tab 선택 바뀌게
	const handleTowardCmtScroll = useCallback((): void => {
		const scrollOffset = window.scrollY;
		const divHeight = commentHeightRef?.current?.offsetHeight! - 150;
		if (scrollOffset && divHeight) {
			if (scrollOffset >= divHeight) {
				setCurrentTab('comment');
				setCmtTab('active');
				setDetailTab('');
			} else {
				setCurrentTab('detail');
				setDetailTab('active');
				setCmtTab('');
			}
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleTowardCmtScroll, true);
		return () => {
			window.removeEventListener('scroll', handleTowardCmtScroll, true);
		};
	}, [handleTowardCmtScroll]);

	// 목적 : tab 버튼 클릭시 이동처리
	const handleTabBtn = (tab: string) => {
		if (tab === 'detail') {
			if (detailTab === '') {
				setCurrentTab('detail');
				setDetailTab('active');
				setCmtTab('');
				towardDetailRef.current?.scrollIntoView({ behavior: 'smooth' });
			} else {
				towardDetailRef.current?.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			if (cmtTab === '') {
				setCurrentTab('comment');
				setCmtTab('active');
				setDetailTab('');
				towardCmtRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else {
				towardCmtRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	};

	const getProduct = async () => {
		if (isUser) {
			const result = await GetProductDetailByUser(pathname!, localStorage.getItem('access'));
			if (result === false) {
				// alert("불러오기 오류 발생");
				// navigate('/');
			} else {
				setProductDetail(result.data);
			}
		} else {
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
			const result = await getMarked(pathname!, localStorage.getItem('access'));
			if (result !== false) {
				setMarkState(result.data);
			}
		}
	};
	const postMark = async () => {
		const result = await postMarked(pathname!, localStorage.getItem('access'));
		if (result === false) {
			console.log('불러오기 오류 발생');
			//나중에 이 부분 모달창이나 alert창 필요해보임! + error코드 분기처리
		} else {
			if (markState){
                if (like !== null) {
                    setLikeNum(like - 1);
                }
                setMarkState(false);
            } else {
                if (like !== null) {
                    setLikeNum(like + 1);
                }
                setMarkState(true);
            }
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
			if(savedModalIsOpen === false && unsavedModalIsOpen === false){
                if (markState) {
                    postMark();
                    setUnsavedModalIsOpen(true);
                    setTimeout(() => {
                        setUnsavedModalIsOpen(false);
                    }, 1000);
                } else {
                    postMark();
                    setSavedModalIsOpen(true);
                    setTimeout(() => {
                        setSavedModalIsOpen(false);
                    }, 1000);
                }
            }
		} else {
			setLoginModalIsOpen(true);
		}
	};

	const handlePurchaseBtn = () => {
		if (productDetail?.purchaseLink === null) {
			setModalIsOpen(true);
		} else {
			window.open(productDetail?.purchaseLink, '_blank');
		}
	};

	// const handleDiscountBtn = () => {
	// 	if (isUser) {
	// 		route.push('/mypage/shop/detail?id=1');
	// 	} else {
	// 		setLoginModalPurpose('이용');
	// 		setLoginModalIsOpen(true);
	// 	}
	// };

	return (
		<>
			<Fixed>
				<FlexColumn>
					<Header where="detail" />
				</FlexColumn>
			</Fixed>
			{modalIsOpen === true && (
				<ModalNotSelling setModalIsOpen={setModalIsOpen} onClick={() => handleTabBtn('comment')} />
			)}
			{loginModalIsOpen === true && (
				<ModalLogin purpose={loginModalPurpose} setLoginModalIsOpen={setLoginModalIsOpen} />
			)}
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			<ForBlank />
			{productDetail && (
				<>
					<HeightWrapper ref={commentHeightRef}>
						<GetHeight ref={heightRef}>
							<img width="100%" src={`${productDetail.preview}`} />
							<DesignerBox onClick={() => route.push(`/designer/${productDetail.designerId}`)}>
								<div className="imgwrapper">
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
											<HeartImg width="30rem" src="/img/activeHeart.png" onClick={handleMarkClick} />
										) : (
											<HeartImg width="30rem" src="/img/nonactiveHeart.png" onClick={handleMarkClick} />
										)}
										<div>{like}</div>
									</HeartSection>

									{/* <BiShareAlt css={css`:hover{cursor: pointer;}`} size="3rem" /> */}
									<ShareButton where="product" />
								</FlexRow>
							</FlexRow>
							{productDetail.type === 'sketch' ? (
								<></>
							) : (
								<FlexRow className="purchase-wrapper">
									<PurchaseBtn onClick={handlePurchaseBtn}>구매하러 가기</PurchaseBtn>
									{/* <DiscountBtn onClick={handleDiscountBtn}>
										<BiSolidDiscount size="1.6rem" color="rgba(107, 218, 1, 1)" />
										<div>할인쿠폰</div>
									</DiscountBtn> */}
								</FlexRow>
							)}
							<GapDesign />
						</GetHeight>
						<FlexColumn>
							<SelectTab className={getFixed}>
								<SelectBtn className={detailTab} onClick={() => handleTabBtn('detail')}>
									상세 정보
								</SelectBtn>
								<SelectBtn className={cmtTab} onClick={() => handleTabBtn('comment')}>
									댓글
								</SelectBtn>
							</SelectTab>
						</FlexColumn>
						<div className='detail-img' ref={towardDetailRef}>
							<img width="100%" src={`${productDetail.detailImg}`} />
						</div>
						{/* <Footer /> */}
						<BlankSpace ref={towardCmtRef} />
						<GapDesign />
					</HeightWrapper>
					<Comment
						pathname={pathname!}
						rerenderCmts={rerenderCmts}
						setReRenderCmts={setReRenderCmts}
						setReplyName={setReplyName}
						setCommentId={setCommentId}
						setLoginModalIsOpen={setLoginModalIsOpen}
						setLoginModalPurpose={setLoginModalPurpose}
					/>
					<CommentInput
						pathname={pathname!}
						getFixed={getFixed}
						replyName={replyName}
						commentId={commentId}
						rerenderCmts={rerenderCmts}
						setReRenderCmts={setReRenderCmts}
						setReplyName={setReplyName}
						setCommentId={setCommentId}
						setLoginModalIsOpen={setLoginModalIsOpen}
						setLoginModalPurpose={setLoginModalPurpose}
					/>
				</>
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

const GetHeight = styled.div`
	display: flex;
	flex-direction: column;
`;

const Fixed = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: space-around;
	justify-content: center;
	width: 100%;
	height: fit-content;
	top: 0%;
	background-color: white;
	z-index: 1;
	@media (min-width: 576px) {
		width: 576px;
	}
`;

const ForBlank = styled.div`
	height: 90px;
`;

const DesignerBox = styled.div`
	display: flex;
	align-items: center;
	margin: 18px;
	padding: 2rem 0 2rem 1.5rem;
	border-radius: 10px;
	background-color: white;
	filter: drop-shadow(0 0 0.3rem #9e9e9e);
	& > .imgwrapper {
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
	&.purchase-wrapper {
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

const HeightWrapper = styled.div`
	height: auto;
	& > .detail-img{
		width: 100%;
	}
`;

const SelectTab = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	margin-bottom: 1rem;
	margin-top: 5rem;
	background-color: white;
	&.active {
		position: fixed;
		top: 40px;
		padding-top: 2rem;
		z-index: 1;
		@media (min-width: 576px) {
			width: 576px;
		}
	}
`;
const SelectBtn = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	font-size: 2rem;
	border-bottom: 1px solid rgba(198, 198, 198, 1);
	color: rgba(198, 198, 198, 1);
	padding-bottom: 1rem;
	&.active {
		color: black;
		border-color: black;
	}
	&:hover {
		cursor: pointer;
	}
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
	&:hover {
		cursor: pointer;
	}
`;

const BlankSpace = styled.div`
	display: flex;
	height: 120px;
`;

const PurchaseBtn = styled.div`
	display: flex;
	width: 100%;
	background-color: #a5e865;
	border-radius: 0.6rem;
	font-size: 1.5rem;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	&:hover {
		cursor: pointer;
	}
`;

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
	&:hover {
		cursor: pointer;
	}
`;
