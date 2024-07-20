import { Box } from "@mui/material";
import React from "react";
import { Title } from "./Title";

interface IHeader {
  title: string;
  rightChildren: React.ReactNode;
}

export const Header = ({ rightChildren, title }: IHeader) => {
  return (
    <Box mb="20px">
      <Title>{title}</Title>
      <Box display="flex" justifyContent={"right"} minWidth={"100%"}>
        {rightChildren}
      </Box>
    </Box>
  );
};
