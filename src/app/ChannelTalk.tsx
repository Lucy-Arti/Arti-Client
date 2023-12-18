'use client';

import * as ChannelService from '@channel.io/channel-web-sdk-loader';

export default function ChannelTalk() {
	ChannelService.loadScript();
	ChannelService.boot({
		pluginKey: 'd6edfe98-afd0-4989-be6a-3b13b2aa2c71',
	});
}
