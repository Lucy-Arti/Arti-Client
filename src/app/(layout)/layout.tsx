'use client';

import { useSearchParams } from 'next/navigation';

import ChannelTalk from '../ChannelTalk';
import StyledComponentsRegistry from '../lib/registry';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function layout({ children }: { children: React.ReactNode }) {
	ChannelTalk();
	return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
