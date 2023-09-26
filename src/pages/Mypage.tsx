import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import { css } from '@emotion/react';
import MypageUpperContent from '@/components/mypage/MypageUpperContent';
import MypageExternalContent from '@/components/mypage/MypageExternalContent';

const Mypage = () => {
	const spaceBetween = css`
		justify-content: space-between;
	`
	const flexColumn = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	`
	const ArticleWrapper = css`
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	`
	const gapDesign = css`
		background-color: #f5f5f5;
		height: 1rem;
		width: 100%;
		margin-top: 2rem;
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
			<div css={ArticleWrapper}>
				<MypageUpperContent />
				<div css={gapDesign} />
				<MypageExternalContent />
			</div>
		</>
	);
};

export default Mypage;
