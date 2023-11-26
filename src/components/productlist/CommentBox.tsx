import React, { useEffect, useState } from 'react'
import { VscKebabVertical } from 'react-icons/vsc'
import styled from 'styled-components'
import {CmtsType} from '@/types/request'
import {  PostHeartOnReply, PutHeartOnCmt } from '@/apis/comments'

interface CommentBoxProps {
    allCmts:CmtsType,
    rerenderCmts:boolean,
    setReplyName:React.Dispatch<React.SetStateAction<string>>,
    setCommentId: React.Dispatch<React.SetStateAction<number|undefined>>,
    setReRenderCmts: React.Dispatch<React.SetStateAction<boolean>>,
}


const CommentBox = (props:CommentBoxProps) => {
    const [replyOn, setReplyOn] = useState(false);

    useEffect(()=>{
        setReplyOn(false);
    }, [props.rerenderCmts === true]);
    
    const handleReplyClick = (username:string, commentId:number) => {
        if(replyOn===false){
            setReplyOn(true);
            props.setReplyName(username);
            props.setCommentId(commentId);
        } else {
            setReplyOn(false);
            props.setReplyName('');
            props.setCommentId(undefined);
        }
    }

    const handleHeartClick = async(id:number, type:string) => {
        if(type === 'comment'){
            const result = await PutHeartOnCmt(id);
            props.setReRenderCmts(true);
            // if(result === false){
            //     console.log('좋아요 업로드 실패');
            // } else {
            //     console.log('좋아요 업로드 완료');
            // }
        } else {
            const result = await PostHeartOnReply(id);
            props.setReRenderCmts(true);
            // if(result === false){
            //     console.log('좋아요 업로드 실패');
            // } else {
            //     console.log('좋아요 업로드 완료');
            // }
        }
    }

    const editCmt = async(id:number, type:string) => {

    }

  return (
    <CmtWrapper className='inside-wrapper'>
        <CmtBox>
            <div className='profile-box'>
                {
                    props.allCmts.member.profile === null ?
                    <img src='/img/myProfile-1.png' width='100%' />
                    :
                    <img src={props.allCmts.member.profile} width='100%' />
                }
            </div>
            <CmtContentBox>
                <CmtProfile>
                    <div className='profile-name'>{props.allCmts.member.userName}</div>
                    <div className='cmt-time'> {`• ${props.allCmts.createdAt.split('T')[0]}`}</div>
                </CmtProfile>
                <div className='content'>{props.allCmts.content}</div>
                <CmtUtils>
                    <UtilIconTextBox isclicked={replyOn} onClick={() => handleHeartClick(props.allCmts.id, 'comment')}>
                        <div className='img-box'>
                            {
                                props.allCmts.like === false ? 
                                <img src='/img/cmt-blankHeart.png' width='100%' />
                                :
                                <img src='/img/cmt-fullHeart.png' width='100%' />
                            }
                        </div>
                        {
                            props.allCmts.heart === null ? <div>{`좋아요 0`}</div> : <div>{`좋아요 ${props.allCmts.heart}`}</div>
                        }
                    </UtilIconTextBox>
                    <UtilIconTextBox className='reply-icon' isclicked={replyOn} onClick={() => handleReplyClick(props.allCmts.member.userName, props.allCmts.id)}>
                        <div className='img-box'>
                            <img src='/img/chat-alt.png' width='100%' />
                        </div>
                        <div>{`답글 ${props.allCmts.answers.length}`}</div>
                    </UtilIconTextBox>
                </CmtUtils>
            </CmtContentBox>
            <StyledVscKebabVertical size="2rem" />
        </CmtBox>
        {
            props.allCmts.answers.length === 0 ? 
            <></>
            :
            props.allCmts.answers.map((element, idx) => {
                return(
                    <CmtBox key={idx} className='reply-box'>
                        <div className='profile-box'>
                        {
                            element.member.profile === null ?
                            <img src='/img/myProfile-1.png' width='100%' />
                            :
                            <img src={element.member.profile} width='100%' />
                        }
                        </div>
                        <CmtContentBox>
                            <CmtProfile>
                                <div className='profile-name'>{element.member.userName}</div>
                                <div className='cmt-time'>{` • ${element.createdAt.split('T')[0]}`}</div>
                            </CmtProfile>
                            <div className='content'>{element.content}</div>
                            <CmtUtils>
                                <UtilIconTextBox isclicked={replyOn} onClick={() => handleHeartClick(element.id, 'reply')}>
                                    <div className='img-box'>
                                    {
                                        element.like === false ? 
                                        <img src='/img/cmt-blankHeart.png' width='100%' />
                                        :
                                        <img src='/img/cmt-fullHeart.png' width='100%' />
                                    }
                                    </div>
                                    {
                                        element.heart === null ? <div>좋아요 0</div> : <div>{`좋아요 ${element.heart}`}</div>
                                    }
                                </UtilIconTextBox>
                            </CmtUtils>
                        </CmtContentBox>
                        <StyledVscKebabVertical size="2rem" />
                    </CmtBox>
                )
            })
        }
    </CmtWrapper>
  )
}

export default CommentBox


const CmtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    &.inside-wrapper{
        width: 100%;
        margin-bottom: 2rem;
        gap: 2rem;
        align-items: flex-end;
    }
`

const CmtBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 2rem;
    &.reply-box{
        display: flex;
        width: 90%;
    }
    & > .profile-box{
        display: flex;
        width: 3rem;
        height: 3rem;
        border-radius: 20px;
        background-color: white;
        overflow: hidden;
        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const CmtContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 0.8rem;
    & > .content{
        font-weight: 400;
        font-size: 2rem;
    }
`

const CmtProfile = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    flex-wrap: wrap;
    & > .profile-name{
        font-size: 1.75rem;
    }
    & > .cmt-time{
        font-size: 1.75rem;
        color: rgba(149, 149, 149, 1);
    }
`

const CmtUtils = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 600;
    gap: 2rem;
`

const UtilIconTextBox = styled.div<{isclicked:boolean}>`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: rgba(168, 168, 168, 1);
    &.reply-icon{
        color: ${props => props.isclicked ? 'rgba(165, 232, 101, 1)':'rgba(168, 168, 168, 1)'};
    }
    & > .img-box{
        width: 1.5rem;
        height: fit-content;
    }
    &:hover{
        cursor: pointer;
    }
`

const StyledVscKebabVertical = styled(VscKebabVertical)`
    &:hover{
        cursor: pointer;
    }
`
