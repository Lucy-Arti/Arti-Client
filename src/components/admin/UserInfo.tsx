import { css } from '@emotion/react';
import PaginationTable from './PaginationTable';
import { UserInfoData } from '@/types/request';
import { useMemo } from 'react';
import { USER_INFO_COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import { Column } from 'react-table';

const UserInfo = () => {
	const columns: Column[] = useMemo(() => USER_INFO_COLUMNS, []);
	const data: UserInfoData[] = useMemo(() => MOCK_DATA, []);
	
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
			<PaginationTable columns={columns} data={data} />
		</div>
	);
};

export default UserInfo;
