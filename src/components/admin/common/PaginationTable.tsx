import { useGlobalFilter, usePagination, useTable } from 'react-table';
import './table.css';
import Search from './Search';
import React from 'react'

const PaginationTable = ({ columns, data }: { columns: any; data: any }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize,
		state,
		prepareRow,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setGlobalFilter,
	} = useTable(
		{
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			columns,
			data,
		},
		useGlobalFilter,
		usePagination,
	);

	const handleRowClick = (row: any) => {
		if (typeof row.original === 'object') {
			const keyValuePairs = [];
			for (const key in row.original) {
				if (Object.prototype.hasOwnProperty.call(row.original, key)) {
					const value = row.original[key];
					keyValuePairs.push(`${key}: ${value}`);
				}
			}
			const resultString = keyValuePairs.join('\n');
			alert(`${resultString}`);
		} else {
			console.log('클릭된 행의 데이터:', row.original);
		}
	};

	const { pageIndex, pageSize } = state;
	/* eslint-disable react/jsx-key */
	return (
		<>
			<Search onSubmit={setGlobalFilter} />
			<div className="table">
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render('Header')}</th>
								))}
							</tr>
						))}
					</thead>

					<tbody {...getTableBodyProps()}>
						{page.map((row: any) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} onClick={() => handleRowClick(row)}>
									{row.cells.map((cell: any) => {
										return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>

				<div
					className="table-pagination"
					style={{ margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{'<<'}
					</button>
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
					</button>
					<span>
						<strong style={{ display: 'block', width: '100px', textAlign: 'center' }}>
							{pageIndex + 1} / {pageOptions.length}
						</strong>
					</span>
					<span>
						Go to page:{' '}
						<input
							type="number"
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
								gotoPage(pageNumber);
							}}
							style={{ width: '50px' }}
						/>
					</span>
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
					</button>
					<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
						{'>>'}
					</button>
				</div>
				<div
					className="table-pagesize"
					style={{ margin: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
				>
					<select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
						{[10, 25, 50].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								{pageSize}개 씩 보기
							</option>
						))}
					</select>
				</div>
			</div>
		</>
	);
	/* eslint-enable react/jsx-key */
};

export default PaginationTable;
