import StyledComponentsRegistry from './lib/registry';
import './global.css';
import type { Metadata } from 'next';
import RecoidContextProvider from './recoilContextProvider';
import GoogleTagManager from './GoogleTagManager';
import Head from 'next/head';

export const metadata: Metadata = {
	title: '아티 ARTI | 투표해주신 디자인이 실제 옷으로 제작됩니다',
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
	const images = [
		'/img/headerLogo.webp',
		'/img/desktopBanner1.webp',
		'/img/desktopBanner2.webp',
		'/img/desktopBanner3.webp',
		'/img/desktopBanner4.webp',
		'/img/desktopBanner5.webp',
		'/img/mobileBanner1.webp',
		'/img/mobileBanner2.webp',
		'/img/mobileBanner3.webp',
		'/img/mobileBanner4.webp',
		'/img/mobileBanner5.webp',
	];

	return (
		<html>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{images.map((src, index) => (
					<link key={index} rel="preload" href={src} as="image" />
				))}
				<link
					rel="stylesheet"
					href="global.css"
					media="print"
					onLoad={(e) => {
						const link = e.currentTarget as HTMLLinkElement;
						link.media = 'all';
					}}
				/>
			</Head>
			<body>
				<StyledComponentsRegistry>
					<RecoidContextProvider>{children}</RecoidContextProvider>
				</StyledComponentsRegistry>
				<GoogleTagManager gtmId="GTM-P8H6W3G8" />
			</body>
		</html>
	);
}
