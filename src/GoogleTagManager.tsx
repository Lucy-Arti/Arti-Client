import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { GtmId } from './types/request';

const GoogleTagManager = ({ gtmId }: GtmId) => {
	useEffect(() => {
		TagManager.initialize({ gtmId });
	}, [gtmId]);
	return <></>;
};

export default GoogleTagManager;
