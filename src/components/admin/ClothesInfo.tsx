import { css } from "@emotion/react";
import PaginationTable from "./PaginationTable";
import { ClothesInfoData } from "@/types/request";
import { Column } from "react-table";
import { useMemo } from "react";
import { CLOTHES_INFO_COLUMNS } from "./columns";


const ClothesInfo = () => {
  const clothesdatas = [{"productname":"Kelsey","designer":"kmergue0","firstround":6,"secondround":3,"finalround":2,"totalpoint":15,"todaypoint":3}]
  const columns: Column[] = useMemo(() => CLOTHES_INFO_COLUMNS, []);
	const data: ClothesInfoData[] = useMemo(() => clothesdatas, []);

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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const addBtn = css`
  color: white;
  font-size: 1.8rem;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: black;
  cursor: pointer;
`

	return (
		<div css={section}>
<div css={title}>
				<div>옷 정보</div>
				<div css={addBtn}>+등록하기</div>
			</div>
			<PaginationTable columns={columns} data={data} />
		</div>
	);
}

export default ClothesInfo