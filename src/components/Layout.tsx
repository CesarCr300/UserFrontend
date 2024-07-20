import { Suspense } from "react";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";
import { Loading } from "./Loading";

export const Layout = () => {
  return (
    <ProtectedRoute>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Suspense fallback={<Loading />}>
          <Container
            sx={{
              marginTop: "20px",
              padding: {
                ms: "0px",
                xs: "0px 10px",
              },
            }}
          >
            <Toolbar sx={{ display: { sm: "none" } }} />
            <Outlet />
          </Container>
        </Suspense>
      </Box>
    </ProtectedRoute>
  );
};
