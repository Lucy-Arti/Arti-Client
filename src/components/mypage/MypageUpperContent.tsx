import { userEmailAtom, userNameAtom } from "@/utils/state"
import { css } from "@emotion/react"
import { useRecoilValue } from "recoil"

const MypageUpperContent = () => {
    const userName = useRecoilValue(userNameAtom);
    const userEmail = useRecoilValue(userEmailAtom);
    const columnSort = css`
        display: flex;
        width: 90%;
        flex-direction: column; 
    `
    const profileWrapper = css`
        display: flex;
        margin: 2rem 0 3rem 0;
        align-items: center;
    `
    const profileText = css`
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    `
    const Title = css`
        font-size: 3rem;
        font-weight: bolder;
        margin-bottom: 1rem;
    `
    const BtnWrapper = css`
        display: flex;
        filter:drop-shadow(0 0 0.3rem #9e9e9e);
        background-color: white;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        /* grid-template-columns: repeat(3, 1fr);
        grid-gap: 2px; */
        /* background-color: #f3f3f3; */
    `
    const btnStyle = css`
        display: flex;
        flex-basis: 33%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: white; */
        gap: 1.5rem;
        padding: 3rem 0 3rem 0;
        &:hover{
            cursor: pointer;
        }
        &.start{
            border-right: 2px solid #f3f3f3;
        }
        &.last{
            border-left: 2px solid #f3f3f3;
        }
    `
    const MenuText = css`
        font-size: 1.5rem;
    `

  return (
    <div css={columnSort}>
        <div css={profileWrapper}>
            <img width="15%" src="/img/profile-large.png" />
            <div css={profileText}>
                <div css={Title}>{userName}</div>
                <div css={MenuText}>{userEmail}</div>
            </div>
        </div>
        <div css={BtnWrapper}>
            <div className="start" css={btnStyle}>
                <img src="/img/mypageVoteBtn.png" />
                <div css={MenuText}>투표한 옷</div>
            </div>
            <div css={btnStyle}>
                <img src="/img/mypageRecentBtn.png" />
                <div css={MenuText}>최근 본 옷</div>
            </div>
            <div className="last" css={btnStyle}>
                <img src="/img/mypageHeart.png" />
                <div css={MenuText}>저장한 옷</div>
            </div>
        </div>
    </div>
  )
}

export default MypageUpperContent