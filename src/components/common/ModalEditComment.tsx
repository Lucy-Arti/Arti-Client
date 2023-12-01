import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components';

const ModalEditComment = (
    props:{
        openEditModal:boolean,
        setOpenEditModal:React.Dispatch<React.SetStateAction<boolean>>,
        setEditCompoOpen:React.Dispatch<React.SetStateAction<boolean>>,
    }) => {
    const totalHeight = document.documentElement.scrollHeight;
    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
      }, []);
    
      const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
        props.setOpenEditModal(false);
      }, []);

    useEffect(() => {
        if(props.openEditModal === true){
            lockScroll();
        } else {
            openScroll();
        }
    }, [props.openEditModal]);

    const handleOnClickEdit = (e:React.MouseEvent) => {
        e.stopPropagation();
        props.setEditCompoOpen(true);
        props.setOpenEditModal(false);
        console.log('edit');
    }

	return (
		<ModalSection height={totalHeight} onClick={() => props.setOpenEditModal(false)}>
			<ModalStyle onClick={(e) => handleOnClickEdit(e)}>댓글 수정</ModalStyle>
		</ModalSection>
	);
}

export default ModalEditComment

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
	@media (min-width: 576px) {
		width: 576px;
	}
`;
const ModalStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: fit-content;
	font-size: 1.5rem;
	font-weight: bold;
	color: rgba(241, 0, 0, 1);
	background-color: white;
	opacity: 90%;
	z-index: 5;
	padding: 2rem 0 2rem 0;
	position: absolute;
	/* margin-bottom: 7rem; */
	@media (min-width: 576px) {
		width: 100%;
	}
    &:hover{
        cursor: pointer;
    }
`;
