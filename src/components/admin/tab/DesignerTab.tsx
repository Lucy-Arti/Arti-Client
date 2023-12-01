import React, { useEffect, useMemo, useState } from 'react';
import { DESIGNER_INFO_COLUMNS } from '../common/columns';
import { Column } from 'react-table';
import { DesignerInfoData } from '@/types/request';
import { getAllDesignerList } from '@/apis/admin';
import styled from 'styled-components';
import DesignerUpload from '../modal/DesignerUpload';
import DesignerModify from '../modal/DesignerModify';
import PaginationTable from '../common/PaginationTable';
import DesignerPagination from '../common/DesignerPagination';

const DesignerTab = () => {
	const columns: Column[] = useMemo(() => DESIGNER_INFO_COLUMNS, []);
	const [designerData, setDesignerData] = useState<DesignerInfoData[]>();
	const [selectedId, setSelectedId] = useState<number>();
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
	const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
	const [reload, setReload] = useState(false);

	const handleUpdateModalBtn = () => {
		if (isUpdateModalOpen) {
			setIsUpdateModalOpen(false);
			setSelectedId(undefined);
		} else {
			setIsUpdateModalOpen(true);
		}
	};

	const handleModifyModalBtn = () => {
		if (isModifyModalOpen) {
			setSelectedId(undefined);
			setIsModifyModalOpen(false);
		} else {
			setIsModifyModalOpen(true);
		}
	};

	const handleRefresh = () => {
		if (reload) {
			setReload(false);
		} else {
			setReload(true);
		}
	};

	const handleSetSelected = (data: DesignerInfoData) => {
		const id = data.designerId;
		setSelectedId(id);
		// console.log(id);
		handleModifyModalBtn();
	};
	useEffect(() => {
		const getData = async () => {
			try {
				const designerResponse = await getAllDesignerList();
				if (designerResponse && designerResponse.data) {
					setDesignerData(designerResponse.data.reverse());
				} else {
					console.log('Failed to fetch data');
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		getData();
	}, [reload]);

	return (
		<Section>
			{isUpdateModalOpen ? (
				<DesignerUpload handleModalBtn={handleUpdateModalBtn} handleRefresh={handleRefresh} />
			) : (
				<></>
			)}
			{selectedId ? (
				<DesignerModify
					handleModalBtn={handleModifyModalBtn}
					handleRefresh={handleRefresh}
					designerData={designerData}
					dataId={selectedId}
				/>
			) : (
				<></>
			)}
			<Top>
				<div className="title">디자이너</div>
				<Btn onClick={handleUpdateModalBtn}>+등록하기</Btn>
			</Top>
			{designerData ? (
				<DesignerPagination columns={columns} data={designerData} handleSetSelected={handleSetSelected} />
			) : (
				<></>
			)}
		</Section>
	);
};

export default DesignerTab;

const Section = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-y: scroll;
`;
const Top = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title {
		color: var(--Font1, #333);
		font-family: Pretendard;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: 3.5rem; /* 140% */
	}
`;
const Btn = styled.button`
	border: none;
	outline: none;
	text-decoration: none;
	-webkit-appearance: none;
	display: inline-flex;
	padding: 0.25rem 1.25rem;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
	color: var(--white, #fff);
	font-family: Pretendard;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	background: #000;
`;
