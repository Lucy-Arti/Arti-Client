import '@styles/commonStyle.css';
// import NavBar from '@common/NavBar';
// import { css } from '@emotion/react';
// import Header from '@/components/common/Header';
import { Outlet } from 'react-router-dom';

const List = () => {
	// const flexColumn = css`
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// `
	return (
		<>
			{/* <div css={flexColumn}>
				<Header where='main'/>
			</div> */}
			<Outlet />
		</>
	);
};

export default List;
