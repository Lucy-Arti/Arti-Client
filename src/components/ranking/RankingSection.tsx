import { css } from '@emotion/react';
import { Outlet, useNavigate } from 'react-router-dom';

const RankingSection = () => {
	// const { pathname } = useLocation();
	// const [tab, setTab] = useState(RANKING_TABS.TOTAL);

	// const rankingLabels = [
	// 	{ label: '전체 랭킹', route: 'rank/total' },
	// 	{ label: '오늘의 랭킹', route: 'rank/today' },
	// ];

	// useEffect(() => {
	// 	if (pathname.includes('total')) {
	// 		setTab(RANKING_TABS.TOTAL);
	// 	} else if (pathname.includes('today')) {
	// 		setTab(RANKING_TABS.TODAY);
	// 	}
	// }, [pathname]);

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
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		aspect-ratio: 1 / 0.64;
		margin-top: 1rem;
		position: relative;
		overflow: -moz-hidden-unscrollable;
	`;

	const bannerChild = css`
		position: absolute;
	`;

	const bannerImg = css`
		width: 100%;
		border-radius: 13px;
	`;

	const voteBtn = css`
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

	const text1 = css`
		font-size: 3.3rem;
		font-weight: 600;
		margin-top: 20px;
		@media (max-width: 420px) {
			font-size: 2.8rem;
			margin-top: 15px;
		}
	`;

	const rankingBtnWrapper = css`
		display: flex;
		width: 100%;
		font-size: 2rem;
		font-weight: 600;
		color: #c6c6c6;
		align-items: center;
		justify-content: center;
		margin-top: 2.8rem;
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

	const textSection = css`
		width: 88%;
		height: 80%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	`;

	const fontSize = css`
		font-weight: 600;
		font-size: 1.7rem;
		@media (max-width: 420px) {
			font-size: 1.5rem;
		}
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
				<img css={[bannerChild, bannerImg]} src="/img/voteBanner.png" loading="lazy" />
				<div css={[bannerChild, textSection]}>
					<div>
						<div css={[text1]}>
							투표를 통해
							<br />
							특별한 옷들을 만나다
						</div>
						<div css={[voteBtn]} onClick={handleClick(`/vote`)}>
							투표하러 가기
						</div>
					</div>

					<div css={fontSize}>투표 기간 : ~ 23.11.20</div>
				</div>
			</div>
			<div css={rankingBtnWrapper}>
				{/* {rankingLabels.map((tabs, index) => (
					<div css={[rankingBtn, tab === index ? active : '']} key={index} onClick={handleClick(`/${tabs.route}`)}>
						{tabs.label}
					</div>
				))} */}
				<div css={[rankingBtn, active]}>전체 랭킹</div>
			</div>
			<Outlet />
		</div>
	);
};

export default RankingSection;
