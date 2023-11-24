import React, { useEffect, useMemo, useState } from 'react'
import { Column } from 'react-table';
import PaginationTable from '../common/PaginationTable';
import styled from 'styled-components';
import RewardState from '../modal/RewardState';
import { REWARD_INFO_COLUMNS } from '../common/columns';
import { RewardInfoData } from '@/types/request';
import { getAllUserReward } from '@/apis/admin';

const RewardTab = () => {
    const columns: Column[] = useMemo(() => REWARD_INFO_COLUMNS, []);
	const [rewardData, setRewardData] = useState<RewardInfoData[]>();
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

	const handleSetSelected = (data: RewardInfoData) => {
		const id = data.id;
		setSelectedId(id);
		console.log(id);
		handleModifyModalBtn();
	};
	useEffect(() => {
		const getData = async () => {
			try {
				const rewardResponse = await getAllUserReward();
				if (rewardResponse && rewardResponse.data) {
					setRewardData(rewardResponse.data.reverse());
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
    {/* {isUpdateModalOpen ? (
        <RewardState handleModalBtn={handleUpdateModalBtn} handleRefresh={handleRefresh} />
    ) : (
        <></>
    )} */}
    {selectedId ? (
        <RewardState
            handleModalBtn={handleModifyModalBtn}
            handleRefresh={handleRefresh}
            rewardData={rewardData}
            dataId={selectedId}
        />
    ) : (
        <></>
    )}
    {rewardData ? (
        <PaginationTable columns={columns} data={rewardData} handleSetSelected={handleSetSelected} />
    ) : (
        <></>
    )}
</Section>
  )
}

export default RewardTab

const Section = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-y: scroll;
`;