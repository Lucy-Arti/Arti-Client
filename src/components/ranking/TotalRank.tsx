import { css } from '@emotion/react';
import RankingDataList from './RankingDataList';

const TotalRank = () => {
	const totalRankList = [
		{ id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34, mark: true },
		{ id: 23, designer: '민집', product: '새콤한 감귤 모자', like: 30, mark: true },
		{ id: 43, designer: '짜잉', product: '보송보송 츄리닝 바지', like: 25, mark: false },
		{ id: 24, designer: '비니', product: '프란체스카 올블랙 티셔츠', like: 20, mark: true },
		{ id: 39, designer: '브리', product: '짱멋진 롱스커트', like: 14, mark: true },
		{ id: 21, designer: '초록', product: '개구리 머리띠', like: 10, mark: false },
		{ id: 47, designer: '피터', product: '스파이더맨 거미줄', like: 5, mark: false },
		{ id: 14, designer: '상도', product: '상도역 출근룩', like: 7, mark: true },
	];

	const wrapper = css`
		width: 100%;
		margin-top: 3.12rem;
		height: fit-content;
	`;
	return (
		<div css={wrapper}>
			<RankingDataList sampleList={totalRankList} />
		</div>
	);
};

export default TotalRank;
