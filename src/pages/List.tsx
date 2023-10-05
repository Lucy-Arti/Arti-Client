import LandingSection2 from '@/components/landing2/LandingSection2';
import '@styles/commonStyle.css';
import { Outlet } from 'react-router-dom';

const List = () => {
	return (
		<>
		<LandingSection2/>
			<Outlet />
		</>
	);
};

export default List;
