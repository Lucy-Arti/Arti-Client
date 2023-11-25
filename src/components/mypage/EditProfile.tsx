'use client'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { userNameAtom, userPhotoAtom } from '@/app/recoilContextProvider'
import Image from 'next/image'
import { LuCamera } from "react-icons/lu";

const EditProfile = () => {
    const userProfile = useRecoilValue(userPhotoAtom);
    const userName = useRecoilValue(userNameAtom);
    const [changedName, setChangedName] = useState(userName);
    const [btnActivate, setBtnActivate] = useState('');

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
            userProfile === '' ? 
            <>
            <ImgWrapper>
                <img src="/img/profile-large.png" />
                <EditBox className='use-image'>
                    <LuCamera size="60%" />
                </EditBox>
            </ImgWrapper>
            </>
            :
            <ImgBox $userprofile={userProfile}>
                <EditBox>
                    <LuCamera />
                </EditBox>
            </ImgBox>
        }
        <UserNameWrapper>
            <div className='nickname'>닉네임</div>
            <UserNameInput value={changedName} onChange={(e) => setChangedName(e.target.value)} />
        </UserNameWrapper>
        <CompletedBtn className={btnActivate}>수정 완료</CompletedBtn>
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
    border-radius: 20px;
    overflow: hidden;
    background-image: ${props=>`url(${props.$userprofile})`};
    justify-content: flex-end;
    align-items: flex-end;
`

const EditBox = styled.div`
    display: flex;
    width: 5rem;
    height: 5rem;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 240, 240, 1);
    overflow: hidden;
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