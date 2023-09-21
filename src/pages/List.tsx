import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import ListCard, { CardBoxType } from '@/components/list/ListCard';

const List = () => {
	const ProductList = [
		{ id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34, mark: true },
		{ id: 23, designer: '민집', product: '새콤한 감귤 모자', like: 30, mark: true },
		{ id: 43, designer: '짜잉', product: '보송보송 츄리닝 바지', like: 25, mark: false },
		{ id: 24, designer: '비니', product: '프란체스카 올블랙 티셔츠', like: 20, mark: true },
		{ id: 39, designer: '브리', product: '짱멋진 롱스커트', like: 14, mark: true },
		{ id: 21, designer: '초록', product: '개구리 머리띠', like: 10, mark: false },
		{ id: 47, designer: '피터', product: '스파이더맨 거미줄', like: 5, mark: false },
		{ id: 14, designer: '상도', product: '상도역 출근룩', like: 7, mark: true },
	];

	const gridWrapper = css`
		display: grid;
		height: 80vh;
		margin: 2rem;
		/* border: 1px solid black; */
		grid-template-columns: repeat(2, 1fr);
  		grid-template-rows: repeat(3,1fr);
  		grid-auto-flow: row;
		grid-gap: 2rem;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	`
	const spaceBetween = css`
		justify-content: space-between;
	`
	const flexColumn = css`
		display: flex;
		flex-direction: column;
		align-items: center;
	`
	return (
		<>
			<div css={flexColumn}>
			<div className="headerLayout">
				<div css={spaceBetween} className='headerComponent'>
					<img src='/img/blackLogo.svg'/>
					<img src='/img/search.svg'/>
				</div>
			</div>
			</div>
			<NavBar />
			<div css={gridWrapper}>
				{ProductList.map((product:CardBoxType, idx:number) => (
					<ListCard 
						key={idx}
						id={product.id}
						designer={product.designer} 
						product={product.product}
						like={product.like}
						mark={product.mark} />
				))}
			</div>
		</>
	);
};

export default List;
