import { css } from '@emotion/react';
import RankingDataList from './RankingDataList';

const TotalRank = () => {
	const wrapper = css`
		margin-top: 2rem;
	`;
	return (
		<div css={wrapper}>
			TotalRank
			<RankingDataList />
		</div>
	);
};

export default TotalRank;
