'use client'
import { useRecoilValue } from "recoil";
import Header from "../common/Header"
import NavBar from "../common/NavBar"
import { isLoginAtom } from "@/app/recoilContextProvider";
import MypageUpperContent from "./MypageUpperContent";
import MypageExternalContent from "./MypageExternalContent";
import Login from "../login/Login";
import Footer from "../common/Footer";
import styled from "styled-components";

const MypageBasicView = () => {
    const isLogin = useRecoilValue(isLoginAtom);

  return (
    <>
			<Header where="main" />
			<NavBar />
			{
				(isLogin) ? 
				<ArticleWrapper>
					<MypageUpperContent />
					<GapDesign />
					<MypageExternalContent />
					<Blank />
					<Footer />
				</ArticleWrapper>
				:
				<div>
					<LoginBlank />
					<Login where='mypage' />
				</div>

			}
		</>
  )
}

export default MypageBasicView

const ArticleWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
`;
const GapDesign = styled.div`
	background-color: #f5f5f5;
	height: 1rem;
	width: 100%;
	margin-top: 2rem;
`;
const Blank = styled.div`
	height: 10rem;
	width: 100%;
`
const LoginBlank = styled.div`
	height:2rem;
	width: 100%;
`