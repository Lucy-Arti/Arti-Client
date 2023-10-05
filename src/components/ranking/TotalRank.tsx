import { css } from '@emotion/react';
import RankingDataList from './RankingDataList';
import { useEffect, useState } from 'react';
import { getTotalScoreList } from '@/apis/vote';
import ModalLogin from '../list/ModalLogin';
import ModalProductSaved from '../list/ModalProductSaved';
import ModalProductUnsaved from '../list/ModalProductUnsaved';

const TotalRank = () => {
	const [rankData,setRankData]=useState([]);
	const [savedModalIsOpen, setSavedModalIsOpen] = useState(false);
	const [unsavedModalIsOpen, setUnsavedModalIsOpen] = useState(false);
	const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

	useEffect(() => {
		const getTotalScoreData = async () => {
			const result = await getTotalScoreList();
			setRankData(result);
		};
		getTotalScoreData();
	});

	const wrapper = css`
		width: 100%;
		margin-top: 3.12rem;
		height: fit-content;
	`;
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
			(unsavedModalIsOpen === true) && <ModalProductUnsaved />
		}
		<div css={wrapper}>
			<RankingDataList 
				datas={rankData}
				setLoginModalIsOpen={setLoginModalIsOpen}
				setSavedModalIsOpen={setSavedModalIsOpen}
				setUnsavedModalIsOpen={setUnsavedModalIsOpen}
				 />
		</div>
		</>
	);
};

export default TotalRank;
