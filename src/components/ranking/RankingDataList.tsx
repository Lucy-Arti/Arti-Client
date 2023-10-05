import { css } from '@emotion/react';
import RankingCard from './RankingCard';
import { RankData } from '@/types/request';

type RankingDataListPropsType = {
	datas: RankData[];
	setSavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setUnsavedModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoginModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const RankingDataList = (props:RankingDataListPropsType) => {

	const card = css`
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;
	`;

	return (
		<div css={card}>
			{props.datas && props.datas.map((data, index) => (
				<RankingCard 
				key={index} 
				index={index} 
				data={data}
				setSavedModalIsOpen={props.setSavedModalIsOpen}
				setUnsavedModalIsOpen={props.setUnsavedModalIsOpen}
				setLoginModalIsOpen={props.setLoginModalIsOpen} />
			))}
		</div>
	);
};

export default RankingDataList;
