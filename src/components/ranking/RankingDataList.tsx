import { css } from '@emotion/react';
import RankingCard from './RankingCard';
import { RankData } from '@/types/request';

const RankingDataList = ({ datas }: { datas: RankData[] }) => {

	const card = css`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	`;

	return (
		<div css={card}>
			{datas && datas.map((data, index) => (
				<RankingCard key={index} index={index} data={data} />
			))}
		</div>
	);
};

export default RankingDataList;
