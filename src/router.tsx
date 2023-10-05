import TotalRank from '@ranking/TotalRank';
import Home from '@pages/Home';
import List from '@pages/List';
import Mypage from '@pages/Mypage';
import Voting from '@pages/Voting';
import { createBrowserRouter } from 'react-router-dom';
import TodayRank from '@ranking/TodayRank';
import Ranking from './pages/Ranking';
import VoteMain from './components/voting/VoteMain';
import UserVoting from './components/voting/UserVoting';
import KakaoLogin from './components/login/KakaoLogin';
import FinalPick from './components/voting/FinalPick';
import ListView from './components/list/ListView';
import ProductDetail from './components/list/ProductDetail';
import DesignerDetail from './components/designer/DesignerDetail';
import MypageBasicView from './components/mypage/MypageBasicView';
import MypageVoted from './components/mypage/MypageVoted';
import MypageMarked from './components/mypage/MypageMarked';
import MypageRecent from './components/mypage/MypageRecent';
import Search from './components/search/Search';
import Login  from './components/login/Login';

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
				element: <Login where="vote"/>,
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
				element: <ProductDetail />,
			},
		],
	},
	{
		path: '/mypage',
		element: <Mypage />,
		children: [
			{
				path: '',
				element: <MypageBasicView />,
			},
			{
				path: 'voted',
				element: <MypageVoted />
			},
			{
				path: 'recent',
				element: <MypageRecent />
			},
			{
				path: 'marked',
				element: <MypageMarked />
			},
		],
	},
	{
		path: '/kakaologin',
		element: <KakaoLogin />,
	},
	{
		path: '/designer/:idx',
		element: <DesignerDetail />,
	},
	{
		path: '/search',
		element: <Search />,
	},
]);

export default router;
