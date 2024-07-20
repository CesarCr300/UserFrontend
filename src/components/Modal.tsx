import { Dialog } from "@mui/material";
import React from "react";

interface IModal {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: IModal) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};
