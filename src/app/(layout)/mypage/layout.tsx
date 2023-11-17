import Header from '@/components/common/Header';
import StyledComponentsRegistry from '../../lib/registry';
import NavBar from '@/components/common/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			{/* <Header where="main" />
			<NavBar /> */}
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</div>
	);
}
