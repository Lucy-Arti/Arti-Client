import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { ProductType } from '../list/ListView';
import { GetSearchProductList } from '@/apis/search';
import ListCard from '../list/ListCard';
import ModalLogin from '../list/ModalLogin';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';

const Search = () => {
    const inputText = useRef<HTMLInputElement>(null);
    const productList : ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
	const [products, setProducts] = useState<ProductType[]>(productList);
    const getProducts = async() => {
        if (inputText.current === null || inputText.current.value === ''){
            const result = await GetSearchProductList('');
            if(result===false) {
                alert("불러오기 오류 발생");
            } else {
                setProducts(productList.concat(result.data));
            }
        } else {
            const result = await GetSearchProductList(inputText.current.value);
            if(result===false) {
                alert("불러오기 오류 발생");
            } else {
                setProducts(productList.concat(result.data));
            }
        }
	}
    const handleClick = () => {
        getProducts();
    }
    const searchBox = css`
        display: flex;
        width: 80%;
        height: 3rem;
        background-color: rgba(245, 245, 245, 1);
        border-radius: 10px;
    `
    const gridWrapper = css`
		display: grid;
		height: 80vh;
		margin: 2rem;
		/* border: 1px solid black; */
		grid-template-columns: repeat(2, 1fr);
  		grid-template-rows: repeat(3,1fr);
  		grid-auto-flow: row;
		grid-gap: 2rem;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	`
  return (
    <>
    <div className="headerLayout" css={css`
        gap: 2rem;
    `}>
        <FiChevronLeft cursor="pointer" size="26px" onClick={() => history.back()} />
        <div css={searchBox}>
            <input css={css`
                width: 87%;
                background-color: transparent;
                border: none;
                outline: none;
                margin-left: 1rem;
            `} ref={inputText} />
            <img src="/img/search.svg" onClick={handleClick} />
        </div>
    </div>
        {
			(loginModalIsOpen === true) && 
			<ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />
		}
		{
			(savedModalIsOpen === true) && <ModalProductSaved />
		}
		{
			(unsavedModalIsOpen === true) && <ModalProductUnsaved />
		}
    <div>
        <div css={gridWrapper}>
            {products && 
            products.map((product:ProductType, idx:number) => (
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
        </div>
    </div>
    </>
  )
}

export default Search