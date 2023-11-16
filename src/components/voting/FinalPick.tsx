'use client';
import { useRecoilValue } from 'recoil';
import { GetProductDetail } from '@/apis/list';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { userNameAtom } from '@/app/recoilContextProvider';
import { ProductType } from '@/types/request';

const FinalPick = () => {
	const params = useSearchParams();
	const route = useRouter();
	const targetId = params.get('id');
	const userName = useRecoilValue(userNameAtom);
	const [productDetail, setProductDetail] = useState<ProductType>();
	const getProduct = async () => {
		const result = await GetProductDetail(targetId!);
		if (result === false) {
			console.log('불러오기 오류 발생');
		} else {
			setProductDetail(result.data);
		}
	};
	useEffect(() => {
		getProduct();
	}, []);

	return (
		<FinalpickSection>
			<Background>
				<img id="heart1" src="/img/backgreenheart.png" />
				<img id="heart2" src="/img/backgreenheart.png" />
				<img id="heart3" src="/img/backgreenheart.png" />
			</Background>
			{productDetail && (
				<InfoSection>
					<PickText>
						<span className="black">{userName}</span> 님의 PICK
					</PickText>
					<Card>
						<img src={`${productDetail.preview}`} loading="lazy" />
						<Info>
							<InfoText>
								<Row>
									<img src="/img/profileLogo.svg" loading="lazy" />
									<span className="black">&nbsp;{productDetail.designerName}&nbsp;</span>디자이너
								</Row>
								<Row>
									<div className="black productName">{productDetail.clothesName}</div>
								</Row>
							</InfoText>
						</Info>
					</Card>
					<BtnSection>
						{/* <Btn1 onClick={() => route.push('../../')}>홈</Btn1> */}
						{/* <Btn2 onClick={() => route.push(`../../productlist/${targetId}`)}>옷 구경하기</Btn2> */}
					</BtnSection>
				</InfoSection>
			)}
		</FinalpickSection>
	);
};

export default FinalPick;

const FinalpickSection = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 130px;
`;
const Background = styled.div`
	background:
		linear-gradient(180deg, #6bda01 -11.87%, rgba(107, 218, 1, 0) 99%),
		rgba(255, 255, 255, 1) 40%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	z-index: 1;
	@media (min-width: 576px) {
		width: 576px;
	}
	#heart1 {
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: -9%;
		right: -10%;
		object-fit: contain;
	}
	#heart2 {
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: 18%;
		left: -10%;
		object-fit: contain;
	}
	#heart3 {
		position: absolute;
		width: 40%;
		min-width: 160px;
		top: 58%;
		right: 2%;
		object-fit: contain;
	}
`;

const InfoSection = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`;
const Card = styled.div`
	position: relative;
	width: 85%;
	object-fit: contain;
	overflow: hidden;
	display: flex;
	border-radius: 11px;
	margin-top: 35px;
	margin-bottom: 40px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 11px;
		z-index: 1;
	}
`;
const Info = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	position: absolute;
	z-index: 2;
	bottom: 0%;
	width: 100%;
	height: 241.348px;
	border-radius: 11px;
	background: linear-gradient(182deg, rgba(255, 255, 255, 0) 1.97%, rgba(255, 255, 255, 0.9) 79.42%);
`;
const PickText = styled.div`
	z-index: 1;
	color: #636363;
	font-size: 2rem;
	font-weight: 500;
	.black {
		color: black;
	}
	.productName {
		color: black;
		font-size: 3rem;
		font-weight: 500;
		line-height: normal;
	}
`;
const InfoText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	gap: 3px;
	margin-bottom: 15px;
`;
const Row = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	color: #636363;
	font-size: 2rem;
	font-weight: 500;
	.black {
		color: black;
	}
	.productName {
		color: black;
		font-size: 3rem;
		font-weight: 500;
		line-height: normal;
	}
	img {
		width: 5%;
	}
`;
const BtnSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 85%;
`;
const Btn1 = styled.div`
	color: white;
	font-size: 2rem;
	padding: 1.5rem 0rem;
	width: 45%;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	z-index: 3;
	background: linear-gradient(0deg, rgba(53, 53, 53, 0.8) 0%, rgba(53, 53, 53, 0.8) 100%), #fff;
`;
const Btn2 = styled.div`
	color: #464647;
	font-size: 2rem;
	padding: 1.25rem 0rem;
	width: 45%;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	z-index: 3;
	background: white;
`;
