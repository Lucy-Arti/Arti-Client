'use client'
import { getMarked, postMarked } from "@/apis/list"
import { isLoginAtom } from "@/app/recoilContextProvider"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useRecoilValue } from "recoil"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

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
    type: string,
    setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ListCard = (props:CardBoxType) => {
    const [markState, setMarkState] = useState(false);
    const [like, setLikeNum] = useState<number|null>(props.likeCount);
    const [ref, inView] = useInView({threshold: 0.01,}); //lazy-loading background img 구현용
    const [loading, setLoading] = useState("lazy"); //lazy-loading background img 구현용
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

    useEffect(() => {
        if(inView){
            setLoading(() => "");
        }
    }, [inView]);

    const handleMarkClick = () => {
        if(isUser){
            if (markState) {
                if (like !== null) {
					setLikeNum(like - 1);
				}
                setMarkState(false);
                postMark();
                props.setUnsavedModalIsOpen(true);
                setTimeout(() => {
                    props.setUnsavedModalIsOpen(false);
                }, 1000);
            } else {
                if (like !== null) {
					setLikeNum(like + 1);
				}
                setMarkState(true);
                postMark();
                props.setSavedModalIsOpen(true);
                setTimeout(() => {
                    props.setSavedModalIsOpen(false);
                }, 1000);
            }
        } else {
            props.setLoginModalIsOpen(true);
        }
    }

    const handleDetailClick = () => {
        if(props.type === 'sketch'){
            localStorage.setItem("list-sketch-scroll", String(window.scrollY));
        } else {
            localStorage.setItem("list-product-scroll", String(window.scrollY));
        }
        route.push(`/productlist/product?key=${props.clothesId}`);
    };

  return (
        <CardBox>
            <ImgBox className={loading} $preview={props.preview!} ref={ref}>
                <GetHeight onClick={() => handleDetailClick()} />
                <HeartSection>
                    {
                        markState === true ?
                        <ImgDesign onClick={handleMarkClick} width = "30rem" src="/img/activeHeart.png" />
                        : <ImgDesign onClick={handleMarkClick} width = "30rem" src="/img/nonactiveHeartFill.png" />
                    }
                    <div>{like}</div>
                </HeartSection>
            </ImgBox>
            <FlexRow onClick={() => handleDetailClick()}>
                <ProfileWrapper>
                    <img width="80%" src="/img/profile-large.png" loading="lazy"/>
                </ProfileWrapper>
                <ProfileName>
                    <div className="designer-name">{props.designerName}</div>
                    <div className="designer-noti">디자이너</div>
                </ProfileName>
            </FlexRow>
            <Header onClick={() => handleDetailClick()}>{props.clothesName}</Header>
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
    &.lazy{
        background-color: #C9C9C9;
    }
`

const GetHeight = styled.div`
    height: 35rem;
    width: 100%;
`

const HeartSection = styled.div`
	width: fit-content;
	display: flex;
    height: 20%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #ff4b8c;
    font-weight: 600;
`;

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