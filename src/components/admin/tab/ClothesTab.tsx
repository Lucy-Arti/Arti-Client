import React, { useEffect, useMemo, useState } from 'react';
import { Column } from 'react-table';
import styled from 'styled-components';
import { CLOTHES_INFO_COLUMNS } from '../common/columns';
import { ClothesInfoData } from '@/types/request';
import { clothesMockData } from '../common/MOCK_DATA';
import PaginationTable from '../common/PaginationTable';
import { GetAllProductLists } from '@/apis/list';

const ClothesTab = () => {
	const columns: Column[] = useMemo(() => CLOTHES_INFO_COLUMNS, []);
	const [data, setData] = useState<ClothesInfoData[]>();
	// const data: ClothesInfoData[] = useMemo(() => clothesMockData, []);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await GetAllProductLists();
				if (response && response.data) {
					setData(response.data);
				} else {
					console.log('Failed to fetch data');
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		getData();
	}, []);

	return (
		<Section>
			<Top>
				<div className="title">옷</div>
				<Btn>+등록하기</Btn>
			</Top>
			{data ? <PaginationTable columns={columns} data={data} /> : <></>}
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
