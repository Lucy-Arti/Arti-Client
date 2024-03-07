import React from 'react'
import styled from 'styled-components';

const RankingCardSkeleton = () => {
  return (
    <Card className='external'>
        {[...Array(20)].map((val, idx)=> (
            <Card>
                <Tag>
                    <TagImg src={idx === 0 ? '/img/greentag.png' : '/img/graytag.png'}/>
                    <TagNumber>{idx + 1}</TagNumber>
                </Tag>
                <Box>
                    <Left>
                        <ProductImg />
                    </Left>
                    <Middle>
                        <Row>
                            <DesignerName />
                        </Row>
                        <ClothesName />
                    </Middle>
                    <Right />
                </Box>
            </Card>
        ))}
    </Card>
  )
}

export default RankingCardSkeleton

const Card = styled.div`
	display: flex;
	width: 100%;
	gap: 2rem;
    &.external{
        gap: 2rem;
        flex-direction: column;
    }
`;

const Tag = styled.div`
	margin-top: 0.625rem;
	width: 14%;
	height: fit-content;
	z-index: 1;
	position: relative;
	display: flex;
`;

const TagImg = styled.img`
	width: 100%;
`;

const TagNumber = styled.div`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 500;
	position: absolute;
	z-index: 2;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	padding-left: 1.2rem;
	align-items: center;
`;

const Box = styled.div`
	display: flex;
	width: 92%;
	aspect-ratio: 3.18 / 1;
	border-radius: 5px;
	background: #fff;
	box-shadow: 4px 4px 14px -1px rgba(0, 0, 0, 0.1);
	justify-content: space-between;
	margin-left: -2.9rem;
`;

const Left = styled.div`
	height: 100%;
	width: 32.5%;
`;

const Middle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 2rem;
	height: 80%;
	width: 48%;
	margin-left: 1rem;
`;

const Right = styled.div`
	height: 100%;
	width: 8%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	color: #ff4b8c;
	gap: 0.22rem;
	margin-right: 1.9rem;
	object-fit: contain;
`;

const ProductImg = styled.img`
	width: 100%;
	height: 100%;
	background-color: #F0F0F0;
	border-radius: 5px 0px 0px 5px;
`;

const Row = styled.div`
	display: flex;
	width: 100%;
`;

const DesignerName = styled.div`
  width: 60%;
  height: 1.5rem;
  background-color: #F0F0F0;
`;

const ClothesName = styled.div`
	margin-top: 0.3rem;
    width: 90%;
    height: 2rem;
    background-color: #F0F0F0;
`;