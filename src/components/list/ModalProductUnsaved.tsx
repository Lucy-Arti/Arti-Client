import { css } from '@emotion/react';

const ModalProductUnsaved = () => {
    const modalSection = css`
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        top: 0;
        right: 50%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        height: 100%;
        /* background-color: rgba(0, 0, 0, 0.5); */
        /* z-index: 1; */
        @media (min-width: 576px) {
            width: 576px;
        }
    `;
    const modalStyle = css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30rem;
        height: fit-content;
        font-size: 1.5rem;
        font-weight: bold;
        background-color: #f4f4f4;
        border-radius: 5px;
        opacity: 90%;
            z-index: 1;
        padding: 1rem 0 1rem 0;
        /* position: absolute; */
        margin-bottom: 7rem;
        @media (min-width: 576px) {
                width: 60%;
            }
        `;
    return (
        <div css={modalSection}>
            <div css={modalStyle}>상품 저장이 취소됐어요</div>
        </div>
    );
}

export default ModalProductUnsaved