import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {CgInfo} from 'react-icons/cg'
import { FiChevronRight } from 'react-icons/fi';
import { VscKebabVertical } from "react-icons/vsc";
import { GetAllCmts } from '@/apis/comments';
import {CmtsType} from '@/types/request'
import CommentBox from './CommentBox';

interface CommentProps{
    pathname:string,
    rerenderCmts:boolean,
    setReRenderCmts: React.Dispatch<React.SetStateAction<boolean>>,
    setReplyName:React.Dispatch<React.SetStateAction<string>>,
    setCommentId:React.Dispatch<React.SetStateAction<number|undefined>>,
}

const Comment = (props:CommentProps) => {
    const [allCmts, setAllCmts] = useState<CmtsType[]>();

    const viewHeightNum = document.documentElement.clientHeight;
    const heightRef = useRef<HTMLDivElement>(null);

    const getCmts = async() => {
		const result = await GetAllCmts(props.pathname!);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			// console.log(result.data);
            setAllCmts(result.data);
		}
	}

    useEffect(() => {
        // console.log(viewHeightNum);
        getCmts();
        props.setReRenderCmts(false);
    }, [props.rerenderCmts === true]);

  return (
    <FlexColumn ref={heightRef} styledheight={viewHeightNum} currentheight={heightRef.current?.offsetHeight!}>
        { allCmts && 
            <>
            <div className='cmt-header'>{`댓글 ${allCmts.length}`}</div>
            <CmtWrapper>
                <CmtInfo>
                    <div className='left-side'>
                        <CgInfo />
                        <div>댓글을 작성하고 포인트를 받아보세요!</div>
                    </div>
                    <FiChevronRight />
                </CmtInfo>
                {
                    allCmts.length === 0 ? 
                    <div className='no-comments'>아직 댓글이 없습니다.</div>
                    :
                    allCmts.map((element:CmtsType, idx) => {
                        return(
                            <CommentBox 
                            key={idx} 
                            allCmts={element}
                            rerenderCmts={props.rerenderCmts}
                            setReplyName={props.setReplyName} 
                            setCommentId={props.setCommentId} 
                            setReRenderCmts={props.setReRenderCmts} />
                        );
                    })
                }
            </CmtWrapper>
            </>
        }
    </FlexColumn>
  )
}

export default Comment

const FlexColumn = styled.div<{styledheight:number, currentheight:number}>`
	display: flex;
	flex-direction: column;
	align-items: center;
    @media (min-height: ${props=>`${props.styledheight}px`}) {
		height: ${props=> props.styledheight > props.currentheight ? `${props.styledheight}px` : `${props.currentheight + 110}px`};
	}
    gap: 2rem;
    & > .cmt-header {
        display: flex;
        width: 90%;
        height: fit-content;
        margin-top: 5rem;
        font-weight: 600;
        font-size: 2rem;
        padding-bottom: 0;
        margin-bottom:0;
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
    & > .no-comments{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 1.5rem;
        font-size: 1.5rem;
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