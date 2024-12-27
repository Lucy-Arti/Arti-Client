'use client';

import { useRouter } from 'next/navigation';
import ChannelTalk from '../ChannelTalk';
import StyledComponentsRegistry from '../lib/registry';

export default function layout({ children }: { children: React.ReactNode }) {
	if (window.location.href.includes('netlify')) {
		window.location.href = 'https://arti-fashion.shop/';
	}
	ChannelTalk();
	return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
