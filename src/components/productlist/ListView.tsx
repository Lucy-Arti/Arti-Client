'use client';
import ListCard from './ListCard';
import NavBar from '../common/NavBar';
import Header from '../common/Header';
import { useEffect, useState } from 'react';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import ModalLogin from '../common/ModalLogin';
import { GetAllProductLists, getAllProductByType } from '@/apis/list';
import styled from 'styled-components';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

export type ProductType = {
	clothesId: number;
	createdAt: string | null;
	updatedAt: string | null;
	detailImg: string | null;
	likeCount: number | null;
	clothesName: string | null;
	preview: string | null;
	designerId: number | null;
	designerName: string | null;
	score: number | null;
	commentCount: number;
	purchaseLink: string | null;
	type: string;
};

const ListView = () => {
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [products, setProducts] = useState<ProductType[]|undefined>();
	// const [products, setProducts] = useState([]);

	const [sketchTab, setSketchTab] = useState('active');
	const [productTab, setProductTab] = useState('');
	const [activatedTab, setActivatedTab] = useState('sketch');

	const handleTabBtn = (tab: string) => {
		if (tab === 'sketch') {
			if (sketchTab === '') {
				setSketchTab('active');
				setProductTab('');
				setActivatedTab(tab);
			}
		} else {
			if (productTab === '') {
				setProductTab('active');
				setSketchTab('');
				setActivatedTab(tab);
			}
		}
	};

	const getProducts = async (type: string) => {
		// const result = await GetAllProductLists();
		const result = await getAllProductByType(type);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			var newArr: ProductType[] = [];
			var preData: ProductType[] = result.data;
			var arraySize = preData.length;
			for (let i = 0; i < arraySize; i++) {
				let randomNum = Math.floor(Math.random() * (preData.length - i));
				let element = preData.splice(randomNum, 1);
				newArr = newArr.concat(element);
			}
			// setProducts(products.concat(result.data));
			// console.log(newArr);
			setProducts(productList.concat(newArr));
		}
	};
	useEffect(() => {
		setProducts(() => undefined);
		getProducts(activatedTab);
	}, [activatedTab]);

	useEffect(() => {
		ChannelService.showChannelButton();
	}, []);

	return (
		<>
			<Fixed>
				<FlexColumn>
					<Header where="main" />
				</FlexColumn>
				<NavBar />
				<FlexColumn>
					<TabWrapper>
						<TabBtn
							className={sketchTab}
							onClick={() => {
								handleTabBtn('sketch');
							}}
						>
							일러스트
						</TabBtn>
						<TabBtn
							className={productTab}
							onClick={() => {
								handleTabBtn('product');
							}}
						>
							작품
						</TabBtn>
					</TabWrapper>
				</FlexColumn>
			</Fixed>
			{loginModalIsOpen === true && <ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />}
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			<ForBlank />
			<GridWrapper>
				{products && products.map((product: ProductType, idx: number) => (
					<ListCard
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
		</>
	);
};

export default ListView;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	@media (min-width: 576px) {
		width: 576px;
	}
`;

const TabWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	background-color: rgba(240, 240, 240, 1);
	margin-bottom: 2rem;
	border-radius: 5px;
`;

const TabBtn = styled.div`
	display: flex;
	width: 50%;
	height: 5rem;
	background-color: rgba(240, 240, 240, 1);
	color: rgba(168, 168, 168, 1);
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	border: 1px solid rgba(240, 240, 240, 1);
	font-size: 2rem;
	&.active {
		background-color: white;
		color: black;
	}
`;

const ForBlank = styled.div`
	height: 180px;
`;
const GridWrapper = styled.div`
	display: grid;
	/* height: 80%; */
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
