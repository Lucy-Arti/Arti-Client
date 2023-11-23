import styled from 'styled-components';
import RankingCard from './RankingCard';
import { RankData } from '@/types/request';

type RankingDataListPropsType = {
	datas: RankData[];
	setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 2rem;
`;

const RankingDataList = (props: RankingDataListPropsType) => {
	const displayedDatas = props.datas.slice(0, 20);
	return (
		<Card>
			{props.datas &&
				displayedDatas.map((data, index) => (
					<RankingCard
						key={index}
						index={index}
						data={data}
						setSavedModalIsOpen={props.setSavedModalIsOpen}
						setUnsavedModalIsOpen={props.setUnsavedModalIsOpen}
						setLoginModalIsOpen={props.setLoginModalIsOpen}
					/>
				))}
		</Card>
	);
};

export default RankingDataList;
