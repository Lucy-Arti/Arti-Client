import { RANKING_TABS } from '@/utils/constant';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TotalRank from './TotalRank';
import TodayRank from './TodayRank';

const RankingSection = () => {
	const { pathname } = useLocation();
	const [tab, setTab] = useState(RANKING_TABS.TOTAL);

	const rankingLabels = [
		{ label: '전체 랭킹', route: 'rank/total' },
		{ label: '오늘의 랭킹', route: 'rank/today' },
	];

	useEffect(() => {
		if (pathname.includes('total')) {
			setTab(RANKING_TABS.TOTAL);
		} else if (pathname.includes('today')) {
			setTab(RANKING_TABS.TODAY);
		}
	}, [pathname]);

	const rankingSection = css`
		width: 90%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rem;
	`;
	const bannerSection = css`
		width: 100%;
		aspect-ratio: 1 / 0.64;
		margin-top: 2rem;
		position: relative;
		background-color: aliceblue;
		overflow: -moz-hidden-unscrollable;
	`;

	const bannerChild = css`
		position: absolute;
	`;

	const bannerImg = css`
		width: 100%;
	`;
	const voteBtnImg = css`
		width: 35%;
		z-index: 1;
		margin-top: 40px;
		bottom: 2.8rem;
		right: 2.8rem;
		border-radius: 50%;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	`;

	const rankingBtnWrapper = css`
		display: flex;
		width: 100%;
		font-size: 2rem;
		font-weight: 600;
		color: #c6c6c6;
		align-items: center;
		justify-content: center;
		margin-top: 2.5rem;
	`;

	const rankingBtn = css`
		width: 50%;
		display: inline-block;
		font-size: 2rem;
		justify-content: center;
		padding: 1rem;
		border-bottom: 1px solid #c6c6c6;
		text-align: center;
	`;

	const active = css`
		color: black;
		border-bottom: 1px solid black;
	`;

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};

	return (
		<div css={rankingSection}>
			<div css={bannerSection}>
				<img css={[bannerChild, bannerImg]} src="/img/voteBanner.png" />
				<img css={[bannerChild, voteBtnImg]} src="/img/goVoteBtn.png" />
			</div>
			<div css={rankingBtnWrapper}>
				{rankingLabels.map((tabs, index) => (
					<div css={[rankingBtn, tab === index ? active : '']} key={index} onClick={handleClick(`/${tabs.route}`)}>
						{tabs.label}
					</div>
				))}
			</div>
			{tab === RANKING_TABS.TOTAL ? <TotalRank /> : <TodayRank />}
		</div>
	);
};

export default RankingSection;
