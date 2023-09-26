import { css } from '@emotion/react';
import '@styles/commonStyle.css';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const isUserPickPage = window.location.pathname.includes('/userPick');

const spaceBetween = css`
	justify-content: space-between;
	z-index: 2;
	${isUserPickPage ? 'color: white;' : ''}
`;

const Header = ({ where }: { where: string }) => {
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
				<div css={spaceBetween} className="headerComponent">
					<img src="/img/blackLogo.svg" onClick={handleClick('/')}/>
					<img src="/img/search.svg" />
				</div>
			</div>
		);
	} else if (where === 'detail') {
        // 백 버튼 + 로고만 있는 헤더
		return (
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<FiChevronLeft cursor="pointer" size="3rem" onClick={handleClick('/')} />
                    <img src='/img/artiLogo.svg' onClick={handleClick('/')}/>
					<div
						css={css`
							width: 20px;
						`}
						className="emptyDiv"
					></div>
				</div>
			</div>
		);
	} else {
        // 백 버튼 + 페이지 이름 헤더
		return (
			<div className="headerLayout">
				<div css={spaceBetween} className="headerComponent">
					<FiChevronLeft cursor="pointer" size="3rem" onClick={handleClick('/')} />
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
		);
	}
};

export default Header;
