import { RankingSample } from '../../types/request.d';
const RankingCard = ({ data, index }: { data: RankingSample; index: number }) => {
	// 랭킹 1위
	if (index === 0) {
		return (
			<div>
				{data.designer} 디자이너가 {data.like}로 짱입니다
			</div>
		);
	}

	return (
		<div>
			{data.designer} 디자이너가 {data.like}
		</div>
	);
};

export default RankingCard;
