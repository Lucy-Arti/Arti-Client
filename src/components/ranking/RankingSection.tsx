'use client';
import styled from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import TotalRank from './TotalRank';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RankingSectionWrapper = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

const BannerSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	aspect-ratio: 1 / 0.64;
	margin-top: 1rem;
	position: relative;
	overflow: -moz-hidden-unscrollable;
`;

const BannerImg = styled.img`
	position: absolute;
	width: 100%;
	border-radius: 13px;
`;

const VoteBtn = styled.div`
	z-index: 1;
	width: fit-content;
	border-radius: 30px;
	background: #555;
	color: white;
	text-align: center;
	cursor: pointer;
	font-size: 2rem;
	padding: 10px 20px;
	margin-top: 2.2rem;
	@media (max-width: 420px) {
		font-size: 1.5rem;
		padding: 8px 17px;
	}
`;

const Text1 = styled.div`
	font-size: 3.3rem;
	font-weight: 600;
	margin-top: 20px;
	@media (max-width: 420px) {
		font-size: 2.8rem;
		margin-top: 15px;
	}
`;

const RankingBtnWrapper = styled.div`
	display: flex;
	width: 100%;
	font-size: 2rem;
	font-weight: 600;
	color: #c6c6c6;
	align-items: center;
	justify-content: center;
	margin-top: 2.8rem;
`;

// const RankingBtn = styled.div<{ active: boolean }>`
// 	width: 50%;
// 	display: inline-block;
// 	font-size: 2rem;
// 	justify-content: center;
// 	padding: 1rem;
// 	border-bottom: 1px solid ${(props) => (props.active ? 'black' : '#c6c6c6')};
// 	text-align: center;
// 	color: ${(props) => (props.active ? 'black' : '#c6c6c6')};
// `;

const RankingBtn = styled.div`
	width: 50%;
	display: inline-block;
	font-size: 2rem;
	justify-content: center;
	padding: 1rem;
	border-bottom: 1px solid black;
	text-align: center;
	color: black;
`;

const TextSection = styled.div`
	position: absolute;
	width: 88%;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
`;

const FontSize = styled.div`
	font-weight: 600;
	font-size: 1.7rem;
	@media (max-width: 420px) {
		font-size: 1.5rem;
	}
`;

const RankingSection = () => {
	const route = useRouter();
	const pathname = usePathname();
	// const [tab, setTab] = useState(RANKING_TABS.TOTAL);

	// const rankingLabels = [
	// 	{ label: '전체 랭킹', route: 'rank/total' },
	// 	{ label: '오늘의 랭킹', route: 'rank/today' },
	// ];

	// useEffect(() => {
	// 	if (pathname.includes('total')) {
	// 		setTab(RANKING_TABS.TOTAL);
	// 	} else if (pathname.includes('sketch')) {
	// 		setTab(RANKING_TABS.SKETCH);
	// 	}
	// }, [pathname]);

	const handleClick = (page: any) => () => {
		route.push(page);
	};

	return (
		<Wrapper>
			<RankingSectionWrapper>
				<BannerSection>
					<BannerImg src="/img/voteBanner.png" />
					<TextSection>
						<div>
							<Text1>
								투표를 통해
								<br />
								특별한 옷들을 만나다
							</Text1>
							<VoteBtn onClick={handleClick(`/vote`)}>투표하러 가기</VoteBtn>
						</div>
						<FontSize>투표 기간 : ~ 23.11.20</FontSize>
					</TextSection>
				</BannerSection>
				<RankingBtnWrapper>
					{/* {rankingLabels.map((tabs, index) => (
					<RankingBtn active={tab===index} key={index} onClick={handleClick(`/${tabs.route}`)}>
						{tabs.label}
					</RankingBtn>
				))} */}
					<RankingBtn>전체 랭킹</RankingBtn>
				</RankingBtnWrapper>
				<TotalRank />
			</RankingSectionWrapper>
		</Wrapper>
	);
};

export default RankingSection;
