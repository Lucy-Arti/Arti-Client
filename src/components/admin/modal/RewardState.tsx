import { patchReward } from '@/apis/admin';
import { GetDesignerDetail } from '@/apis/designer';
import React, { useEffect, useState } from 'react';
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

const RewardState = ({ handleModalBtn, rewardData, handleRefresh, dataId }: any) => {
	const totalHeight = document.documentElement.scrollHeight;
	const [status, setStatus] = useState<string>('');

	useEffect(() => {
		GetDesignerDetail(dataId).then((result) => {
			if (result && result.data) {
				setStatus(result.data.staus);
			}
		});
	}, [dataId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!status) {
			alert('현재 상태를 적어주세요');
			return;
		}
		const formData = new FormData();
		formData.append('status', status);

		const userConfirmed = window.confirm(`리워드 상태를 수정 하시겠습니까?`);
		if (userConfirmed) {
			try {
				await patchReward(formData, dataId);
				alert('상태 수정 완료');
				handleModalBtn();
				handleRefresh();
			} catch (error) {
				console.error('Error patch designer:', error);
			}
		} else {
			return;
		}
	};

	return (
		<ModalSectionWrapper handleModalBtn={handleModalBtn} totalHeight={totalHeight}>
			<Form>
				<Row>
					<Label htmlFor="status">현재상태 :</Label>
					<Input id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />
				</Row>
				<Button type="button" onClick={handleSubmit}>
					수정하기
				</Button>
			</Form>
		</ModalSectionWrapper>
	);
};

export default RewardState;

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

const ProductName = styled.div`
	display: flex;
	width: 80%;
	align-items: center;
	height: fit-content;
	max-height: 100px;
	overflow-y: scroll;
	flex-wrap: wrap;
	margin-bottom: 1.5rem;
	.productname {
		font-size: 1.5rem;
	}
`;
