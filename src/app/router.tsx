import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/auth/register";
import AuthLayout from "../components/layout/auth-layout";
import LoginPage from "./routes/auth/login";
import HomePage from "./routes/customer/home";
import ComplainPage from "./routes/complain";
import ProfilePage from "./routes/customer/profile";
import ProductDetailPage from "./routes/customer/product-detail";
import AdminLayout from "../components/layout/admin-layout";
import UserLayout from "../components/layout/user-layout";
import CategoryListPage from "./routes/admin/category-list";
import ProductListPage from "./routes/admin/product-list";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      element: <UserLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/complain",
          element: <ComplainPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
        },
      ],
    },
    {
      path: "/admin/",
      element: <AdminLayout />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "complain",
          element: <ComplainPage />,
        },
        {
          path: "category",
          element: <CategoryListPage />,
        },
        {
          path: "product",
          element: <ProductListPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
