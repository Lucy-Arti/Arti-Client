import { PostBasicCmts, PostReply } from '@/apis/comments';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface CommentInputProps {
    pathname:string,
    getFixed:string,
    replyName:string,
    commentId: number|undefined,
    setReRenderCmts: React.Dispatch<React.SetStateAction<boolean>>,
    setReplyName:React.Dispatch<React.SetStateAction<string>>,
}

const CommentInput = (props:CommentInputProps) => {
    const [inputCmt, setInputCmt] = useState('');
    const [btnActive, setBtnActive] = useState('');
    const [holderText, setHolderText] = useState('자유롭게 의견을 남겨주세요.');

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
    }

    const postCmts = async(id:string, content:string, commentId:number|undefined) => {
        if(commentId===undefined) {
            const result = await PostBasicCmts(id, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                console.log(result.data);
                // setInputCmt(null);
                resetInput();
                props.setReRenderCmts(true);
            }
        } else {
            const result = await PostReply(commentId, content);
            if(result === false){
                console.log('업로드 실패'); 
            } else {
                console.log(result.data);
                // setInputCmt(null);
                resetInput();
                props.setReRenderCmts(true);
            }
        }
    }

  return (
    <FlexColumn className={props.getFixed}>
        <CmtInputWrapper>
            <div className='profile-img'>
                <img src='/img/myProfile-1.png' width='100%' />
            </div>
            <InputBox>
                {/* <input placeholder={holderText} value={inputCmt!} onChange={(e)=>setInputCmt(e.target.value)} /> */}
                <input placeholder={holderText} value={inputCmt} onChange={(e)=>onChangeInput(e)} />
                <InputBtn className={btnActive} onClick={()=>{postCmts(props.pathname, inputCmt, props.commentId)}}>버튼</InputBtn>
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
        width: 3rem;
        height: fit-content;
    }
`

const InputBox = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgba(168, 168, 168, 1);
    border-radius: 5px;
    height: 4.5rem;
    & > input{
        width: 80%;
        padding-left: 1rem;
        border: none;
        height: fit-content;
        font-size: 1.5rem;
        &:focus{
            outline: none;
        }
    }
`

const InputBtn = styled.div`
    display: flex;
    width: 15%;
    height: 2.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
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