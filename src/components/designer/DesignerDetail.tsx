import { css } from '@emotion/react'
import Header from '../common/Header'
import { useEffect, useState } from 'react';
import ModalLogin from '../list/ModalLogin';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';
import Footer from '../common/Footer';
import { useParams } from 'react-router-dom';
import { ProductType } from '../list/ListView';
import { GetDesignerDetail, GetDesignerProduct } from '@/apis/designer';
import ListCard from '../list/ListCard';

type DesignerProfType = {
    userName : string,
    introduce : string
}

const DesignerDetail = () => {
    const {idx} = useParams();
    const productList : ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	const [products, setProducts] = useState<ProductType[]>(productList);
    const [designerProfile, setDesignerProfile] = useState<DesignerProfType>();

    const randomNum = ( Math.random() * 4 );
    const randomNumFloor = Math.floor(randomNum);

    const getDesigner = async() => {
        const result = await GetDesignerDetail(idx!);
        if(result === false){
            alert("불러오기 오류 발생");
        } else {
            setDesignerProfile(result.data);
        }
    }

    const getDesignersProducts = async() => {
        const result = await GetDesignerProduct(idx!);
        if(result===false) {
            alert("불러오기 오류 발생");
        } else {
            setProducts(products.concat(result.data));
        }
    }
    
    useEffect(()=>{
        getDesigner();
        getDesignersProducts();
    }, [])

    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
    const infoWrapper = css`
        display: flex;
        background-color: white;
        /* align-items: center; */
        height: fit-content;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        /* filter:drop-shadow(0 0.4rem 0.1rem #9e9e9e); */
        box-shadow: 0 0.5rem 0.5rem -0.3rem #9e9e9e;
        gap: 3rem;
        padding: 1rem 3rem 3rem 3rem;
    `
    const gridWrapper = css`
        display: grid;
        margin: 2rem;
        /* border: 1px solid black; */
        grid-template-columns: repeat(2, 1fr);
        /* grid-template-rows: repeat(3,1fr); */
        grid-auto-flow: row;
        grid-gap: 2rem;
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
        <img width="80rem" height="80rem" src={`/img/myProfile-${randomNumFloor}.png`} />
        <div css={css`
            display: flex;
            flex-direction: column;
        `}>
            <div css={css`
                font-weight: bolder;
                font-size: 3rem;
                margin: 1rem 0 1rem 0;
            `}>{designerProfile?.userName}</div>
            <div css={css`
                font-size: 1.5rem;
            `}>{`${designerProfile?.introduce}`}</div>
        </div>
    </div>
    <div css={css`
        font-size: 1.5rem;
        color: #535353;
        margin: 5rem 0 2rem 2rem;
    `}>{designerProfile?.userName} 디자이너가 디자인한 옷이에요</div>
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
			{products.map((product:ProductType, order:number) => (
				<ListCard 
                    key={order}
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
        <Footer />
    </>
  )
}

export default DesignerDetail