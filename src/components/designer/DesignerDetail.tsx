import { css } from '@emotion/react'
import Header from '../common/Header'
import { ProductMapType } from '../list/ListCard'
import { useState } from 'react';
import ModalLogin from '../list/ModalLogin';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';
import Footer from '../common/Footer';
import ProductListCard from './ProductListCard';

const DesignerDetail = () => {
    const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const ProductList = [
		{ id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34, mark: true },
		{ id: 23, designer: '민집', product: '새콤한 감귤 모자', like: 30, mark: true },
		{ id: 43, designer: '짜잉', product: '보송보송 츄리닝 바지', like: 25, mark: false },
		{ id: 24, designer: '비니', product: '프란체스카 올블랙 티셔츠', like: 20, mark: true },
		{ id: 39, designer: '브리', product: '짱멋진 롱스커트', like: 14, mark: true },
		{ id: 21, designer: '초록', product: '개구리 머리띠', like: 10, mark: false },
		{ id: 47, designer: '피터', product: '스파이더맨 거미줄', like: 5, mark: false },
		{ id: 14, designer: '상도', product: '상도역 출근룩', like: 7, mark: true },
	];
    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
    const infoWrapper = css`
        display: flex;
        background-color: white;
        /* align-items: center; */
        height: 17rem;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        /* filter:drop-shadow(0 0.4rem 0.1rem #9e9e9e); */
        box-shadow: 0 0.5rem 0.5rem -0.3rem #9e9e9e;
        gap: 3rem;
        padding: 3rem 2rem 0 2rem;
    `
    const gridWrapper = css`
        display: grid;
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
    <div css={flexColumn}>
        <Header where='detail'/>
	</div>
    <div css={infoWrapper}>
        <img width="80rem" height="80rem" src="/img/profile-large.png" />
        <div css={css`
            display: flex;
            flex-direction: column;
        `}>
            <div css={css`
                font-weight: bolder;
                font-size: 3rem;
                margin: 1rem 0 1rem 0;
            `}>백쟌너</div>
            <div css={css`
                font-size: 1.5rem;
            `}>설명어쩌구저쩌구디자이너설명으아아아아아아아아아힘들다언제끝나징</div>
        </div>
    </div>
    <div css={css`
        font-size: 1.5rem;
        color: #535353;
        margin: 5rem 0 2rem 2rem;
    `}>백쟌너 디자이너가 디자인한 옷이에요</div>
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
		<div css={gridWrapper}>
			{ProductList.map((product:ProductMapType, idx:number) => (
				<ProductListCard 
					key={idx}
					id={product.id}
					designer={product.designer} 
					product={product.product}
					like={product.like}
					mark={product.mark}
					setSavedModalIsOpen={setSavedModalIsOpen} 
					setUnsavedModalIsOpen={setUnsavedModalIsOpen} 
					setLoginModalIsOpen={setLoginModalIsOpen} 
				/>
			))}
		</div>
        <Footer />
    </>
  )
}

export default DesignerDetail