import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@styles/global.css';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<RecoilRoot>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</RecoilRoot>,
);
