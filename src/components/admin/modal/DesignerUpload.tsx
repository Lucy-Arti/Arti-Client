import { postNewDesigner } from '@/apis/admin';
import React, { useState } from 'react';
import styled from 'styled-components';

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
		<ModalSection onClick={handleClick} height={totalHeight}>
			{children}
		</ModalSection>
	);
};

const DesignerUpload = ({ handleModalBtn, designerData, handleRefresh }: any) => {
	const totalHeight = document.documentElement.scrollHeight;
	const [introduce, setIntroduce] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [instagram, setInstagram] = useState<string>('https://');
	const [designerProfile, setDesignerProfile] = useState<any>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!userName) {
			alert('모든 필수 입력값을 입력해주세요. (이름, 인스타주소)');
			return;
		}

		const formData = new FormData();
		formData.append('userName', userName);
		formData.append('introduce', introduce);
		formData.append('instagram', instagram);
		formData.append('designerProfile', designerProfile);

		const userConfirmed = window.confirm(`${userName} 디자이너를 등록 하시겠습니까?`);
		if (userConfirmed) {
			try {
				await postNewDesigner(formData);
				alert('업로드 완료');
				handleModalBtn();
				handleRefresh();
			} catch (error) {
				console.error('Error add designer:', error);
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
					<Label htmlFor="userName">이름 :</Label>
					<Input id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
				</Row>

				<TextAreaInput>
					<Label htmlFor="introduce">소개글 :</Label>
					<StyledTextArea
						id="introduce"
						name="introduce"
						value={introduce}
						onChange={(e) => setIntroduce(e.target.value)}
					/>
				</TextAreaInput>

				<Row>
					<Label htmlFor="designerProfile">프로필 사진 :</Label>
					<CustomFileInput>
						<Input
							type="file"
							id="designerProfile"
							name="designerProfile"
							accept="image/*"
							onChange={(e) => setDesignerProfile(e.target.files?.[0])}
						/>
						<span>{designerProfile ? designerProfile.name : '파일 선택'}</span>
					</CustomFileInput>
				</Row>

				<Row>
					<Label htmlFor="instagram">인스타그램 :</Label>
					<Input
						id="instagram"
						name="instagram"
						value={instagram}
						placeholder="https 주소로 넣어주세요"
						onChange={(e) => setInstagram(e.target.value)}
					/>
				</Row>
				<Button type="button" onClick={handleSubmit}>
					등록하기
				</Button>
			</Form>
		</ModalSectionWrapper>
	);
};

export default DesignerUpload;

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

const StyledTextArea = styled.textarea`
	width: 100%;
	padding: 0.5rem;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	min-height: 200px;
	resize: none;
`;

const TextAreaInput = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin-bottom: 1.5rem;
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
