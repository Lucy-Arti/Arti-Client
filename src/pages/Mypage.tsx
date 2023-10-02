import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import Header from '@/components/common/Header';
import MypageUpperContent from '@/components/mypage/MypageUpperContent';
import MypageExternalContent from '@/components/mypage/MypageExternalContent';
import { css } from '@emotion/react';

const Mypage = () => {
	const ArticleWrapper = css`
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	`;
	const gapDesign = css`
		background-color: #f5f5f5;
		height: 1rem;
		width: 100%;
		margin-top: 2rem;
	`;

	return (
		<>
			<Header where="main" />
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
