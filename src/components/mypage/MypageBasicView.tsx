import { useRecoilValue } from "recoil";
import Header from "../common/Header"
import NavBar from "../common/NavBar"
import { isLoginAtom } from "@/utils/state";
import { css } from "@emotion/react";
import MypageUpperContent from "./MypageUpperContent";
import MypageExternalContent from "./MypageExternalContent";
import Login from "../login/Login";
import Footer from "../common/Footer";

const MypageBasicView = () => {
    const isLogin = useRecoilValue(isLoginAtom);
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
			{
				(isLogin) ? 
				<div css={ArticleWrapper}>
					<MypageUpperContent />
					<div css={gapDesign} />
					<MypageExternalContent />
					<div css={css`
						height: 10rem;
						width: 100%;
					`} />
					<Footer />
				</div>
				:
				<div>
					<div css={css`
						height:2rem;
						width: 100%;
					`} />
					<Login where='mypage' />
				</div>

			}
		</>
  )
}

export default MypageBasicView