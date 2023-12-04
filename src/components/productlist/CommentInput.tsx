import { PostBasicCmts, PostReply } from '@/apis/comments';
import { userPhotoAtom } from '@/app/recoilContextProvider';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components'

interface CommentInputProps {
    pathname:string,
    getFixed:string,
    replyName:string,
    commentId: number|undefined,
    rerenderCmts:boolean,
    setReRenderCmts: React.Dispatch<React.SetStateAction<boolean>>,
    setReplyName:React.Dispatch<React.SetStateAction<string>>,
    setCommentId: React.Dispatch<React.SetStateAction<number|undefined>>,
}

const CommentInput = (props:CommentInputProps) => {
    const [inputCmt, setInputCmt] = useState('');
    const [btnActive, setBtnActive] = useState('');
    const [holderText, setHolderText] = useState('자유롭게 의견을 남겨주세요.');
    const userProfile = useRecoilValue(userPhotoAtom);

    useEffect(()=>{
        console.log('commentinput rerender');
        props.setReplyName(() => '');
        props.setCommentId(() => undefined);
    }, [props.rerenderCmts]);

    //button onclick시 내용 없으면 안 넘어가도록
    useEffect(()=>{
        if(props.replyName === ''){
            setHolderText('자유롭게 의견을 남겨주세요.');
        } else {
            setHolderText(`${props.replyName}님에게 답글 남기는 중`);
        }
    }, [props.replyName])

    useEffect(()=>{
        if(inputCmt === ''){
            setBtnActive('');
        } else {
            setBtnActive('active');
        }
    }, [inputCmt])

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputCmt(e.target.value);
    }

    const resetInput = () => {
        setInputCmt('');
        // props.setReplyName('');
        // props.setCommentId(undefined);
        // setNewCmtId(() => undefined);
    }

    const postCmts = async(id:string, content:string, commentId:number|undefined) => {
        console.log(id, content, commentId);
        if(commentId===undefined) {
            const result = await PostBasicCmts(id, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                // console.log(result.data);
                // setInputCmt(null);
                resetInput();
                props.setReRenderCmts(true);
            }
        } else {
            const result = await PostReply(commentId, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                // console.log(result.data);
                // setInputCmt(null);
                resetInput();
                props.setReRenderCmts(true);
            }
        }
    }

    const handleKeyBoardEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            if(inputCmt !== ''){
                postCmts(props.pathname, inputCmt, props.commentId);
            }
        }
    }

  return (
    <FlexColumn className={props.getFixed}>
        <CmtInputWrapper>
            <div className='profile-img'>
                <img src={userProfile} width='100%' />
            </div>
            <InputBox>
                <input placeholder={holderText} value={inputCmt} onChange={(e)=>onChangeInput(e)} onKeyDown={(e) => handleKeyBoardEvent(e)}/>
                <InputBtn className={btnActive} onClick={()=>{postCmts(props.pathname, inputCmt, props.commentId)}}>입력</InputBtn>
            </InputBox>
        </CmtInputWrapper>
    </FlexColumn>
  )
}

export default CommentInput

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 100%;
    &.active{
        position: fixed;
		bottom: 0px;
        z-index: 1;
		@media (min-width: 576px) {
			width: 576px;
		}
    }
`;

const CmtInputWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    & > .profile-img{
        width: 4rem;
        height: 4rem;
        border-radius: 20px;
        overflow: hidden;
        & > img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const InputBox = styled.div`
    display: flex;
    width: 87%;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(168, 168, 168, 1);
    border-radius: 5px;
    height: 5rem;
    & > input{
        width: 80%;
        padding-left: 1rem;
        border: none;
        height: fit-content;
        font-size: 2rem;
        &:focus{
            outline: none;
        }
    }
`

const InputBtn = styled.div`
    display: flex;
    width: 15%;
    height: 3rem;
    border: none;
    border-radius: 5px;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 240, 240, 1);
    color: rgba(168, 168, 168, 1);
    &.active{
        color: black;
        background-color: rgba(165, 232, 101, 1);
        &:hover{
            cursor: pointer;
        }
    }
`