import { css } from "@emotion/react"

export type CardBoxType = {
	id: number,
	designer: string,
	product: string,
	like: number,
	mark: boolean,
}

const ListCard = (props:CardBoxType) => {
    const cardBox = css`
		display: flex;
        flex-direction: column;
		height: fit-content;
        /* background-color: coral; */
	`
    const imgBox = css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const border = css`
        border-radius: 10px;
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
  return (
    <div css={cardBox}>
        <div css={imgBox}>
            <img css={border} width="100%" src="/img/productsampleimg.png" />
        </div>
        <div css={flexraw}>
            <img src="/img/profileLogo.png" />
            <div css={makebold}>{props.designer}</div>
            <div css={fontsize}> 디자이너</div>
        </div>
        <div css={header}>{props.product}</div>
    </div>
  )
}

export default ListCard;