import { patchProduct, postNewProduct } from '@/apis/admin';
import { GetProductDetail } from '@/apis/list';
import { ClothesInfoData } from '@/types/request';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Designer {
	designerId: number;
	userName: string;
}

const ModalSectionWrapper = ({
	children,
	handleModalBtn,
	totalHeight,
}: {
	children: React.ReactNode;
	handleModalBtn: () => void;
	totalHeight: number;
}) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			handleModalBtn();
		}
	};

	return (
		<ModalSection onClick={handleClick} height={totalHeight}>
			{children}
		</ModalSection>
	);
};

const ClotheModify = ({ handleModalBtn, designerData, handleRefresh, dataId }: any) => {
	const totalHeight = document.documentElement.scrollHeight;
	const [type, setType] = useState<string>();
	const [productName, setProductName] = useState<string>();
	const [designerId, setDesignerId] = useState<any>();
	const [purchaseLink, setPurchaseLink] = useState<string>();
	const [currentdetailImg, setcurrentDetailImg] = useState<any>();
	const [currentthumbnailImg, setcurrentThumbnailImg] = useState<any>();
	const [detailImg, setDetailImg] = useState<any>();
	const [thumbnailImg, setThumbnailImg] = useState<any>();

	useEffect(() => {
		GetProductDetail(dataId).then((result) => {
			if (result && result.data) {
				setType(result.data.type);
				setProductName(result.data.clothesName);
				setDesignerId(result.data.designerId);
				setPurchaseLink(result.data.purchaseLink);
				setcurrentDetailImg(result.data.detailImg);
				setcurrentThumbnailImg(result.data.preview);
			}
		});
	}, [dataId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!type || !productName || !designerId) {
			alert('모든 필수 입력값을 입력해주세요. (타입, 상품이름, 디자이너)');
			return;
		}

		const formData = new FormData();
		if (type) {
			formData.append('type', type);
		}
		if (productName) {
			formData.append('name', productName);
		}
		if (designerId) {
			formData.append('designerId', designerId);
		}
		if (purchaseLink) {
			formData.append('link', purchaseLink);
		}
		if (detailImg) {
			formData.append('img', detailImg);
		}
		if (thumbnailImg) {
			formData.append('preview', thumbnailImg);
		}

		const userConfirmed = window.confirm('정보를 수정하시겠습니까?');
		if (userConfirmed) {
			try {
				await patchProduct(formData, dataId);
				alert('수정 완료');
				handleModalBtn();
				handleRefresh();
			} catch (error) {
				console.error('Error patch product:', error);
			}
		} else {
			return;
		}
	};

	return (
		<ModalSectionWrapper handleModalBtn={handleModalBtn} totalHeight={totalHeight}>
			<CloseButton onClick={handleModalBtn}>
				<div className="close">X</div>
			</CloseButton>
			<Form>
				<Row>
					<Label htmlFor="type">구분</Label>
					<Select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
						<option value=""> </option>
						<option value="product">product</option>
						<option value="sketch">sketch</option>
					</Select>
				</Row>

				<Row>
					<Label htmlFor="productName">옷이름</Label>
					<Input
						id="productName"
						name="productName"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
				</Row>

				<Row>
					<Label htmlFor="designerName">디자이너</Label>
					<Select id="designerId" name="designerId" value={designerId} onChange={(e) => setDesignerId(e.target.value)}>
						<option value="">-- 선택하세요 --</option>
						{designerData?.map((designer: Designer) => (
							<option key={designer.designerId} value={designer.designerId}>
								{designer.userName}
							</option>
						))}
					</Select>
				</Row>

				<Row>
					<Label htmlFor="detailImg">상세이미지</Label>
					<img src={currentdetailImg} width={40} alt="상세이미지 미리보기" />
					<CustomFileInput>
						<Input
							type="file"
							id="detailImg"
							name="detailImg"
							accept="image/*"
							onChange={(e) => setDetailImg(e.target.files?.[0])}
						/>
						<span>{detailImg ? detailImg.name : '파일 선택'}</span>
					</CustomFileInput>
				</Row>

				<Row>
					<Label htmlFor="thumbnailImg">썸네일이미지</Label>
					<img src={currentthumbnailImg} width={40} alt="썸네일이미지 미리보기" />
					<CustomFileInput>
						<Input
							type="file"
							id="thumbnailImg"
							name="thumbnailImg"
							accept="image/*"
							onChange={(e) => setThumbnailImg(e.target.files?.[0])}
						/>
						<span>{thumbnailImg ? thumbnailImg.name : '파일 선택'}</span>
					</CustomFileInput>
				</Row>

				<Row>
					<Label htmlFor="purchaseLink">구매링크</Label>
					<Input
						id="purchaseLink"
						name="purchaseLink"
						value={purchaseLink}
						onChange={(e) => setPurchaseLink(e.target.value)}
					/>
				</Row>

				<Button type="button" onClick={handleSubmit}>
					수정하기
				</Button>
			</Form>
		</ModalSectionWrapper>
	);
};

export default ClotheModify;

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	/* height: ${(props) => props.height}px; */
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
	overflow: scroll;
	img {
		max-height: 15rem;
	}
`;

const CloseButton = styled.div`
	width: 45%;
	display: flex;
	justify-content: flex-end;
	font-size: 2.7rem;
	border: none;
	position: relative;
	margin-bottom: -3%;
	.close {
		width: 10%;
		cursor: pointer;
	}
`;

const Form = styled.form`
	width: 40%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 1.25rem;
	padding: 4rem 1rem;
	margin-bottom: 1rem;
`;

const Label = styled.label`
	font-size: 0.8rem;
	margin-bottom: 0.5rem;
	color: var(--black, #383838);
	font-family: Pretendard;
	font-size: 2rem;
	font-style: normal;
	font-weight: 500;
	padding-right: 2rem;
`;

const Input = styled.input`
	padding: 0.5rem;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	width: 70%;
`;

const Select = styled.select`
	padding: 0.5rem;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
	background-color: #007bff;
	color: #fff;
	border: none;
	cursor: pointer;
`;

const Row = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 1.5rem;
`;

const CustomFileInput = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 3px;
	border: 1px solid black;
	font-size: 1.75rem;
	margin-left: 2rem;
	cursor: pointer;
	input {
		display: none;
	}
	span {
		font-size: 1.75rem;
		padding: 0.3rem 1rem;
	}
`;
