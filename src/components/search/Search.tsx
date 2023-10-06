import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { ProductType } from '../list/ListView';
import { GetSearchProductList } from '@/apis/search';
import ModalLogin from '../list/ModalLogin';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';
import SearchCard from './SearchCard';
import { GetAllProductLists } from '@/apis/list';

const Search = () => {
	const inputText = useRef<HTMLInputElement>(null);
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [products, setProducts] = useState<ProductType[]>(productList);

	const [isExist, setIsExist] = useState(true);
	const [alertText, setAlertText] = useState('');

	const getProducts = async () => {
		if (inputText.current === null || inputText.current.value === '') {
			const result = await GetAllProductLists();
			if (result === false) {
				// alert('불러오기 오류 발생');
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
				// alert('불러오기 오류 발생');
			} else if (result.data.length === 0) {
				setIsExist(false);
				setAlertText(inputText.current.value);
			} else {
				setIsExist(true);
				setProducts(productList.concat(result.data));
			}
		}
	};
	const handleClick = () => {
		window.scrollTo(0, 0);
		getProducts();
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// Enter 키가 눌렸을 때 검색 함수 호출
			window.scrollTo(0, 0);
			getProducts();
		}
	};

	const handleBlur = () => {
		setTimeout(() => {
		  window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
		}, 0);
	  };
	const searchSection = css`
		width: 100%;
		min-height: 90vh;
	`;
	const fixed = css`
		position: fixed;
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
	const searchBox = css`
		display: flex;
		width: 80%;
		height: 40px;
		background-color: rgba(245, 245, 245, 1);
		border-radius: 10px;
		margin-bottom: 10px;
		align-items: center;
		justify-content: space-between;
	`;
	const margin = css`
		height: 60px;
	`;
	const backBtn = css`
		height: 40px;
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	`;
	const gridWrapper = css`
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
	return (
		<div css={searchSection} onBlur={handleBlur}>
			<div css={fixed}>
				<div css={backBtn}>
					<FiChevronLeft cursor="pointer" size="26px" onClick={() => history.back()} />
				</div>
				<div css={searchBox}>
					<input
						css={css`
							width: 87%;
							background-color: transparent;
							border: none;
							outline: none;
							margin-left: 1rem;
							font-size: 2rem;
						`}
						ref={inputText}
						onKeyDown={handleKeyDown}
					/>
					<img
						css={css`
							width: fit-content;
							height: 60%;
							:hover {
								cursor: pointer;
							}
							margin-right: 6.5px;
						`}
						src="/img/search.svg"
						onClick={handleClick}
					/>
				</div>
			</div>

			{loginModalIsOpen === true && <ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />}
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			<div css={margin}> </div>
			{isExist ? (
				<div css={gridWrapper}>
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
				</div>
			) : (
				<div
					css={css`
						display: flex;
						flex-direction: column;
						height: fit-content;
						justify-content: center;
						align-items: center;
					`}
				>
					<div
						css={css`
							font-size: 1.5rem;
							margin-top: 50px;
						`}
					>
						{alertText}에 대한 검색결과가 없습니다
					</div>
				</div>
			)}
		</div>
	);
};

export default Search;
