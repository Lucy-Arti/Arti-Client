import Header from '@/components/common/Header';
import StyledComponentsRegistry from '../../lib/registry';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header where="vote" />
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</div>
	);
}
