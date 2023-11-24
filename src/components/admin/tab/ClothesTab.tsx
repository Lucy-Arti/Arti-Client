import React, { useEffect, useMemo, useState } from 'react';
import { Column } from 'react-table';
import styled from 'styled-components';
import { CLOTHES_INFO_COLUMNS } from '../common/columns';
import { ClothesInfoData } from '@/types/request';
import PaginationTable from '../common/PaginationTable';
import { GetAllProductLists } from '@/apis/list';
import ClotheUpload from '../modal/ClotheUpload';
import { getAllDesignerList } from '@/apis/admin';
import { useRouter } from 'next/navigation';

const ClothesTab = () => {
	const router = useRouter();
	const columns: Column[] = useMemo(() => CLOTHES_INFO_COLUMNS, []);
	const [productData, setProductData] = useState<ClothesInfoData[]>();
	const [designerData, setDesignerData] = useState<ClothesInfoData[]>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [reload, setReload] = useState(false);

	const handleModalBtn = () => {
		if (isModalOpen) {
			setIsModalOpen(false);
		} else {
			setIsModalOpen(true);
		}
	};

	const handleRefresh = () => {
		if (reload) {
			setReload(false);
		} else {
			setReload(true);
		}
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const productResponse = await GetAllProductLists();
				const designerResponse = await getAllDesignerList();
				if (productResponse && productResponse.data) {
					setProductData(productResponse.data);
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
			{isModalOpen ? <ClotheUpload handleModalBtn={handleModalBtn} handleRefresh={handleRefresh} designerData={designerData} /> : <></>}
			<Top>
				<div className="title">옷</div>
				<Btn onClick={handleModalBtn}>+등록하기</Btn>
			</Top>
			{productData ? <PaginationTable columns={columns} data={productData} /> : <></>}
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
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 600;
	background: #000;
`;
