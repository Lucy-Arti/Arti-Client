import { css } from "@emotion/react"
import {FiChevronRight} from "react-icons/fi"

const MypageExternalContent = () => {
    const onClickToExternel = (url:string) => {
        window.open(url, "_blank");
    }
    const columnSort = css`
        display: flex;
        width: 90%;
        flex-direction: column; 
        margin-top: 2rem;
    `
    const menulist = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 1rem 2rem 1rem;
        border-bottom: 2px solid #f5f5f5;
        .text{
            font-size: 1.8rem;
        }
        &.last{
            border-bottom: none;
        }
        &:hover{
            cursor: pointer;
        }
    `
  return (
    <div css={columnSort}>
        {/* <div css={menulist}>
            <div className="text">이벤트</div>
            <FiChevronRight size="26px" />
        </div>
        <div css={menulist}>
            <div className="text">자주 묻는 질문</div>
            <FiChevronRight size="26px" />
        </div> */}
        <div css={menulist} onClick={() => onClickToExternel("https://arti.channel.io/")}>
            <div className="text">1:1문의</div>
            <FiChevronRight size="26px" />
        </div>
        <div className="last" css={menulist} onClick={() => onClickToExternel("https://forms.gle/rK4TQXT6uSXzDCrL8")}>
            <div className="text">입점 신청</div>
            <FiChevronRight size="26px" />
        </div>
    </div>
  )
}

export default MypageExternalContent