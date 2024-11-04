import { Navigate, Outlet, RouteObject } from "react-router-dom";
import { Main } from "../main/main";
import { Layout } from "../../components/Layout/Layout";
import { Dashboard } from "../dashboard/dashboard";

export const appRoutesDefinition: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "*",
        element: <div />,
      },
      {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
