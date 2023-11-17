'use client'
import Header from '../common/Header'
import { GetRecentProductLists } from '@/apis/mypage';
import { useEffect, useState } from 'react';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import { ProductType } from '@/types/request';
import SearchCard from '../search/SearchCard';
import Footer from '../common/Footer';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const MypageRecent = () => {
  const productList : ProductType[] = [];
  const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
  const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductType[]>(productList);
  const [isExist, setIsExist] = useState(true);
  const route = useRouter();

  const getProductLists = async() => {
      const result = await GetRecentProductLists(localStorage.getItem("access"));
      if(result===false){
          console.log("불러오기 오류 발생");
      } else if (result.data.length === 0) {
          setIsExist(false);
      }else {
          setIsExist(true);
          var newArr: ProductType[] = [];
          var preData: ProductType[] = result.data;
          var arraySize = preData.length;
          for (let i = 0; i < arraySize; i++) {
            let element = preData.pop();
            if (element !== undefined){
              newArr.push(element);
            }
          }
          // newArr.push()
          setProducts(productList.concat(newArr));
      }
  }

  useEffect(()=>{
      getProductLists();
  }, []);
  
	return (
		<>
			<FlexColumn>
				<Header where="최근 본 옷" />
			</FlexColumn>
			{savedModalIsOpen === true && <ModalProductSaved />}
			{unsavedModalIsOpen === true && <ModalProductUnsaved />}
			{
				isExist ? 
				<GridWrapper>
				{products &&
					products.map((product: ProductType, idx: number) => (
						<SearchCard
							key={idx}
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
				:
				<NoticeWrapper>
					<NoticeBox>
						<div className='imgbox'>
							<img width="100%" src="/img/artiLogo.png" />
						</div>
						<div className='textbox'>
                            Arti와 함께
                            <br />
                            신진 디자이너들의 
                            <br />
                            유니크한 옷을 둘러보세요
						</div>
						<div className='button-style' onClick={()=>{route.push('/productlist')}}>둘러보기 바로가기</div>
					</NoticeBox>
				</NoticeWrapper>
			}
			
			<Footer />
		</>
	);
}

export default MypageRecent

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GridWrapper = styled.div`
    display: grid;
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
const NoticeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
`
const NoticeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    & > .imgbox {
        width: 20rem;
        margin-bottom: 5rem;
    }
    & > .textbox {
        font-size: 2rem;
        text-align: center;
        font-weight: 600;
    }
    & > .button-style{
        display: flex;
        background-color: rgba(107, 218, 1, 1);
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 8px;
        margin-top: 4rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`