import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {CgInfo} from 'react-icons/cg'
import { FiChevronRight } from 'react-icons/fi';
import { VscKebabVertical } from "react-icons/vsc";
import { GetAllCmts } from '@/apis/comments';
import {CmtsType} from '@/types/request'
import CommentBox from './CommentBox';

interface CommentProps{
    pathname:string,
    setReplyName:React.Dispatch<React.SetStateAction<string>>,
    setCommentId:React.Dispatch<React.SetStateAction<number|undefined>>,
}

const Comment = (props:CommentProps) => {
    const [allCmts, setAllCmts] = useState<CmtsType[]>();

    const viewHeightNum = document.documentElement.clientHeight;
    const getCmts = async() => {
		const result = await GetAllCmts(props.pathname!);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			console.log(result.data);
            setAllCmts(result.data);
		}
	}

    useEffect(() => {
        // console.log(viewHeightNum);
        getCmts();
    }, []);

  return (
    <FlexColumn styledheight={viewHeightNum}>
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
                    <div>댓글을 작성해주세요</div>
                    :
                    allCmts.map((element:CmtsType, idx) => {
                        return(
                            <CommentBox key={idx} setReplyName={props.setReplyName} setCommentId={props.setCommentId} allCmts={element} />
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

const FlexColumn = styled.div<{styledheight:number}>`
	display: flex;
	flex-direction: column;
	align-items: center;
    @media (min-height: ${props=>`${props.styledheight}px`}) {
		height: ${props=>`${props.styledheight}px`};
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