import AddPage from "../page/AddPage/AddPage";
import AddWishlist from "../page/AddWishlist/AddWishlist";
import Detail from "../page/Detail/Detail";
import Home from "../page/Home/Home";
import MainRoute from "../page/MainRoute";

export const ROUTE = [
  {
    path: "",
    element: <MainRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "addpage",
        element: <AddPage />,
      },
      {
        path: "wishlist",
        element: <AddWishlist />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
    ],
  },
];
