import { css } from "@emotion/react";
import {BiShareAlt} from "react-icons/bi"
// import HeaderSecond from "../common/HeaderSecond";
import Header from "../common/Header";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductDetail } from "@/apis/list";
import { useEffect, useState } from "react";
import { ProductType } from "./ListView";
import Footer from "../common/Footer";

const ProductDetail = () => {
    // const ProductDetail= {id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34, mark: true }
    const {idx} = useParams();
    const [productDetail, setProductDetail] = useState<ProductType>();
    const getProduct = async() => {
        const result = await GetProductDetail(idx!);
        if(result===false){
            alert("불러오기 오류 발생");
            navigate('/');
        } else {
            setProductDetail(result.data);
        }
    }
    useEffect(()=>{
        getProduct();
    }, [])
    
    const navigate = useNavigate();
    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
    const designerBox = css`
        display: flex;
        align-items : center;
        margin : 1rem 2rem 1rem 2rem;
        padding: 2rem 0 2rem 1rem;
        border-radius : 10px;
        background-color : white;
        filter:drop-shadow(0 0 0.3rem #9e9e9e);
    `
    const makebold = css`
        font-size: 2rem;
        margin-left: 1rem;
        font-weight: 600;
    `
    const fontsize = css`
        font-size: 2rem;
        margin-left: 0.5rem;
    `
    const Title = css`
        font-size: 2rem;
        font-weight: 600;
    `
    const flexrow = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin : 3rem 2rem 3rem 2rem;
        &.icon-box {
            margin : 0;
            gap: 1rem;
        }
    `
    const gapDesign = css`
        background-color: #f5f5f5;
        height: 1rem;
        width: 100%;
        margin-top: 2rem;
    `
  return (
    <>
        <div css={flexColumn}>
            <Header where='detail'/>
		</div>
        {
            (productDetail) &&
            <div>
                <img width="100%" src={`${productDetail.preview}`} />
                <div onClick={()=>navigate(`/designer/${productDetail.designerId}`)} css={designerBox}>
                    <img width = "30rem" src="/img/profileLogo.png" />
                    <div css={makebold}>{productDetail.designerName}</div>
                    <div css={fontsize}> 디자이너</div>
                </div>
                <div css={flexrow}>
                    <div css={Title}>{productDetail.clothesName}</div>
                    <div css={flexrow} className='icon-box'>
                        {
                            // (ProductDetail.score === true) ? 
                            // <img width = "30rem" src="/img/activeHeart.png" />
                            // : 
                            <img width = "30rem" src="/img/nonactiveHeart.png" />
                        }
                        <BiShareAlt size="3rem" />
                    </div>
                </div>
                <div css={gapDesign} />
                <div>
                    <img width="100%" src={`${productDetail.detailImg}`} />
                </div>
                <Footer />
            </div>
        }
    </>
  )
}

export default ProductDetail