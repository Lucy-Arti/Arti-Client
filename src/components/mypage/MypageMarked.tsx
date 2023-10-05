import { css } from "@emotion/react"
import Header from "../common/Header"

const MypageMarked = () => {
    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
  return (
    <>
    <div css={flexColumn}>
        <Header where='저장한 옷'/>
	</div>
    </>
  )
}

export default MypageMarked