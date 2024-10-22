import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./routes/auth/register";
import AuthLayout from "../components/layout/auth-layout";
import LoginPage from "./routes/auth/login";
import HomePage from "./routes/customer/home";
import ComplainPage from "./routes/customer/complain";
import UserNavbar from "../components/layout/user-navbar";
import ProfilePage from "./routes/customer/profile";

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
      path: "/",
      element: <UserNavbar />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "complain",
          element: <ComplainPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
