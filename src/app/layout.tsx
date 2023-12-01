import StyledComponentsRegistry from './lib/registry';
import './global.css';
import type { Metadata } from 'next';
import RecoidContextProvider from './recoilContextProvider';
import GoogleTagManager from './GoogleTagManager';

export const metadata: Metadata = {
	title: 'Arti',
	description: '투표를 통해 세상에 숨겨져 있던 유니크한 옷들을 만나보세요',
	icons: {
		icon: '/img/artiLogo.png',
	},
	keywords: ['arti', '아티', '패션', '디자이너', '투표', '디자인', '옷'],
	openGraph: {
		title: 'Arti 아티',
		description: '투표를 통해 세상에 숨겨져 있던 유니크한 옷들을 만나보세요',
		url: 'https://arti-fashion.site/',
		siteName: 'Arti',
		images: [
			{
				url: 'https://arti-fashion.site/img/desktopBanner1.png',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<RecoidContextProvider>{children}</RecoidContextProvider>
				</StyledComponentsRegistry>
				<GoogleTagManager gtmId="GTM-P8H6W3G8" />
			</body>
		</html>
	);
}
