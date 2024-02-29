import styled from 'styled-components';
import { getMarked, postMarked } from '@/apis/list';
import { RankData } from '@/types/request';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/app/recoilContextProvider';

type RankingCardPropsType = {
	data: RankData;
	index: number;
	setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = styled.div`
	width: 100%;
	display: flex;
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
	object-fit: cover;
	border-radius: 5px 0px 0px 5px;
`;

const Row = styled.div`
	display: flex;
	width: 100%;
`;

const HeartSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	width: 100%;
	img{
		cursor: pointer;
		width: 100%;
		object-fit: contain;
	}
`;

const DesignerName = styled.div<{ color: string }>`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.color};
`;

const ClothesName = styled.div`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 0.3rem;
`;

const RankingCard = (props: RankingCardPropsType) => {
	const [markState, setMarkState] = useState(false);
	const [isSuccessed, setIsSuccessed] = useState(false);
	const [like, setLikeNum] = useState<number>(props.data.likeCount);
	const isUser = useRecoilValue(isLoginAtom);
	const route = useRouter();

	const getMark = async () => {
		if (isUser) {
			const result = await getMarked(props.data.clothesId, localStorage.getItem('access'));
			if (result !== false) {
				setMarkState(result.data);
			}
		}
	};

	useEffect(() => {
		getMark();
	}, []);

	const postMark = async () => {
		const result = await postMarked(props.data.clothesId, localStorage.getItem('access'));
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			// console.log('post 성공');
			if (markState) {
				setMarkState(false);
				setLikeNum(cnt => cnt-1);
			} else {
				setMarkState(true);
				setLikeNum(cnt => cnt+1);
			}
		}
	};

	const handleMarkClick = () => {
		if (isUser) {
			if (markState) {
				postMark();
				props.setUnsavedModalIsOpen(true);
				setIsSuccessed(false);
				setTimeout(() => {
					props.setUnsavedModalIsOpen(false);
				}, 1000);
			} else {
				postMark();
				props.setSavedModalIsOpen(true);
				setIsSuccessed(false);
				setTimeout(() => {
					props.setSavedModalIsOpen(false);
				}, 1000);
			}
		} else {
			props.setLoginModalIsOpen(true);
		}
	};

	return (
		<Card>
			<Tag>
				<TagImg src={props.index === 0 ? '/img/greentag.png' : '/img/graytag.png'}/>
				<TagNumber>{props.index + 1}</TagNumber>
			</Tag>
			<Box>
				<Left onClick={() => route.push(`../../productlist/product?key=${props.data.clothesId}`)}>
					<ProductImg src={`${props.data.preview}`} />
				</Left>
				<Middle onClick={() => route.push(`../../productlist/product?key=${props.data.clothesId}`)}>
					<Row>
						<img src="/img/profileLogo.svg"/>
						<DesignerName color='black'>&nbsp;{props.data.designerName}&nbsp;</DesignerName>
						<DesignerName color='#535353'>디자이너</DesignerName>
					</Row>
					<ClothesName>{props.data.clothesName}</ClothesName>
				</Middle>
				<Right>
					<HeartSection>
						<img
							onClick={handleMarkClick}
							src={markState ? '/img/activeHeart.png' : '/img/nonactiveHeart.png'}
						/>
						<div>{like}</div>
					</HeartSection>
				</Right>
			</Box>
		</Card>
	);
};

export default RankingCard;
