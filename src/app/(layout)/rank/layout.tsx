import Header from '@/components/common/Header';
import StyledComponentsRegistry from '../../lib/registry';
import NavBar from '@/components/common/NavBar';
import ChannelTalk from '../../ChannelTalk';
// import { Metadata } from 'next';

// export const metadata: Metadata = {

//   };

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header where="main" />
			<NavBar />
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</div>
	);
}
