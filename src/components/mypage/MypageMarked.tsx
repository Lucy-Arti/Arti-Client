'use client'
import Header from '../common/Header';
import { ProductType } from '@/types/request';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GetMarkedProductLists } from '@/apis/mypage';
import Footer from '../common/Footer';
import SearchCard from '../search/SearchCard';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import styled from 'styled-components';

const MypageMarked = () => {
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [products, setProducts] = useState<ProductType[]>(productList);
	const [isExist, setIsExist] = useState(true);
	const route = useRouter();

	const getProductLists = async () => {
		const result = await GetMarkedProductLists(localStorage.getItem('access'));
		if (result === false) {
			console.log("불러오기 오류 발생");
		} else if(result.data.length === 0) {
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
				<Header where="저장한 옷" />
			</FlexColumn>
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			{
				isExist ? 
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
				:
				<NoticeWrapper>
					<NoticeBox>
						<div className='imgbox'>
							<img width="100%" src="/img/artiLogo.png" />
						</div>
						<div className='textbox'>
							하트 아이콘을 눌러
							<br />
							취향에 맞는 옷을 저장해보세요
						</div>
						<div className='button-style' onClick={()=>{route.push('/productlist')}}>둘러보기 바로가기</div>
					</NoticeBox>
				</NoticeWrapper>
			}
			
			<Footer />
		</>
	);
};

export default MypageMarked;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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
