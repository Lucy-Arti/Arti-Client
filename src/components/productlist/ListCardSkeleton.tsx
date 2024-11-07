import React from 'react'
import styled from 'styled-components';

const ListCardSkeleton = () => {
  return (
    <GridWrapper>
        {
            [...Array(8)].map(() => {
                return (
                    <CardBox>
                        <ImgBox />
                        <FlexRow>
                            <ProfileWrapper />
                            <ProfileName />
                        </FlexRow>
                        <Header />
                    </CardBox>
                );
            })
        }
    </GridWrapper>
  )
}

export default ListCardSkeleton

const GridWrapper = styled.div`
	display: grid;
	/* height: 80%; */
	margin: 2rem;
	/* border: 1px solid black; */
	grid-template-columns: repeat(2, 1fr);
	/* grid-template-rows: repeat(3,1fr); */
	grid-auto-flow: row;
	grid-gap: 2rem;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`
const ImgBox = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: #F0F0F0;
    width : 100%;
    height : 35rem;
    justify-content : flex-end;
    align-items : flex-end;
`

const GetHeight = styled.div`
    height: 35rem;
    width: 100%;
`
const FlexRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
`
const ProfileWrapper = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: #C9C9C9;
    border-radius: 20px;
`
const ProfileName = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 0.3rem;
    width: 90%;
    height: 2rem;
    background-color: #C9C9C9;
`

const Header = styled.div`
    width: 100%;
    height: 2rem;
    background-color: #C9C9C9;
    margin: 1rem 0rem 2rem 0rem;
`