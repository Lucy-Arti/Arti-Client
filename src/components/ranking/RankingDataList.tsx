import RankingCard from './RankingCard';

const RankingDataList = () => {
	const sampleList = [
		{ id: 12, designer: '뻐끔', product: '입술이 두꺼운 열대어 셔츠', like: 34 },
		{ id: 23, designer: '민집', product: '새콤한 감귤 모자', like: 13 },
		{ id: 43, designer: '짜잉', product: '보송보송 츄리닝 바지', like: 25 },
		{ id: 24, designer: '비니', product: '프란체스카 올블랙 티셔츠', like: 20 },
	];

  // Like를 기준으로 내림차순 정렬
	const sortedList = sampleList.slice().sort((a, b) => b.like - a.like);

	return (
		<div>
			<div>
				{sortedList.map((data,index) => (
					<RankingCard key={index} index={index} data={data}/>
				))}
			</div>
		</div>
	);
};

export default RankingDataList;
