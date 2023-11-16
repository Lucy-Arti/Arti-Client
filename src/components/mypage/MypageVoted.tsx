'use client'
import Header from '../common/Header';
import { ProductType } from '@/types/request';
import { useEffect, useState } from 'react';
import { GetVotedProductLists } from '@/apis/mypage';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import Footer from '../common/Footer';
import { useRouter } from 'next/navigation';
import SearchCard from '../search/SearchCard';
import styled from 'styled-components';

const MypageVoted = () => {
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [isExist, setIsExist] = useState(true);
	const [products, setProducts] = useState<ProductType[]>(productList);
    const route = useRouter();

	const getProductLists = async () => {
		const result = await GetVotedProductLists(localStorage.getItem('access'));
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else if (result.data.length === 0) {
			setIsExist(false);
		} else {
			setIsExist(true);
			setProducts(productList.concat(result.data));
		}
	};

	useEffect(() => {
		getProductLists();
	}, []);

	return (
		<>
			<FlexColumn>
				<Header where="투표한 옷" />
			</FlexColumn>
			<ArticleWrapper>
				<PromoBox>
					<PromoText>
						<div className='upper'>
							투표를 통해
						</div>
						<div className='lower'>
							더 많은 옷들이 세상에 나올 수 있도록
						</div>
					</PromoText>
					<img
						width="60rem"
						src="/img/MypageToVote.png"
						onClick={() => {
							route.push('/vote');
						}}
						loading="lazy"
					/>
				</PromoBox>
			</ArticleWrapper>
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			{isExist ? (
				<GridWrapper>
					{products &&
						products.map((product: ProductType, idx: number) => (
							<SearchCard
								key={idx}
								clothesId={product.clothesId}
								createdAt={product.createdAt}
								updatedAt={product.updatedAt}
								detailImg={product.detailImg}
								likeCount={product.likeCount}
								clothesName={product.clothesName}
								preview={product.preview}
								designerId={product.designerId}
								designerName={product.designerName}
								score={product.score}
								setSavedModalIsOpen={setSavedModalIsOpen}
								setUnsavedModalIsOpen={setUnsavedModalIsOpen}
								setLoginModalIsOpen={setLoginModalIsOpen}
							/>
						))}
				</GridWrapper>
			) : (
                <NoticeWrapper>
					<NoticeBox>
						<div className='imgbox'>
							<img width="100%" src="/img/artiLogo.png" />
						</div>
						<div className='textbox'>
                            투표를 통해 유니크한 옷들을 둘러보고
							<br />
							랭킹을 통해 트렌드를 확인해보세요!
						</div>
                        <img width="100%" src="/img/loginBanner.png" loading="lazy" />
					</NoticeBox>
				</NoticeWrapper>
			)}
			<Footer />
		</>
	);
};

export default MypageVoted;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ArticleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 98%;
	align-items: center;
`;
const PromoBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	background-color: rgba(232, 255, 211, 1);
	border-radius: 10px;
	& > img{
		margin-right: 2rem;
		:hover {
			cursor: pointer;
		}
	}
`;
const PromoText = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
	padding-bottom: 2rem;
	gap: 0.6rem;
	& > .upper{
		font-weight: 400;
		font-size: 1.5rem;
		margin-left: 2rem;
	}
	& > .lower{
		font-weight: 600;
		font-size: 1.5rem;
		margin-left: 2rem;
	}
`
const GridWrapper = styled.div`
	display: grid;
	margin: 2rem;
	/* border: 1px solid black; */
	grid-template-columns: repeat(2, 1fr);
	/* grid-template-rows: repeat(3,1fr); */
	grid-auto-flow: row;
	grid-gap: 2rem;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;
const NoticeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	justify-content: center;
	align-items: center;
`
const NoticeBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	margin-bottom: 50px;
	& > .imgbox {
		width: 20rem;
		margin-bottom: 5rem;
	}
	& > .textbox {
		font-size: 2rem;
		text-align: center;
		font-weight: 600;
	}
	& > .button-style{
		display: flex;
		background-color: rgba(107, 218, 1, 1);
		padding: 1rem 2rem 1rem 2rem;
		border-radius: 8px;
		margin-top: 4rem;
		font-size: 1.5rem;
		font-weight: 600;
	}
`