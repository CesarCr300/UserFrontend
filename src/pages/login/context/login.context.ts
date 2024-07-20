import { createContext } from "react";
import { IBasicPage } from "../../../entities/basic-page-context.entity";

interface ILoginContext extends IBasicPage {}

export const LoginContext = createContext<ILoginContext>({
  loading: false,
  setLoading: () => {},
});
