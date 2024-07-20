import { useState } from "react";
import { Box } from "@mui/material";

import { Loading } from "../../components/Loading";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";
import { LoginForm } from "./components/LoginForm";
import { LoginContext } from "./context/login.context";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  useIsAuthenticated();

  return (
    <LoginContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: "#EEF2F5" }}
      >
        <LoginForm />
      </Box>
    </LoginContext.Provider>
  );
};
