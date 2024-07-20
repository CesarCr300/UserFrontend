import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface ITitle {
  children: ReactNode;
  center?: boolean;
  textAlign?: "center" | "left" | "right" | undefined;
}

export const Title = ({
  children,
  center = true,
  textAlign = undefined,
}: ITitle) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      textAlign={center ? "center" : textAlign}
    >
      {children}
    </Typography>
  );
};
