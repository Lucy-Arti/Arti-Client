import { css } from '@emotion/react';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import { worldcupList } from '../../types/request.d';
import DisplayCard from './DisplayCard';

const progressProps = [
	{ progress: '8강', percentage: 33, translateX: 33 },
	{ progress: '4강', percentage: 66, translateX: 66 },
	{ progress: '결승', percentage: 100, translateX: 100 },
];

const UserVoting = () => {
	const [progress, setProgress] = useState(0);
	const [displays, setDisplays] = useState<
		{ id: number; designer: string; product: string; like: number; mark: boolean; src: string }[]
	>([]);

	useEffect(() => {
		// ~~~
		setDisplays([worldcupList[0], worldcupList[1]]);
	}, []);

	const userVoteSection = css`
		display: flex;
		width: 90%;
		height: fit-content;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;
	const cardSection = css`
		display: flex;
		width: 90%;
		height: 33rem;
		justify-content: space-around;
		align-items: center;
		object-fit: contain;
        margin-top: 25px;
	`;

	const btn = css`
		margin-top: 20px;
	`;

	const textSection = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
        @media (min-width:0px){
            margin-top: 54px;
            margin-bottom: 60px;
        }
        @media (min-width:576px){
            margin-top: 54px;
            margin-bottom: 40px;
        }
	`;

	const text = css`
		color: black;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		.pink {
			color: #ff4b8c;
		}
		.column {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	`;

	const handleProgressBar = () => {
		const nextIndex = (progress + 1) % progressProps.length;
		setProgress(nextIndex);
	};

	return (
		<div css={userVoteSection}>
			<ProgressBar progressprops={progressProps[progress]} />
			<div css={textSection} className="gap">
				<div css={text}>
					<div className="pink">2</div>&nbsp;/&nbsp;4
				</div>
				<div css={text}>
					<div className="column">
						<div>둘 중 더 마음에 드는 옷을</div>
						<div>골라주세요</div>
					</div>
				</div>
			</div>

			<div css={cardSection}>
				{displays.map((item, index) => (
					<DisplayCard key={index} data={item}/>
				))}
			</div>
			<button css={btn} onClick={handleProgressBar}>
				진행
			</button>
		</div>
	);
};

export default UserVoting;
