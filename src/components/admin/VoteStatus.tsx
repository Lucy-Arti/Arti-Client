import { css } from "@emotion/react";
import PaginationTable from "./PaginationTable";
import { VOTE_STATUS_COLUMNS } from "./columns";
import { useMemo } from "react";
import { VoteSatusData } from "@/types/request";
import { Column } from "react-table";


const VoteStatus = () => {
  const votedatas = [{"name":"Kelsey","nickname":"kmergue0","votedate":"3/1/2023","firstround":"개구리모자","secondround":"멋진옷","finalround":"대박멋진옷"}]
  const columns: Column[] = useMemo(() => VOTE_STATUS_COLUMNS, []);
	const data: VoteSatusData[] = useMemo(() => votedatas, []);

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
			<div css={title}>투표 현황</div>
			<PaginationTable columns={columns} data={data} />
		</div>
	);
}

export default VoteStatus