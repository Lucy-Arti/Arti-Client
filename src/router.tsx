import TotalRank from '@ranking/TotalRank';
import Home from '@pages/Home';
import List from '@pages/List';
import Mypage from '@pages/Mypage';
import Voting from '@pages/Voting';
import { createBrowserRouter } from 'react-router-dom';
import TodayRank from '@ranking/TodayRank';
import Login from '@pages/Login';
import Ranking from './pages/Ranking';
import VoteMain from './components/voting/VoteMain';
import UserVoting from './components/voting/UserVoting';
import KakaoLogin from './components/login/KakaoLogin';
import FinalPick from './components/voting/FinalPick';
import ListView from './components/list/ListView';
import ProductDetail from './components/list/ProductDetail';
import DesignerDetail from './components/designer/DesignerDetail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/rank',
		element: <Ranking />,
		children: [
			{
				path: 'total',
				element: <TotalRank />,
			},
			{
				path: 'today',
				element: <TodayRank />,
			},
		],
	},
	{
		path: '/vote',
		element: <Voting />,
		children: [
			{
				path: '',
				element: <VoteMain />,
			},
			{
				path: 'userVote',
				element: <UserVoting />,
			},
			{
				path: 'userPick',
				element: <FinalPick />,
			},
		],
	},
	{
		path: '/productlist',
		element: <List />,
		children: [
			{
				path: '',
				element: <ListView />,
			},
			{
				path: ':idx',
				element: <ProductDetail />
			}
		],
	},
	{
		path: '/mypage',
		element: <Mypage />,
	},
	{
		path: '/login',
		element: <Login content={'로그인 후 이용해주세요!'} />,
	},
	{
		path: '/kakaologin',
		element: <KakaoLogin />,
	},
	{
		path: '/designer/:name',
		element: <DesignerDetail />,
	},
]);

export default router;
