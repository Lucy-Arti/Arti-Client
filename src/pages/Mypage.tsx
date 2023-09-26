import '@styles/commonStyle.css';
import NavBar from '@common/NavBar';
import Header from '@/components/common/Header';

const Mypage = () => {
	return (
		<>
			<Header where='main'/>
			<NavBar />
			<div>Mypage</div>
		</>
	);
};

export default Mypage;
