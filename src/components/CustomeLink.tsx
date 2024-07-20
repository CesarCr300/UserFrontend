import { Link } from "react-router-dom";

interface ICustomeLink {
  to: string;
  text: string;
  style?: any;
}

export const CustomeLink = ({
  to,
  text,
  style = { color: "black", textDecoration: "none" },
}: ICustomeLink) => {
  return (
    <Link style={style} to={to}>
      {text}
    </Link>
  );
};
