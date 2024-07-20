import { createContext } from "react";
import { IBasicPage } from "../../../../entities";

export const UsersUpdateContext = createContext<IBasicPage>({} as IBasicPage);
