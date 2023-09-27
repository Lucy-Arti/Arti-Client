import { css } from "@emotion/react"

const MypageExternalContent = () => {
    const columnSort = css`
        display: flex;
        width: 90%;
        flex-direction: column; 
        margin-top: 2rem;
    `
    const menulist = css`
        display: flex;
        justify-content: space-between;
        padding: 2rem 1rem 2rem 1rem;
        border-bottom: 2px solid #f5f5f5;
        .text{
            font-size: 1.8rem;
        }
        &.last{
            border-bottom: none;
        }
    `
  return (
    <div css={columnSort}>
        <div css={menulist}>
            <div className="text">이벤트</div>
            <div>아이콘</div>
        </div>
        <div css={menulist}>
            <div className="text">자주 묻는 질문</div>
            <div>아이콘</div>
        </div>
        <div css={menulist}>
            <div className="text">1:1문의</div>
            <div>아이콘</div>
        </div>
        <div className="last" css={menulist}>
            <div className="text">입점 신청</div>
            <div>아이콘</div>
        </div>
    </div>
  )
}

export default MypageExternalContent