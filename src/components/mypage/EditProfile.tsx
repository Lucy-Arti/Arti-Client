'use client'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../common/Header'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { userNameAtom, userPhotoAtom } from '@/app/recoilContextProvider'
import { LuCamera } from "react-icons/lu";
import { EditNickname, EditProfileImg } from '@/apis/mypage'

const EditProfile = () => {
    const [userProfile, setUserProfile] = useRecoilState(userPhotoAtom);
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [changedName, setChangedName] = useState(userName);
    const [btnActivate, setBtnActivate] = useState('');
    const [editDone, setEditDone] = useState(false);

    const [image, setImage] = useState(userProfile);
    const [imgIsChanges, setImgIsChanged] = useState(false);
    const [imgData, setImgData] = useState<FormData>();

    const fileInput = useRef<HTMLInputElement>(null)
  
    const handleImage = async (e: any) => {
        // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
        const file = e.target.files[0]
        if(!file) return
        
        // 이미지 화면에 띄우기
        const reader = new FileReader()
        // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
        reader.readAsDataURL(file)
        reader.onload = (e: any) => {
            if(reader.readyState === 2) {
                // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
                setImage(e.target.result)
            }
        }
        setBtnActivate('active');
        setImgIsChanged(true);
        const formData = new FormData();
        formData.append('image', file);
        setImgData(formData);
    }

    const handelChangeBtn = async() => {
        if(userName === changedName){
            //이미지만 바뀐 경우
            const responseImg = await EditProfileImg(imgData!)
            if(responseImg === false){
                console.log('오류발생');
                setBtnActivate('');
            } else {
                setUserProfile(responseImg.customProfile);
                setEditDone(true);
            }
        } else {
            if(imgIsChanges){
                //둘 다 바뀐 경우
                const responseName = await EditNickname(changedName);
                if(responseName === 1002) {
                    alert('닉네임 길이는 10자 이하만 가능합니다.');
                    setBtnActivate('');
                } else if(responseName === 1003) {
                    alert('이미 사용중인 닉네임이 존재합니다.');
                    setBtnActivate('');
                } else if(responseName === false) {
                    console.log('오류 발생');
                    setBtnActivate('');
                } else {
                    //이미지 변환 수행
                    const responseImg = await EditProfileImg(imgData!)
                    if(responseImg === false){
                        console.log('오류발생');
                        setBtnActivate('');
                    } else {
                        setUserProfile(responseImg.customProfile);
                        setUserName(responseName.nickName);
                        setEditDone(true);
                    }
                }
            } else {
                //이름만 바뀐 경우
                const responseName = await EditNickname(changedName);
                if(responseName === 1002) {
                    alert('닉네임 길이는 10자 이하만 가능합니다.');
                } else if(responseName === 1003) {
                    alert('이미 사용중인 닉네임이 존재합니다.');
                } else if(responseName === false) {
                    console.log('오류 발생');
                } else {
                    setUserName(responseName.nickName);
                    setEditDone(true);
                }
            }
        }
    }

    useEffect(() => {
        setChangedName(userName);
        setBtnActivate('');
        setImage(userProfile);
        setImgIsChanged(false);
    }, [editDone === true])


    useEffect(()=>{
        if(changedName === userName) {
            setBtnActivate('');
        } else if(changedName !== null || changedName !== '') {
            setBtnActivate('active');
        } else {
            setBtnActivate('');
        }
    }, [changedName]);

  return (
    <>
    <Header where="프로필 수정" />
    <ArticleWrapper>
        {
            // userProfile === '' ? 
            // <>
            // <ImgWrapper>
            //     <img src="/img/profile-large.png" />
            //     <EditBox className='use-image' htmlFor="input-file">
            //         <LuCamera size="60%" />
            //     </EditBox>
            //     <input type="file" name="image_URL" id="input-file" accept='image/*'
		    //     style={{ display : "none" }} ref={fileInput} onChange={(e) => handleImage(e)} />
            // </ImgWrapper>
            // </>
            // :
            <ImgBox $userprofile={image}>
                <EditBox htmlFor="input-file">
                    <LuCamera size="60%" />
                </EditBox>
                <input type="file" name="image_URL" id="input-file" accept='image/*'
		        style={{ display : "none" }} ref={fileInput} onChange={(e) => handleImage(e)} />
            </ImgBox>
        }
        <UserNameWrapper>
            <div className='nickname'>닉네임</div>
            <UserNameInput value={changedName} onChange={(e) => setChangedName(e.target.value)} />
        </UserNameWrapper>
        <CompletedBtn className={btnActivate} onClick={handelChangeBtn}>수정 완료</CompletedBtn>
    </ArticleWrapper>
    </>
  )
}

export default EditProfile

const ArticleWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
    margin-top: 5rem;
`;

const ImgWrapper = styled.div`
    display: flex;
    width: 15rem;
    height: 15rem;
    position: relative;
    z-index: -1;
    justify-content: flex-end;
    align-items: flex-end;
    & > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 80px;
    }
`

const ImgBox = styled.div<{$userprofile:string}>`
    display: flex;
    width: 15rem;
    height: 15rem;
    border-radius: 80px;
    /* overflow: hidden; */
    background-size: cover;
    background-image: ${props=>`url(${props.$userprofile})`};
    justify-content: flex-end;
    align-items: flex-end;
    &:hover{
        cursor: pointer;
    }
    & > input{
        width: 100%;
        height: 100%;
    }
`

const EditBox = styled.label`
    display: flex;
    width: 5rem;
    height: 5rem;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 240, 240, 1);
    overflow: hidden;
    z-index: 1;
    &.use-image{
        position: absolute;
    }
    &:hover{
        cursor: pointer;
    }
`

const UserNameWrapper = styled.div`
    display: flex;
    width: 80%;
    margin-top: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    & > .nickname{
        font-size: 1.7rem;
        color: rgba(189, 189, 189, 1);
        font-weight: 600;
    }
`

const UserNameInput = styled.input`
    display: flex;
    width: 100%;
    border-radius: 6px;
    border : 1px solid #BDBDBD;
    font-size: 2rem;
    color: rgba(56, 56, 56, 1);
    font-weight: 500;
    padding: 1rem 0.5rem 1rem 0.5rem;
`

const CompletedBtn = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    color: rgba(168, 168, 168, 1);
    font-size: 2rem;
    font-weight: 500;
    border-radius: 0.875rem;
    background-color: #F0F0F0;
    margin-top: 5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    &.active{
        color: black;
        background-color: rgba(165, 232, 101, 1);
        &:hover{
            cursor: pointer;
        }
    }
`