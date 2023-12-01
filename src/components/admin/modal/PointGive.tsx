import { givePoint, postNewDesigner } from '@/apis/admin';
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

const PointGive = ({ handleModalBtn, handleRefresh }: any) => {
	const totalHeight = document.documentElement.scrollHeight;
	const [memberId, setMemberId] = useState<string>();
	const [point, setPoint] = useState<string>();
	const [title, setTitle] = useState<string>();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
        if (!memberId || !point || !title) {
			alert('모든 필수 입력값을 입력해주세요.');
			return;
		}

		const formData = new FormData();
		formData.append('memberId', memberId);
		formData.append('point', point);
		formData.append('title', title);

		const userConfirmed = window.confirm(`포인트를 업데이트 하시겠습니까?`);
		if (userConfirmed) {
			try {
				await givePoint(formData);
				alert('업데이트 완료');
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

					<Label htmlFor="memberId">지급할 유저 id :</Label>
					<Input id="memberId" name="memberId" value={memberId} onChange={(e) => setMemberId(e.target.value)} />

					<Label htmlFor="memberId">지급할 포인트 :</Label>
					<Input id="point" name="point" value={point} onChange={(e) => setPoint(e.target.value)} />

					<Label htmlFor="memberId">항목 :</Label>
					<Input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />


				<Button type="button" onClick={handleSubmit}>
					지급하기
				</Button>
			</Form>
		</ModalSectionWrapper>
	);
};

export default PointGive;

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
    width: 70%;
`;

const Input = styled.input`
	padding: 0.5rem;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	width: 70%;
`;

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
	background-color: #007bff;
	color: #fff;
	border: none;
	cursor: pointer;
`;
