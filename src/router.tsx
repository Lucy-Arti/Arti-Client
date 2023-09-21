import TotalRank from "@ranking/TotalRank";
import Home from "@pages/Home";
import List from "@pages/List";
import Mypage from "@pages/Mypage";
import Voting from "@pages/Voting";
import { createBrowserRouter } from "react-router-dom";
import TodayRank from "@ranking/TodayRank";
import Login from '@pages/Login';
import Ranking from "./pages/Ranking";
import VoteMain from "./components/voting/VoteMain";
import UserVoting from "./components/voting/UserVoting";
        
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/rank",
        element: <Ranking />,
        children:[
            {
                path:"total",
                element:<TotalRank/>
            },
            {
                path:"today",
                element:<TodayRank/>
            },
        ],
    },
    {
        path: "/vote",
        element: <Voting />,
        children:[
            {
                path:"",
                element:<VoteMain/>
            },
            {
                path:"userVote",
                element:<UserVoting/>
            },
        ],
    },
    {
        path: "/productlist",
        element: <List />,
    },
    {
        path: "/mypage",
        element: <Mypage />,
    },
    {
		path: '/login',
		element: <Login />,
  },
])

export default router;
