'use client';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { GetSearchProductList } from '@/apis/search';
import SearchCard from './SearchCard';
import { GetAllProductLists } from '@/apis/list';
import { ProductType } from '@/types/request';
import ModalLogin from '../common/ModalLogin';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import styled from 'styled-components';

const Search = () => {
	const inputText = useRef<HTMLInputElement>(null);
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [products, setProducts] = useState<ProductType[]>(productList);

	const [isExist, setIsExist] = useState(true);
	const [alertText, setAlertText] = useState('');

	// ios input fixed 에러 해결
	useEffect(() => {
		const handleInputBlur = () => {
			if (typeof window !== 'undefined') {
				setTimeout(() => {
					window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
				}, 0);
			}
		};

		document.addEventListener('focusout', handleInputBlur);

		return () => {
			// Clean up the event listener when the component unmounts
			document.removeEventListener('focusout', handleInputBlur);
		};
	}, []);

	const getProducts = async () => {
		if (inputText.current === null || inputText.current.value === '') {
			//input 값이 없을 때 전체 랜덤하게 불러오기
			const result = await GetAllProductLists();
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
				setProducts(productList.concat(newArr));
				setIsExist(true);
			}
		} else {
			const result = await GetSearchProductList(inputText.current.value);
			if (result === false) {
				console.log('불러오기 오류 발생');
			} else if (result.data.length === 0) {
				//input 값에 따른 결과가 없을 때 결과 없음 표출
				setIsExist(false);
				setAlertText(inputText.current.value);
			} else {
				setIsExist(true);
				setProducts(productList.concat(result.data));
			}
		}
	};
	const handleClick = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
		getProducts();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// Enter 키가 눌렸을 때 검색 함수 호출
			if (typeof window !== 'undefined') {
				window.scrollTo(0, 0);
			}
			getProducts();
		}
	};

	return (
		<SearchSection>
			<Fixed>
				<BackBtn>
					<FiChevronLeft cursor="pointer" size="26px" onClick={() => history.back()} />
				</BackBtn>
				<SearchBox>
					<input className="searchInputBox" ref={inputText} onKeyDown={handleKeyDown} />
					<img className="searchLogo" src="/img/search.svg" onClick={handleClick} />
				</SearchBox>
			</Fixed>

			{loginModalIsOpen === true && <ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />}
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			<Margin />
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
				<TextBox>
					<Text>{alertText}에 대한 검색결과가 없습니다</Text>
				</TextBox>
			)}
		</SearchSection>
	);
};

export default Search;

const SearchSection = styled.div`
	width: 100%;
	min-height: 90vh;
`;
const Fixed = styled.div`
	position: fixed;
	top: 0px !important;
	display: flex;
	justify-content: space-around;
	align-items: end;
	width: 100%;
	height: 70px;
	top: 0%;
	background-color: white;
	@media (min-width: 576px) {
		width: 576px;
	}
`;
const SearchBox = styled.div`
	display: flex;
	width: 80%;
	height: 40px;
	background-color: rgba(245, 245, 245, 1);
	border-radius: 10px;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
	.searchInputBox {
		width: 87%;
		background-color: transparent;
		border: none;
		outline: none;
		margin-left: 1rem;
		font-size: 2rem;
		font-family: 'Pretendard';
	}
	.searchLogo {
		width: fit-content;
		height: 60%;
		:hover {
			cursor: pointer;
		}
		margin-right: 6.5px;
	}
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	justify-content: center;
	align-items: center;
`;
const Text = styled.div`
	font-size: 1.5rem;
	margin-top: 50px;
`;
const Margin = styled.div`
	height: 60px;
`;
const BackBtn = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
const GridWrapper = styled.div`
	display: grid;
	/* height: 80vh; */
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
