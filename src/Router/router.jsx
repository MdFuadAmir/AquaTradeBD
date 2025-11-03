import { createBrowserRouter } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "statistic",
        element: <p>statistics</p>,
      },
      {
        path: "list",
        element: <p>Dash Signup</p>,
      },
    ],
  },
]);

export default router;
