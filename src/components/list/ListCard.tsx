import { getMarked, postMarked } from "@/apis/list"
import { isLoginAtom } from "@/utils/state"
import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"

type CardBoxType = {
    clothesId: number,
	createdAt: string|null,
	updatedAt: string|null,
	detailImg: string|null,
	likeCount: number|null,
	clothesName: string|null,
	preview: string|null,
	designerId: number|null,
	designerName: string|null,
	score: number|null,
    setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ListCard = (props:CardBoxType) => {
    const [markState, setMarkState] = useState(false);
    // const [isSuccessed, setIsSuccessed] = useState(false);
    const isUser = useRecoilValue(isLoginAtom);
    
    const getMark = async() => {
        if (isUser){
            const result = await getMarked(props.clothesId, localStorage.getItem("access"));
            if(result!==false){
                setMarkState(result.data);
            }
        }
    }
    const postMark = async() => {
        const result = await postMarked(props.clothesId, localStorage.getItem("access"));
        if (result === false) {
            console.log('불러오기 오류 발생');
            //나중에 이 부분 모달창이나 alert창 필요해보임! + error코드 분기처리
        } else {
            console.log('post 성공');
        }
    }
    useEffect(()=>{
        getMark();
    }, []);
    const handleMarkClick = () => {
        if(isUser){
            if (markState) {
                setMarkState(false);
                postMark();
                props.setUnsavedModalIsOpen(true);
                // setIsSuccessed(false);
                setTimeout(() => {
                    props.setUnsavedModalIsOpen(false);
                }, 1000);
            } else {
                setMarkState(true);
                postMark();
                props.setSavedModalIsOpen(true);
                // setIsSuccessed(false);
                setTimeout(() => {
                    props.setSavedModalIsOpen(false);
                }, 1000);
            }
        } else {
            props.setLoginModalIsOpen(true);
        }
    }
    const cardBox = css`
		display: flex;
        flex-direction: column;
		height: fit-content;
	`
    const imgBox = css`
        display: flex;
        border-radius: 10px;
        background-image : url(${props.preview});
        background-position: top center;
        background-size: cover;
        width : 100%;
        height : 35rem;
        justify-content : flex-end;
        align-items : flex-end;
    `

    const header = css`
        font-size: 2rem;
        font-weight: 600;
        margin: 1rem 1rem 2rem 1rem;
    `
    const flexraw = css`
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-left: 1rem;
    `
    const makebold = css`
        font-size: 1.5rem;
        margin-left: 0.3rem;
        font-weight: 600;
    `
    const fontsize = css`
        font-size: 1.5rem;
        margin-left: 0.5rem;
    `
    const imgdesign = css`
        margin : 1rem;
    `
    const navigate = useNavigate();
  return (
        <div css={cardBox}>
            <div css={imgBox}>
                <div css={css`
                        height:35rem;
                        width:100%;
                    `} onClick={() => navigate(`${props.clothesId}`)} />
                <div>
                    {
                        markState === true ?
                        <img onClick={handleMarkClick} css={imgdesign} width = "30rem" src="/img/activeHeart.png" />
                        : <img onClick={handleMarkClick} css={imgdesign} width = "30rem" src="/img/nonactiveHeartFill.png" />
                    }
                </div>
            </div>
            <div onClick={() => navigate(`${props.clothesId}`)} css={flexraw}>
                <div css={css`
                    display: flex;
                    width: 10%;
                `}>
                    <img width="80%" src="/img/profile-large.png" loading="lazy"/>
                </div>
                <div css={makebold}>{props.designerName}</div>
                <div css={fontsize}> 디자이너</div>
            </div>
            <div onClick={() => navigate(`${props.clothesId}`)} css={header}>{props.clothesName}</div>
        </div>
  )
}

export default ListCard;