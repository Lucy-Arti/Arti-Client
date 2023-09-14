import { css } from '@emotion/react';
import RankingCard from './RankingCard';
import { RankingSample } from '@/types/request';

const RankingDataList = ({ sampleList }: { sampleList: RankingSample[] }) => {

	const card = css`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	`;
	// Like를 기준으로 내림차순 정렬
	const sortedList = sampleList.slice().sort((a, b) => b.like - a.like);

	return (
		<div css={card}>
			{sortedList.map((data, index) => (
				<RankingCard key={index} index={index} data={data} />
			))}
		</div>
	);
};

export default RankingDataList;
