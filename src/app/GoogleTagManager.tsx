'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export interface GtmId {
	gtmId: string | null;
}

const GoogleTagManager = ({ gtmId }: GtmId) => {
	useEffect(() => {
		TagManager.initialize({ gtmId });
	}, [gtmId]);
	return <></>;
};

export default GoogleTagManager;
