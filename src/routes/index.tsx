import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { routes } from "../variables/routes.variables";
import { Layout } from "../components/Layout";
import { UsersUpdate } from "../pages/users/update/UsersUpdate";
export const router = createBrowserRouter([
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routes.userDetails,
        element: <UsersUpdate />,
      },
    ],
  },
]);
