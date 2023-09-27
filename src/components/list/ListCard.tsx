import { css } from "@emotion/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import ModalProductSaved from "../common/ModalProductSaved"

export type ProductMapType = {
	id: number,
	designer: string,
	product: string,
	like: number,
	mark: boolean
}

type CardBoxType = {
    id: number,
	designer: string,
	product: string,
	like: number,
	mark: boolean,
    savedModalIsOpen : boolean,
    setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ListCard = (props:CardBoxType) => {
    const [markState, setMarkState] = useState(props.mark);
    // const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
    const handleMarkClick = () => {
        if (markState) {
            setMarkState(false);
        } else {
            setMarkState(true);
            props.setSavedModalIsOpen(true);
            setTimeout(() => {
                props.setSavedModalIsOpen(false);
            }, 1000);
        }
    }
    const cardBox = css`
		display: flex;
        flex-direction: column;
		height: fit-content;
	`
    const imgBox = css`
        display: flex;
        border-radius: 10px;
        background-image : url(/img/productsampleimg.png);
        background-position: top center;
        background-size: cover;
        width : 100%;
        height : 35rem;
        justify-content : flex-end;
        align-items : flex-end;
    `

    const header = css`
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem 1rem 2rem 1rem;
    `
    const flexraw = css`
        display: flex;
        margin-top: 1rem;
        margin-left: 1rem;
    `
    const makebold = css`
        font-size: 1.5rem;
        margin-left: 0.5rem;
        font-weight: bold;
    `
    const fontsize = css`
        font-size: 1.5rem;
        margin-left: 0.5rem;
    `
    const imgdesign = css`
        margin : 1rem;
    `
    const navigate = useNavigate();
  return (
        <div css={cardBox}>
            <div css={imgBox}>
                <div css={css`
                        height:35rem;
                        width:100%;
                    `} onClick={() => navigate(`${props.id}`)} />
                <div>
                    {
                        markState === true ?
                        <img onClick={handleMarkClick} css={imgdesign} width = "30rem" src="/img/activeHeart.png" />
                        : <img onClick={handleMarkClick} css={imgdesign} width = "30rem" src="/img/nonactiveHeart.png" />
                    }
                </div>
            </div>
            <div onClick={() => navigate(`${props.id}`)} css={flexraw}>
                <img src="/img/profileLogo.png" />
                <div css={makebold}>{props.designer}</div>
                <div css={fontsize}> 디자이너</div>
            </div>
            <div onClick={() => navigate(`${props.id}`)} css={header}>{props.product}</div>
        </div>
  )
}

export default ListCard;