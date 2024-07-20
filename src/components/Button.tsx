import { Button as ButtonBase } from "@mui/material";

interface IButton {
  text: string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  handleClick?: () => any;
  type?: "submit" | "button" | "reset" | undefined;
}

export const Button = ({
  text,
  color = "primary",
  handleClick = () => {},
  type = "button",
}: IButton) => {
  return (
    <ButtonBase
      variant="contained"
      color={color}
      onClick={handleClick}
      type={type}
    >
      {text}
    </ButtonBase>
  );
};
