'use client';

import ChannelTalk from '../ChannelTalk';
import StyledComponentsRegistry from '../lib/registry';

export default function layout({ children }: { children: React.ReactNode }) {
	ChannelTalk();
	return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
