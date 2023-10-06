import { css } from '@emotion/react'
import Header from '../common/Header'
import { GetRecentProductLists } from '@/apis/mypage';
import { useEffect, useState } from 'react';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';
import { ProductType } from '../list/ListView';
import SearchCard from '../search/SearchCard';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

const MypageRecent = () => {
  const productList : ProductType[] = [];
  const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
  const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [products, setProducts] = useState<ProductType[]>(productList);
  const [isExist, setIsExist] = useState(true);
  const navigate = useNavigate();

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
  
  const flexColumn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`

  const gridWrapper = css`
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
  `
  return (
    <>
    <div css={flexColumn}>
        <Header where='최근 본 옷'/>
	  </div>
    {
			(savedModalIsOpen === true) && <ModalProductSaved />
		}
		{
			(unsavedModalIsOpen === true) && <ModalProductUnsaved />
		}
    {
				isExist ? 
				<div css={gridWrapper}>
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
				</div>
				:
				<div
					css={css`
						display: flex;
						flex-direction: column;
						height: fit-content;
						justify-content: center;
						align-items: center;
					`}
				>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							margin-top: 50px;
							margin-bottom: 50px;
						`}
					>
						<div css={css`
							width: 20rem;
							margin-bottom: 5rem;
						`}>
							<img width="100%" src="/img/artiLogo.png" />
						</div>
						<div css={css`
							font-size: 2rem;
							text-align: center;
							font-weight: 600;
						`}>
							Arti와 함께
              <br />
              신진 디자이너들의 
              <br />
              유니크한 옷을 둘러보세요
						</div>
						<div css={css`
							display: flex;
							background-color: rgba(107, 218, 1, 1);
							/* background-color: #000000; */
							padding: 1rem 2rem 1rem 2rem;
							border-radius: 8px;
							margin-top: 4rem;
							font-size: 1.5rem;
							font-weight: 600;
              /* color: white; */
						`} onClick={()=>{navigate('/productlist')}}>둘러보기 바로가기</div>
					</div>
				</div>
			}
    <Footer />
    </>
  )
}

export default MypageRecent