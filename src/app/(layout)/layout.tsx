'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import ChannelTalk from '../ChannelTalk';
import StyledComponentsRegistry from '../lib/registry';
import { useEffect } from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
	const params = useRouter();
	console.log(params);

	// useEffect(() => {
	// 	if (!params.has('/productlist/')) {
	// 		ChannelTalk();
	// 	}
	// }, []);
	return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
