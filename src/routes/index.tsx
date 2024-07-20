import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";
import { routes } from "../variables/routes.variables";

import { Login } from "../pages/login/Login";
import { UsersUpdate } from "../pages/users/update/UsersUpdate";
import { UsersRegister } from "../pages/users/register/UsersRegister";
export const router = createBrowserRouter([
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <UsersRegister />,
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
