import { css } from "@emotion/react"
import RankingDataList from "./RankingDataList";

const TodayRank = () => {
  const todayRankList = [
    { id: 39, designer: '루트', product: '한석원 정장', like: 4, mark: false },
		{ id: 21, designer: '유난', product: '유난떠는 복장', like: 2, mark: false },
		{ id: 47, designer: '티켓', product: '영화관 미소지기 모자', like: 3, mark: true },
		{ id: 14, designer: '루시', product: '아이디어 고갈', like: 2, mark: false },
	];

	const wrapper = css`
		width: 100%;
		margin-top: 3.12rem;
    height: fit-content;
	`;
	return (
		<div css={wrapper}>
			<RankingDataList sampleList={todayRankList} />
		</div>
	);
}

export default TodayRank