'use client'
import Header from '../common/Header';
import { useEffect, useState } from 'react';
import ModalLogin from '../common/ModalLogin';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import Footer from '../common/Footer';
import { ProductType } from '@/types/request';
import { GetDesignerDetail, GetDesignerProduct } from '@/apis/designer';
import SearchCard from '../search/SearchCard';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import {FaInstagram} from 'react-icons/fa'

type DesignerProfType = {
	userName: string;
	introduce: string;
};

const DesignerDetail = () => {
	// const { idx } = useParams();
    const withslashpathname = usePathname();
    const pathname = withslashpathname.replace('/designer/', '');
	const productList: ProductType[] = [];
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	const [sketchTab, setSketchTab] = useState('active');
	const [productTab, setProductTab] = useState('');

	const [products, setProducts] = useState<ProductType[]>(productList);
	const [designerProfile, setDesignerProfile] = useState<DesignerProfType>();

	const randomNum = Math.random() * 4;
	const randomNumFloor = Math.floor(randomNum);

	const handleTabBtn = async(tab:string) => {
		if(tab === 'sketch') {
			if(sketchTab === '') {
				setSketchTab('active');
				setProductTab('');
			}
		} else {
			if(productTab === '') {
				setProductTab('active');
				setSketchTab('');
			}
		}
	}

	const getDesigner = async () => {
		const result = await GetDesignerDetail(pathname!);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			setDesignerProfile(result.data);
		}
	};

	const getDesignersProducts = async () => {
		const result = await GetDesignerProduct(pathname!);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			setProducts(products.concat(result.data));
		}
	};

	useEffect(() => {
		getDesigner();
		getDesignersProducts();
	}, []);

	return (
		<DesignerSection>
			<FlexColumn>
				<Header where="detail" />
			</FlexColumn>
			<Gap90Wrapper>
				<InfoWrapper>
					<DesignerProfile>
						<DesignerBox>
							<div className='designerName'>
								{designerProfile?.userName}
							</div>
							<div>
								디자이너
							</div>
						</DesignerBox>
						<div className='instagram-noti'>인스타그램에서 새로운 옷들을 발견해 보세요!</div>
					</DesignerProfile>
					<div className='designer-profile-img'>
						<img width="100%" src={`/img/myProfile-${randomNumFloor}.png`} />
					</div>
				</InfoWrapper>
				<InstaBtn><FaInstagram size="2rem" />디자이너 인스타그램 구경하기</InstaBtn>
				<DesignerIntro>
					<div className='title'>💁 디자이너 소개</div>
					<IntroBox>
						<div className='content'>
							{designerProfile?.introduce &&
								designerProfile.introduce.split('\n').map((line, index) => (
								<div key={index}>
									{line}
									<br />
								</div>))}
						</div>
					</IntroBox>
				</DesignerIntro>
			</Gap90Wrapper>
			<GridTap>
				<GridBtn className={sketchTab} onClick={() => {handleTabBtn('sketch')}}>패션스케치</GridBtn>
				<GridBtn className={productTab} onClick={() => {handleTabBtn('product')}}>작품</GridBtn>
			</GridTap>
			{loginModalIsOpen === true && <ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />}
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			<GridWrapper>
				{products.map((product: ProductType, order: number) => (
					<SearchCard
						key={order}
						clothesId={product.clothesId}
						createdAt={product.createdAt}
						updatedAt={product.updatedAt}
						detailImg={product.detailImg}
						likeCount={product.likeCount}
						clothesName={product.clothesName}
						preview={product.preview}
						designerId={product.designerId}
						designerName={product.designerName}
						score={product.score}
						setSavedModalIsOpen={setSavedModalIsOpen}
						setUnsavedModalIsOpen={setUnsavedModalIsOpen}
						setLoginModalIsOpen={setLoginModalIsOpen}
					/>
				))}
			</GridWrapper>
			<Footer />
		</DesignerSection>
	);
};

export default DesignerDetail;

const DesignerSection = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;
const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Gap90Wrapper = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
	margin-bottom: 3rem;
`
const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    height: fit-content;
	justify-content: space-between;
    gap: 3rem;
    margin-top: 2rem;
	margin-bottom: 1rem;
	& > .designer-profile-img{
		width: 18%;
    	margin-left: 5rem;
	}
`;
const DesignerProfile = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
    width: 70%;
	gap: 1.5rem;
	& > .instagram-noti{
		font-weight: 200;
		font-size: 1.5rem;
	}
`
const DesignerBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	gap: 1rem;
	flex-wrap: wrap;
	& > div {
		font-weight: 400;
		font-size: 2rem;
		color: rgba(168, 168, 168, 1);
	}
	& > .designerName {
        font-weight: 800;
        font-size: 3rem;
		padding: 0;
		margin: 0;
		color: black;
    }
`
const InstaBtn = styled.div`
	display: flex;
	width: fit-content;
	padding: 1rem 1.5rem 1rem 1.5rem;
	background-color: rgba(85, 85, 85, 1);
	color: white;
	font-size: 1.5rem;
	gap: 0.5rem;
	border-radius: 10px;
`
const DesignerIntro = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 4rem;
	gap: 1rem;
	& > .title{
		font-size: 2rem;
		font-weight: 600;
	}
`
const IntroBox = styled.div`
	display: flex;
	background-color: rgba(250, 250, 250, 1);
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	& > .content{
		width: 90%;
		font-size: 1.5rem;
		font-weight: 200;
		padding: 2rem 0 2rem 0;
	}
`
const GridTap = styled.div`
	display: flex;
	width: 90%;
	flex-direction: row;
	margin-bottom: 1rem;
`
const GridBtn = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	font-size: 2rem;
	border-bottom: 1px solid rgba(198, 198, 198, 1);
	color: rgba(198, 198, 198, 1);
	padding-bottom: 1rem;
	&.active{
		color: black;
		border-color: black;
	}
	&:hover{
		cursor: pointer;
	}
`
const GridWrapper = styled.div`
    display: grid;
    margin: 2rem;
    /* border: 1px solid black; */
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(3,1fr); */
    grid-auto-flow: row;
    grid-gap: 2rem;
    &::-webkit-scrollbar {
        display: none;
    }
`;
