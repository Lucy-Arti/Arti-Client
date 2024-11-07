'use client'
import { useRecoilValue } from "recoil";
import Header from "../common/Header"
import NavBar from "../common/NavBar"
import { isLoginAtom } from "@/app/recoilContextProvider";
import MypageExternalContent from "./MypageExternalContent";
import Login from "../login/Login";
import Footer from "../common/Footer";
import styled from "styled-components";
import MypageProfile from "./MypageProfile";
import MypagePointUtils from "./MypagePointUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ModalCannotInvite from "../common/ModalCannotInvite";

const MypageBasicView = () => {
    const isLogin = useRecoilValue(isLoginAtom);
	const [modalOpen, setModalOpen] = useState(false);
	const route = useRouter();

  return (
    <>
			<Header where="main" />
			<NavBar />
			{
				modalOpen && <ModalCannotInvite />
			}
			{
				(isLogin) ? 
				<ArticleWrapper>
					<ColumnWithWidthSort>
						<MypageProfile />
						{/* <MypagePointUtils /> */}
						<BtnWrapper>
							<BtnStyle onClick={() => route.push('/mypage/voted')}>
								<img width="35rem" src="/img/mypage-checkfile.png" />
								<div>투표한 일러스트</div>
							</BtnStyle>
							<BtnStyle onClick={() => route.push('/mypage/recent')}>
								<img width="35rem" src="/img/mypage-collection.png" />
								<div>최근 본 옷</div>
							</BtnStyle>
							<BtnStyle onClick={() => route.push('/mypage/marked')}>
								<img width="35rem" src="/img/mypage-heart.png" />
								<div>저장한 옷</div>
							</BtnStyle>
						</BtnWrapper>
					</ColumnWithWidthSort>
					<div className="mypage-gap" />
					<MypageExternalContent setModalOpen={setModalOpen} />
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
	& > .mypage-gap{
		background-color: #f5f5f5;
		height: 1rem;
		width: 100%;
		margin-top: 2rem;
	}
`;

const Blank = styled.div`
	height: 10rem;
	width: 100%;
`
const LoginBlank = styled.div`
	height:2rem;
	width: 100%;
`

const ColumnWithWidthSort = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
`;

const BtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const BtnStyle = styled.div`
	display: flex;
	flex-basis: 30%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	color: rgba(141, 141, 141, 1);
	font-size: 1.8rem;
	filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));
	border-radius: 8px;
	gap: 1rem;
	padding: 2.5rem 0 2.5rem 0;
	&:hover {
		cursor: pointer;
	}
`