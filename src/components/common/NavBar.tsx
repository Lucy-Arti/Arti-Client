import { css } from '@emotion/react';
import React from 'react';

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
		background-color: aqua;
		width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
	`;
	return (
		<div css={layout}>
			<div css={wrapper}>
				<div>홈</div>
				<div>투표</div>
				<div>둘러보기</div>
				<div>마이페이지</div>
			</div>
		</div>
	);
};

export default NavBar;
