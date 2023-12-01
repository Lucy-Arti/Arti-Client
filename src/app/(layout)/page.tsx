import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import NavBar from '@/components/common/NavBar';
import LandingHome from '@/components/landing/LandingHome';

export default function Page() {
	return (
		<div>
			<Header where="main" />
			<NavBar />
			<LandingHome />
			<Footer />
		</div>
	);
}
