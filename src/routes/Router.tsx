import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import {
  AccountSettings,
  ContactUs,
  Home,
  InventoryBag,
  Login,
  News,
  Page404,
  PixelVideos,
  Post,
  ProductDetail,
  Register,
  Shop,
  Wishlist,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pixel-videos",
        element: <PixelVideos />,
      },
      {
        path: "posts",
        element: <Post />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "account-settings",
        element: <AccountSettings />,
      },
      {
        path: "product-detail",
        element: <ProductDetail />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "inventory-bag",
        element: <InventoryBag />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;