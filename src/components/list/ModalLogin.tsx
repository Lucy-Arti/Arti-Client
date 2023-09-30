import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModalLogin = (props:{setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    // const viewportHeight = document.documentElement.clientHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const modalSection = css`
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 0;
        right: 50%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        height: ${totalHeight};
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        @media (min-width: 576px) {
            width: 576px;
        }
    `;
    const modalStyle = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30rem;
        height: fit-content;
        font-size: 1.5rem;
        font-weight: bold;
        background-color: #FFFFFF;
        border-radius: 5px;
        z-index: 1;
        @media (min-width: 576px) {
            width: 60%;
        }
    `;
    const buttonWrapper = css`
        display: flex;
        width: 100%;
        border-top: 1px solid #f3f3f3;
    `
    const buttonStyle = css`
        display: flex;
        text-align: center;
        justify-content: center;
        width: 49%;
        color: #535353;
        font-size: 1.5rem;
        margin: 2rem 0 2rem 0;
        &.right-button{
            border-left: 1px solid #f3f3f3;
            color: #7EDF22;
        }
    `

    return (
        <div css={modalSection}>
            <div css={modalStyle}>
                <div css={css`
                    margin: 4rem 0 4rem 0; 
                    text-align: center;`}>로그인 후<br />저장할 수 있어요</div>
                <div css={buttonWrapper}>
                    <div onClick={() => props.setLoginModalIsOpen(false)} css={buttonStyle}>취소</div>
                    <div onClick={() => navigate('/login')} className='right-button' css={buttonStyle}>로그인하기</div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin