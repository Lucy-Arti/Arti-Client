'use client'
import { getMarked, postMarked } from "@/apis/list"
import { isLoginAtom } from "@/app/recoilContextProvider"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useRecoilValue } from "recoil"
import styled from "styled-components"

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
    const route = useRouter();
    
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
            // console.log('post 성공');
            if (markState){
                setMarkState(false);
            } else {
                setMarkState(true);
            }
        }
    }
    useEffect(()=>{
        getMark();
    }, []);
    const handleMarkClick = () => {
        if(isUser){
            if (markState) {
                // setMarkState(false);
                postMark();
                props.setUnsavedModalIsOpen(true);
                // setIsSuccessed(false);
                setTimeout(() => {
                    props.setUnsavedModalIsOpen(false);
                }, 1000);
            } else {
                // setMarkState(true);
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

  return (
        <CardBox>
            <ImgBox $preview={props.preview!}>
                <GetHeight onClick={() => route.push(`/productlist/product?key=${props.clothesId}`)} />
                <div>
                    {
                        markState === true ?
                        <ImgDesign onClick={handleMarkClick} width = "30rem" src="/img/activeHeart.png" />
                        : <ImgDesign onClick={handleMarkClick} width = "30rem" src="/img/nonactiveHeartFill.png" />
                    }
                </div>
            </ImgBox>
            <FlexRow onClick={() => route.push(`/productlist/product?key=${props.clothesId}`)}>
                <ProfileWrapper>
                    <img width="80%" src="/img/profile-large.png"/>
                </ProfileWrapper>
                <ProfileName>
                    <div className="designer-name">{props.designerName}</div>
                    <div className="designer-noti">디자이너</div>
                </ProfileName>
            </FlexRow>
            <Header onClick={() => route.push(`/productlist/product?key=${props.clothesId}`)}>{props.clothesName}</Header>
        </CardBox>
  )
}

export default ListCard;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`
const ImgBox = styled.div<{$preview: string}>`
    display: flex;
    border-radius: 10px;
    background-image : ${(props) => `url(${props.$preview})`};
    background-position: top center;
    background-size: cover;
    width : 100%;
    height : 35rem;
    justify-content : flex-end;
    align-items : flex-end;
`

const GetHeight = styled.div`
    height: 35rem;
    width: 100%;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
`
const ProfileWrapper = styled.div`
    display: flex;
    width: 10%;
`
const ProfileName = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0.3rem;
    gap: 0.5rem;
    flex-wrap: wrap;
    & > .designer-name{
        font-size: 1.5rem;
        margin-left: 0.3rem;
        font-weight: 600;
    }
    & > .designer-noti{
        font-size: 1.5rem;
    }
`

const ImgDesign = styled.img`
    margin : 1rem;
`
const Header = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 1rem 2rem 1rem;
`