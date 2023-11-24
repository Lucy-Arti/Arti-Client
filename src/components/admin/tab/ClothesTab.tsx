import React, { useEffect, useMemo, useState } from 'react';
import { Column } from 'react-table';
import styled from 'styled-components';
import { CLOTHES_INFO_COLUMNS } from '../common/columns';
import { ClothesInfoData } from '@/types/request';
import PaginationTable from '../common/PaginationTable';
import { GetAllProductLists } from '@/apis/list';
import ClotheUpload from '../modal/ClotheUpload';
import { getAllDesignerList } from '@/apis/admin';
import ClotheModify from '../modal/ClotheModify';

const ClothesTab = () => {
	const columns: Column[] = useMemo(() => CLOTHES_INFO_COLUMNS, []);
	const [productData, setProductData] = useState<ClothesInfoData[]>();
	const [designerData, setDesignerData] = useState<ClothesInfoData[]>();
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

	const handleSetSelected = (data: ClothesInfoData) => {
		const id = data.clothesId
		setSelectedId(id);
		console.log(id);
		handleModifyModalBtn();
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const productResponse = await GetAllProductLists();
				const designerResponse = await getAllDesignerList();
				if (productResponse && productResponse.data) {
					// 데이터를 최신순으로 저장
					setProductData(productResponse.data.reverse());
				} else {
					console.log('Failed to fetch data');
				}
				if (designerResponse && designerResponse.data) {
					setDesignerData(designerResponse.data);
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
				<ClotheUpload handleModalBtn={handleUpdateModalBtn} handleRefresh={handleRefresh} designerData={designerData} />
			) : (
				<></>
			)}
			{selectedId ? (
				<ClotheModify
					handleModalBtn={handleModifyModalBtn}
					handleRefresh={handleRefresh}
					designerData={designerData}
					dataId={selectedId}
				/>
			) : (
				<></>
			)}
			<Top>
				<div className="title">옷</div>
				<Btn onClick={handleUpdateModalBtn}>+등록하기</Btn>
			</Top>
			{productData ? (
				<PaginationTable
					columns={columns}
					data={productData}
					handleSetSelected={handleSetSelected}
				/>
			) : (
				<></>
			)}
		</Section>
	);
};

export default ClothesTab;

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
	font-weight:400;
	background: #000;
`;
