import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { routes } from "../variables/routes.variables";
import { Layout } from "../components/Layout";
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
        element: <p>Acá verás la información del usuario</p>,
      },
    ],
  },
]);
