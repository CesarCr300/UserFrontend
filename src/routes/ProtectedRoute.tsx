import React from "react";

import { Navigate } from "react-router-dom";
import { useUserSelector } from "../redux/user.hooks";
import { defaultUnauthenticatedUserRoute } from "../variables/routes.variables";

export const ProtectedRoute = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const state = useUserSelector((state) => state.user);
  if (state.user == null || state.user?.token == "") {
    return <Navigate to={defaultUnauthenticatedUserRoute} />;
  }
  return children;
};
