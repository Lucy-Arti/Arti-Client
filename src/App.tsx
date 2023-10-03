import { RouterProvider } from 'react-router-dom';
import router from './router';
import { RecoilRoot } from 'recoil';
import ChannelService from './ChannelService';

function App() {
	ChannelService.loadScript();

	ChannelService.boot({
		pluginKey: 'd6edfe98-afd0-4989-be6a-3b13b2aa2c71', // fill your plugin key
	});

	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
