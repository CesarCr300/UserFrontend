import { Button, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../redux/user.slice";
import { useUserDispatch } from "../../redux/user.hooks";

export const SidebarLogout = () => {
  const dispatch = useUserDispatch();

  const handleOnClick = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        display: "flex",
        gap: "10px",
        padding: "0px",
        justifyContent: "flex-start",
        textTransform: "none",
      }}
    >
      <LogoutIcon sx={{ color: "#90A0B7" }} />
      <Typography sx={{ color: "#90A0B7", fontWeight: "bold" }}>
        Cerrar sesión
      </Typography>
    </Button>
  );
};
