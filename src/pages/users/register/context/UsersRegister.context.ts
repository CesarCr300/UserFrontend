import { createContext } from "react";

import { IBasicPage } from "../../../../entities";

export const UsersRegisterContext = createContext<IBasicPage>({} as IBasicPage);
