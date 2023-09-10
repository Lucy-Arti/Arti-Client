import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const layout = css`
		width: 100%;
		height: 40px;
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
        background-color: aliceblue;
		/* gap: 5%; */
	`;
	const wrapper = css`
		/* background-color: aqua; */
		width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
	`;
	const handleClick = (page:string) => {
		const navigate = useNavigate();
		return () => {
			navigate(page);
		};
	}
	return (
		<div css={layout}>
			<div css={wrapper}>
				<div onClick={handleClick('/')} >홈</div>
				<div onClick={handleClick('/vote')}>투표</div>
				<div onClick={handleClick('/productlist')}>둘러보기</div>
				<div onClick={handleClick('/mypage')}>마이페이지</div>
			</div>
		</div>
	);
};

export default NavBar;
