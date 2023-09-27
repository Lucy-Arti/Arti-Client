import { css } from "@emotion/react"

const ModalProductSaved = () => {
    const modalStyle = css`
        display: flex;
        justify-content : center;
        align-items: center;
        width : 30rem;
        height: 5rem;
        font-size: 1.5rem;
        font-weight: bold;
        background-color : #464646;
        /* z-index: 1;
        position: absolute;
        bottom: 3rem; */
    `
  return (
    <div css={css`
        display: flex;
        width: 90%;
        justify-content: center;
        align-items: center;
        z-index : 1;
        position: absolute;
        bottom: 3rem;
        background-color: transparent;
    `}>
    {/* <div> */}
        <div css={modalStyle}>상품이 저장되었어요</div>
    </div>
  )
}

export default ModalProductSaved