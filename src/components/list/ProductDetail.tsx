import { css } from "@emotion/react";
import {BiShareAlt} from "react-icons/bi"
import HeaderSecond from "../common/HeaderSecond";

const ProductDetail = () => {
    const ProductDetail= {id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34, mark: true }
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
        font-weight: bold;
    `
    const fontsize = css`
        font-size: 2rem;
        margin-left: 0.5rem;
    `
    const Title = css`
        font-size: 2rem;
        font-weight: bolder;
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
			<HeaderSecond />
		</div>
        <div>
            <img width="100%" src="/img/productsampleimg.png" />
            <div css={designerBox}>
                <img width = "30rem" src="/img/profileLogo.png" />
                <div css={makebold}>{ProductDetail.designer}</div>
                <div css={fontsize}> 디자이너</div>
            </div>
            <div css={flexrow}>
                <div css={Title}>{ProductDetail.product}</div>
                <div css={flexrow} className='icon-box'>
                    {
                        (ProductDetail.mark === true) ? 
                        <img width = "30rem" src="/img/activeHeart.png" />
                        : <img width = "30rem" src="/img/nonactiveHeart.png" />
                    }
                    <BiShareAlt size="3rem" />
                </div>
            </div>
            <div css={gapDesign} />
            <div><img width="100%" src="/img/mobileBanner1.png" /></div>
        </div>
    </>
  )
}

export default ProductDetail