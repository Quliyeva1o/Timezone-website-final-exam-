import Add from "../pages/AddPage";
import Basket from "../pages/BasketPage";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import RootPage from "../pages/RootPage";
import WishList from "../pages/WishLishPage";

export const ROOT = [
    {
        path: "/",
        element: <RootPage/>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "add-page",
                element: <Add />,
            },
            {
                path: "basket",
                element: <Basket />,
            },
            {
                path: "detail/:id",
                element: <Detail/>,
            },
            {
                path:"wishlist",
                element:<WishList/>
            }
        ],
    },
];
