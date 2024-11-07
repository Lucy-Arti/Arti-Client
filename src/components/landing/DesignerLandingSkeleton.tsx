import React from 'react'
import styled from 'styled-components'

const DesignerLandingSkeleton = () => {
  return (
    <Wrapper>{[...Array(3)].map((data,idx) => (
        <Card key={idx} />
    ))}</Wrapper>
  )
}

export default DesignerLandingSkeleton;

const Wrapper = styled.div`
    display: grid;
    width: 90%;
    height: auto;
    grid-template-columns: repeat(3, 1fr);
	grid-auto-flow: row;
	grid-gap: 20px;
    margin-top: 20px;
	&::-webkit-scrollbar {
		display: none;
	}
`

const Card = styled.div`
	/* position: relative; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 230px;
	object-fit: cover;
	overflow: hidden;
	border-radius: 11px;
	background-color: #F0F0F0;
`;