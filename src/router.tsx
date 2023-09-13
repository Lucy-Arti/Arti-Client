import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import Voting from './pages/Voting';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/vote',
		element: <Voting />,
	},
	{
		path: '/productlist',
		element: <List />,
	},
	{
		path: '/mypage',
		element: <Mypage />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

export default router;
