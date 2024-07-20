import { Typography } from "@mui/material";
import { useUserSelector } from "../../redux/user.hooks";

export const SidebarUser = () => {
  const user = useUserSelector((state) => state.user.user);
  return <Typography>Bienvenido {user?.name}</Typography>;
};
