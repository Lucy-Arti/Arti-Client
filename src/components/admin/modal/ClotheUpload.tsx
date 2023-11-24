import { postNewProduct } from '@/apis/admin';
import React, { useState } from 'react';
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
		// If the click is on the black area (ModalSection), close the modal
		if (e.target === e.currentTarget) {
			handleModalBtn();
		}
	};

	return (
		<ModalSection 
    onClick={handleClick} height={totalHeight}>
			{children}
		</ModalSection>
	);
};

const ClotheUpload = ({ handleModalBtn, designerData, handleRefresh }: any) => {
	const totalHeight = document.documentElement.scrollHeight;
	const [type, setType] = useState<string>('');
	const [productName, setProductName] = useState<string>('');
	const [designerId, setDesignerId] = useState<any>();
	const [purchaseLink, setPurchaseLink] = useState<string>('');
	const [detailImg, setDetailImg] = useState<any>(null);
	const [thumbnailImg, setThumbnailImg] = useState<any>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!type || !productName || !designerId || !detailImg || !thumbnailImg) {
			alert('모든 필수 입력값을 입력해주세요.');
			return;
		}

		const formData = new FormData();
		formData.append('type', type);
		formData.append('name', productName);
		formData.append('designerId', designerId);
		formData.append('link', purchaseLink);
		formData.append('img', detailImg);
		formData.append('preview', thumbnailImg);

		const userConfirmed = window.confirm('상품을 업로드 하시겠습니까?');
		if (userConfirmed) {
			try {
				await postNewProduct(formData);
				alert('업로드 완료');
        handleModalBtn();
        handleRefresh();
			} catch (error) {
				console.error('Error update product:', error);
			}
		} else {
			return;
		}
	};

	return (
		<ModalSectionWrapper handleModalBtn={handleModalBtn} totalHeight={totalHeight}>
			<Form>
				<CloseButton onClick={handleModalBtn}>X</CloseButton>
				<Row>
					<Label htmlFor="type">구분</Label>
					<Select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
						<option value="">-- 선택하세요 --</option>
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

				<Button type="button" onClick={handleSubmit}>Submit</Button>
			</Form>
		</ModalSectionWrapper>
	);
};

export default ClotheUpload;

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
	height: ${(props) => props.height}px;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
`;

const CloseButton = styled.button`
	width: 90%;
	display: flex;
	justify-content: flex-end;
	font-size: 2.7rem;
	color: #b5b5bc;
	background-color: #fdfdfd;
	border: none;
	cursor: pointer;
`;

const Form = styled.form`
	width: 40%;
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
	font-size: 1.3rem;
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
	cursor: pointer;
	input {
		display: none;
	}
	span {
		font-size: 1.75rem;
		padding: 0.3rem 1rem;
	}
`;
