import { css } from '@emotion/react'
import Header from '../common/Header'

const MypageRecent = () => {
    const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
  return (
    <>
    <div css={flexColumn}>
        <Header where='최근 본 옷'/>
	</div>
    </>
  )
}

export default MypageRecent