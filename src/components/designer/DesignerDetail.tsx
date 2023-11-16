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

	const [products, setProducts] = useState<ProductType[]>(productList);
	const [designerProfile, setDesignerProfile] = useState<DesignerProfType>();

	const randomNum = Math.random() * 4;
	const randomNumFloor = Math.floor(randomNum);

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
			<InfoWrapper>
				<ImgBox>
					<img width="100%" src={`/img/myProfile-${randomNumFloor}.png`} />
				</ImgBox>
				<DesignerInfo>
					<div className='designerName'>
						{designerProfile?.userName}
					</div>
					<div className='designerIntro'>
						{designerProfile?.introduce &&
							designerProfile.introduce.split('\n').map((line, index) => (
								<div key={index}>
									{line}
									<br />
								</div>
							))}
					</div>
				</DesignerInfo>
			</InfoWrapper>
			<GridInfo>
				{designerProfile?.userName} 디자이너가 디자인한 옷이에요
			</GridInfo>
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
    /* align-items: center; */
    overflow-x: hidden;
`;
const FlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InfoWrapper = styled.div`
    /* max-width: 100%; */
    width: 100%;
    display: flex;
    background-color: white;
    /* align-items: center; */
    height: fit-content;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    /* filter:drop-shadow(0 0.4rem 0.1rem #9e9e9e); */
    box-shadow: 0 0.5rem 0.5rem -0.3rem #9e9e9e;
    gap: 3rem;
    padding: 1rem 0rem 3rem 0rem;
`;
const ImgBox = styled.div`
    width: 20%;
    margin-left: 5rem;
`
const DesignerInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    width: 70%;
    & > .designerName {
        font-weight: bolder;
        font-size: 3rem;
        margin: 1rem 0 1rem 0;
    }
    & > .deginerIntro {
        font-size: 1.5rem;
    }
`
const GridInfo = styled.div`
    font-size: 1.5rem;
    color: #535353;
    margin: 40px 0 16px 25px;
    width: 90%;
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
