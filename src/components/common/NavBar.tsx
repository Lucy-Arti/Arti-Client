import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TABS } from '@constant/index.ts';

const NavBar = () => {
	const { pathname } = useLocation();
	const [tab, setTab] = useState(TABS.HOME);

	const tabLabels = [
		{ label: '홈', route: '' },
		{ label: '투표', route: 'vote/total' },
		{ label: '둘러보기', route: 'productlist' },
		{ label: '마이페이지', route: 'mypage' },
	];

	useEffect(() => {
		if (pathname.includes('vote')) {
			setTab(TABS.VOTE);
		} else if (pathname.includes('productlist')) {
			setTab(TABS.PRODUCT_LIST);
		} else if (pathname.includes('mypage')) {
			setTab(TABS.MY_PAGE);
		}
	}, [pathname]);

	const layout = css`
		width: 100%;
		height: 40px;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	const wrapper = css`
		width: 86%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #c6c6c6;
	`;

	const active = css`
		color: #6bda01;
	`;

	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};
	return (
		<div css={layout}>
			<div css={wrapper}>
				{tabLabels.map((tabs, index) => (
					<div key={index} onClick={handleClick(`/${tabs.route}`)} css={tab === index ? active : ''}>
						{tabs.label}
					</div>
				))}
			</div>
		</div>
	);
};

export default NavBar;
