import TotalRank from "@ranking/TotalRank";
import Home from "@pages/Home";
import List from "@pages/List";
import Mypage from "@pages/Mypage";
import Voting from "@pages/Voting";
import { createBrowserRouter } from "react-router-dom";
import TodayRank from "@ranking/TodayRank";
import Login from '@pages/Login';
        
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/vote",
        element: <Voting />,
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
