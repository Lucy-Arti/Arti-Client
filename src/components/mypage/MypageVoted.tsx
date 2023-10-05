import { css } from "@emotion/react"
import Header from "../common/Header"
import { ProductType } from "../list/ListView";
import { useEffect, useState } from "react";
import { GetVotedProductLists } from "@/apis/mypage";
import ModalProductSaved from "../list/ModalProductSaved";
import ModalProductUnsaved from "../list/ModalProductUnsaved";
import ListCard from "../list/ListCard";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";

const MypageVoted = () => {
    const productList : ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
    const [products, setProducts] = useState<ProductType[]>(productList);
    const navigate = useNavigate();
    const getProductLists = async() => {
        const result = await GetVotedProductLists(localStorage.getItem("access"));
        if(result===false){
            alert("불러오기 오류 발생");
        } else {
            setProducts(productList.concat(result.data));
        }
    }

    useEffect(()=>{
        getProductLists();
    }, []);
    
    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
    const articleWrapper = css`
        display: flex;
        flex-direction: column;
        width: 98%;
        align-items: center;
    `
    const promoBox = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        background-color: rgba(232, 255, 211, 1);
        border-radius: 10px;
    `
    const gridWrapper = css`
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
    `
  return (
    <>
    <div css={flexColumn}>
        <Header where='투표한 옷'/>
	</div>
    <div css={articleWrapper}>
        <div css={promoBox}>
            <div css={css`
                display:flex;
                flex-direction:column;
                padding-top: 2rem;
                padding-bottom: 2rem;
                gap: 0.6rem;
            `}>
                <div css={css`
                    font-weight:400;
                    font-size: 1.5rem;
                    margin-left: 2rem;`}>
                        투표를 통해
                </div>
                <div css={css`
                    font-weight:600; 
                    font-size: 1.5rem; 
                    margin-left: 2rem;`}>
                    더 많은 옷들이 세상에 나올 수 있도록
                </div>
            </div>
            <img css={css`
                margin-right:2rem;
                :hover{
                    cursor:pointer;
                }
            `} 
            width="60rem" 
            src="/img/MypageToVote.png"
            onClick={()=>{navigate('/vote')}} />
        </div>
    </div>
		{
			(savedModalIsOpen === true) && <ModalProductSaved />
		}
		{
			(unsavedModalIsOpen === true) && <ModalProductUnsaved />
		}
		<div css={gridWrapper}>
			{
            products && products.map((product:ProductType, idx:number) => (
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
        <Footer />
    </>
  )
}

export default MypageVoted