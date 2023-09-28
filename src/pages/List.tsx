import '@styles/commonStyle.css';
import { Outlet } from 'react-router-dom';

const List = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default List;
