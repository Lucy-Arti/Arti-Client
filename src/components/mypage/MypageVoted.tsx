import { css } from "@emotion/react"
import Header from "../common/Header"

const MypageVoted = () => {
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
            <img css={css`margin-right:2rem;`} width="60rem" src="/img/MypageToVote.png" />
        </div>
    </div>
    </>
  )
}

export default MypageVoted