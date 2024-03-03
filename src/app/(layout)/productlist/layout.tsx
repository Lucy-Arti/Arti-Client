'use client'
import Header from '@/components/common/Header';
import StyledComponentsRegistry from '../../lib/registry';
import NavBar from '@/components/common/NavBar';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient()
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</QueryClientProvider>
		</div>
	);
}
