import React, { useState } from 'react'
import styled from 'styled-components';
import {CgInfo} from 'react-icons/cg'
import { FiChevronRight } from 'react-icons/fi';
import { VscKebabVertical } from "react-icons/vsc";

const Comment = (props:{pathname:string, setReplyName:React.Dispatch<React.SetStateAction<string>>}) => {
    const [replyOn, setReplyOn] = useState(false);
    const handleReplyClick = () => {
        if(replyOn===false){
            setReplyOn(true);
            props.setReplyName('이름');
        } else {
            setReplyOn(false);
            props.setReplyName('');
        }
    }
  return (
    <FlexColumn>
        <div className='cmt-header'>댓글 5</div>
        <CmtWrapper>
            <CmtInfo>
                <div className='left-side'>
                    <CgInfo />
                    <div>댓글을 작성하고 포인트를 받아보세요!</div>
                </div>
                <FiChevronRight />
            </CmtInfo>
            <CmtWrapper className='inside-wrapper'>
                <CmtBox>
                    <div className='profile-box'>
                        <img src='/img/myProfile-1.png' width='100%' />
                    </div>
                    <CmtContentBox>
                        <CmtProfile>
                            <div className='profile-name'>이름</div>
                            <div className='cmt-time'> • 1시간 전</div>
                        </CmtProfile>
                        <div className='content'>댓글 내용</div>
                        <CmtUtils>
                            <UtilIconTextBox clicked={replyOn}>
                                <div className='img-box'>
                                    <img src='/img/cmt-blankHeart.png' width='100%' />
                                </div>
                                <div>좋아요 3</div>
                            </UtilIconTextBox>
                            <UtilIconTextBox className='reply-icon' clicked={replyOn} onClick={handleReplyClick}>
                                <div className='img-box'>
                                    <img src='/img/chat-alt.png' width='100%' />
                                </div>
                                <div>댓글 1</div>
                            </UtilIconTextBox>
                        </CmtUtils>
                    </CmtContentBox>
                    <StyledVscKebabVertical size="2rem" />
                </CmtBox>
                <CmtBox className='reply-box'>
                    <div className='profile-box'>
                        <img src='/img/myProfile-1.png' width='100%' />
                    </div>
                    <CmtContentBox>
                        <CmtProfile>
                            <div className='profile-name'>이름</div>
                            <div className='cmt-time'> • 1시간 전</div>
                        </CmtProfile>
                        <div className='content'>댓글 내용이 완전 짱 ㅣㄱㄹ어지면어떻게댈까여? 테스트중 ㅋㅋ</div>
                        <CmtUtils>
                            <UtilIconTextBox clicked={replyOn}>
                                <div className='img-box'>
                                    <img src='/img/cmt-blankHeart.png' width='100%' />
                                </div>
                                <div>좋아요 3</div>
                            </UtilIconTextBox>
                        </CmtUtils>
                    </CmtContentBox>
                </CmtBox>
            </CmtWrapper>
        </CmtWrapper>
    </FlexColumn>
  )
}

export default Comment

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    gap: 2rem;
    & > .cmt-header {
        display: flex;
        width: 90%;
        margin-top: 5rem;
        font-weight: 600;
        font-size: 2rem;
    }
`;

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

const CmtInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    background-color: rgba(249, 249, 249, 1);
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1rem;
    justify-content: space-between;
    margin-bottom: 3rem;
    & > .left-side{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
`;

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
        height: fit-content;
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

const UtilIconTextBox = styled.div<{clicked:boolean}>`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    color: rgba(168, 168, 168, 1);
    &.reply-icon{
        color: ${props => props.clicked ? 'rgba(165, 232, 101, 1)':'rgba(168, 168, 168, 1)'};
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