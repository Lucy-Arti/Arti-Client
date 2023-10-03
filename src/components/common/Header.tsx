import { css } from '@emotion/react';
import '@styles/commonStyle.css';
import { FiChevronLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ where }: { where: string }) => {
	const location = useLocation(); // 현재 경로 가져오기
	const isUserPickPage = location.pathname.includes('/userPick');

	const bgwrapper = css`
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		${isUserPickPage ? 'color: white; z-index: 3;' : 'background-color: white;'}
	`;

	const spaceBetween = css`
		width: 90%;
		height: 100%;
		justify-content: space-between;
	`;

	const logoImg = css`
		height: 24px;
	`;
	const handleClick = (page: string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	};
	// 메인 페이지 헤더
	if (where === 'main') {
		return (
			<div className="headerLayout">
				<div css={bgwrapper}>
					<div css={spaceBetween} className="headerComponent">
						<img css={logoImg} src="/img/blackLogo.png" onClick={handleClick('/')} />
						<img src="/img/search.svg" />
					</div>
				</div>
			</div>
		);
	} else if (where === 'detail') {
		// 백 버튼 + 로고만 있는 헤더
		return (
			<>
				<div
					css={css`
						height: 40px;
						width: 100%;
					`}
				></div>
				<div className="headerLayout">
					<div css={bgwrapper}>
						<div css={spaceBetween} className="headerComponent">
							<FiChevronLeft cursor="pointer" size="26px" onClick={() => history.back()} />
							<img width="35px" src="/img/artiLogo.svg" onClick={handleClick('/')} />
							<div
								css={css`
									width: 20px;
								`}
								className="emptyDiv"
							></div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		// 백 버튼 + 페이지 이름 헤더
		return (
			<div className="headerLayout">
				<div css={bgwrapper}>
					<div css={spaceBetween} className="headerComponent">
						<FiChevronLeft cursor="pointer" size="26px" onClick={handleClick('/')} />
						<div
							css={css`
								font-size: 2rem;
								font-weight: 600;
							`}
						>
							{where}
						</div>
						<div
							css={css`
								width: 20px;
							`}
							className="emptyDiv"
						></div>
					</div>
				</div>
			</div>
		);
	}
};

export default Header;
