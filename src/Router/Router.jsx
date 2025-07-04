import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Layouts/Home/Home";
import NotFoundPage from "../Pages/ERROR/NotFound";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/SignUP/SignUp";
import AllProducts from "../Pages/AlllProducts/AllProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import CategoryPage from "../Pages/categoryPage/categoryPage";
import ProductDetails from "../Pages/productDetials/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import AddProductPage from "../Pages/addProducts/addProducts";
import CartPage from "../Pages/Cart/Cart";
import MyProducts from "../Pages/MyProducts/MyProducts";
import ComingSoon from "../Components/Comming soon/CommingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "/addProducts",
    element: (
      <PrivateRoute>
        <AddProductPage></AddProductPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/SignIn",
    Component: SignIn,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/allproducts",
    element: (
      <PrivateRoute>
        <AllProducts></AllProducts>
      </PrivateRoute>
    ),
  },
  {
    path: "/update-product/:id",
    element: (
      <PrivateRoute>
        <UpdateProduct></UpdateProduct>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_API_URL}/update-product/${params.id}`),
  },
  {
    path: "/products/category/:category",

    element: (
      <PrivateRoute>
        <CategoryPage></CategoryPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <PrivateRoute>
        <ProductDetails></ProductDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <CartPage></CartPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/myproducts",
    element: (
      <PrivateRoute>
        <MyProducts></MyProducts>
      </PrivateRoute>
    ),
  },
  {
    path: "/coming-soon",
    element: (
      <PrivateRoute>
        <ComingSoon></ComingSoon>
      </PrivateRoute>
    ),
  },
]);
