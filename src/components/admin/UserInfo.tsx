import { css } from '@emotion/react';
import PaginationTable from './PaginationTable';

const UserInfo = () => {
	const section = css`
		width: 90%;
		height: fit-content;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 130px;
	`;
	const title = css`
		width: 100%;
        margin-bottom: 10px;
		font-size: 2.2rem;
	`;

	return (
		<div css={section}>
			<div css={title}>사용자 정보</div>
			<PaginationTable/>
		</div>
	);
};

export default UserInfo;
