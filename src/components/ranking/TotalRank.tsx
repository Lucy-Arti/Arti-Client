import { useEffect, useState } from 'react';
import { getTotalScoreList } from '@/apis/vote';
import styled from 'styled-components';
import RankingDataList from './RankingDataList';
import ModalLogin from '../common/ModalLogin';
import ModalProductSaved from '../common/ModalProductSaved';
import ModalProductUnsaved from '../common/ModalProductUnsaved';
import RankingCardSkeleton from './RankingCardSkeleton';
import { RankData } from '@/types/request';


const Wrapper = styled.div`
	width: 100%;
	margin-top: 3.12rem;
	height: fit-content;
`;

const TotalRank = () => {
	const [rankData, setRankData] = useState<RankData[]|undefined>(undefined);
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	useEffect(() => {
		const getTotalScoreData = async () => {
			const result = await getTotalScoreList();
			setRankData(result);
		};
		getTotalScoreData();
	}, []);

	return (
		<>
			{
			(loginModalIsOpen === true) && 
			<ModalLogin setLoginModalIsOpen={setLoginModalIsOpen} />
		}
		{
			(savedModalIsOpen === true) && <ModalProductSaved />
		}
		{
			(unsavedModalIsOpen === true) && <ModalProductUnsaved/>
		}
			<Wrapper>
				{
					rankData ? 
					<RankingDataList
						datas={rankData}
						setLoginModalIsOpen={setLoginModalIsOpen}
						setSavedModalIsOpen={setSavedModalIsOpen}
						setUnsavedModalIsOpen={setUnsavedModalIsOpen}
					/>
					:
					<RankingCardSkeleton />
				}
			</Wrapper>
		</>
	);
};

export default TotalRank;
