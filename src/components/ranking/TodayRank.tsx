import { css } from '@emotion/react';
import RankingDataList from './RankingDataList';
import { useEffect, useState } from 'react';
import { getTotalScoreList } from '@/apis/vote';

const TodayRank = () => {
	const [rankData, setRankData] = useState([]);

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
		<div css={wrapper}>
			<RankingDataList datas={rankData} />
		</div>
	);
};

export default TodayRank;
