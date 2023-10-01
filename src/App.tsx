import { RouterProvider } from 'react-router-dom';
import router from './router';
import { RecoilRoot } from 'recoil';

function App() {
	// ChannelService.loadScript();
	return (
		<RecoilRoot>
			<RouterProvider router={router} />
		</RecoilRoot>
	);
}

export default App;
