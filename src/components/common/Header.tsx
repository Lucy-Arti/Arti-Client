'use client';
import styled from 'styled-components';
import '@styles/commonStyle.css';
import { FiChevronLeft } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';

const HeaderComponent = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const BackgroundWrapper = styled.div<{ $isUserPickPage: boolean }>`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ $isUserPickPage }) => ($isUserPickPage ? 'color: white; z-index: 3;' : 'background-color: white;')}
`;

const LogoImg = styled.img`
	height: 24px;
`;

const EmptyDiv = styled.div`
	width: 20px;
`;

const StyledFiChevronLeft = styled(FiChevronLeft)`
	cursor: pointer;
`;

const Header = ({ where }: { where: string }) => {
	const router = useRouter();
	const pathname = usePathname();
	const isUserPickPage = pathname.includes('/userPick');

	const handleBack = () => {
		router.back();
	};

	const handleClick = (page: string) => {
		return () => {
			router.push(page);
		};
	};

	if (where === 'main') {
		return (
			<div className="headerLayout">
				<HeaderComponent className="headerComponent">
					<LogoImg src="/img/headerLogo.png" onClick={handleClick('/')} loading="lazy" />
					<img src="/img/search.svg" onClick={handleClick('/search')} loading="lazy" />
				</HeaderComponent>
			</div>
		);
	} else if (where === 'detail') {
		return (
			<>
				<div style={{ height: '10px', width: '100%' }}></div>
				<div className="headerLayout">
					<BackgroundWrapper $isUserPickPage={isUserPickPage}>
						<HeaderComponent className="headerComponent">
							<StyledFiChevronLeft size="26px" onClick={handleBack} />
							<LogoImg onClick={handleClick('/')} width="35px" src="/img/artiLogo.png" loading="lazy" />
							<EmptyDiv className="emptyDiv"></EmptyDiv>
						</HeaderComponent>
					</BackgroundWrapper>
				</div>
			</>
		);
	} else if (where === 'vote') {
		return (
			<div className="headerLayout">
				<BackgroundWrapper $isUserPickPage={isUserPickPage}>
					<HeaderComponent className="headerComponent">
						{isUserPickPage ? (
							<StyledFiChevronLeft size="26px" onClick={() => router.push('../../vote')} />
						) : (
							<StyledFiChevronLeft size="26px" onClick={() => router.push('../../')} />
						)}
						<div style={{ fontSize: '2rem', fontWeight: 600 }}>투표하기</div>
						<EmptyDiv className="emptyDiv"></EmptyDiv>
					</HeaderComponent>
				</BackgroundWrapper>
			</div>
		);
	} else {
		return (
			<div className="headerLayout">
				<BackgroundWrapper $isUserPickPage={isUserPickPage}>
					<HeaderComponent className="headerComponent">
						<StyledFiChevronLeft size="26px" onClick={handleBack} />
						<div style={{ fontSize: '2rem', fontWeight: 600 }}>{where}</div>
						<EmptyDiv className="emptyDiv"></EmptyDiv>
					</HeaderComponent>
				</BackgroundWrapper>
			</div>
		);
	}
};

export default Header;
