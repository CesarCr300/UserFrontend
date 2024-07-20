import { useEffect } from "react";
import { useUserSelector } from "../redux/user.hooks";
import { useNavigate } from "react-router-dom";
import { defaultAuthenticatedUserRoute } from "../variables/routes.variables";

export const useIsAuthenticated = () => {
  const navigate = useNavigate();
  const state = useUserSelector((state) => state.user);
  useEffect(() => {
    if (state.isAuthenticated) {
      return navigate(defaultAuthenticatedUserRoute);
    }
  }, [state]);
};
