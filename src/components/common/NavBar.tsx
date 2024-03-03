'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { TABS } from '@constant/index.ts';
import { usePathname, useRouter } from 'next/navigation';

const NavBarWrapper = styled.div`
	width: 100%;
	height: 40px;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`;

const NavBarContent = styled.div`
	width: 86%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #c6c6c6;
`;

const Tab = styled.div<{ $active: boolean }>`
	cursor: pointer;
	color: ${(props) => (props.$active ? '#6bda01' : '#c6c6c6')};
`;

const NavBar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [tab, setTab] = useState(getInitialTab(pathname));

	const tabLabels = [
		{ label: '홈', route: '' },
		{ label: '투표', route: 'rank/total' },
		{ label: '둘러보기', route: 'productlist' },
		{ label: '마이페이지', route: 'mypage' },
	];

	useEffect(() => {
		window.scrollTo(0, 0);
		setTab(getInitialTab(pathname));
		localStorage.setItem("list-scroll", "0");
	}, [pathname]);

	const handleClick = (page: string) => () => {
		router.push(page);
	};

	return (
		<NavBarWrapper>
			<NavBarContent>
				{tabLabels.map((tabs, index) => (
					<Tab key={index} onClick={handleClick(`/${tabs.route}`)} $active={tab === index}>
						{tabs.label}
					</Tab>
				))}
			</NavBarContent>
		</NavBarWrapper>
	);
};

// URL에 기반한 초기 탭 상태를 설정하는 함수
const getInitialTab = (pathname: string): number => {
	if (pathname.includes('rank')) {
		return TABS.RANK;
	} else if (pathname.includes('productlist')) {
		return TABS.PRODUCT_LIST;
	} else if (pathname.includes('mypage')) {
		return TABS.MY_PAGE;
	} else {
		return TABS.HOME;
	}
};

export default NavBar;
