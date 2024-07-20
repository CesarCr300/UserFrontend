import { useState } from "react";

import { Loading } from "../../../components/Loading";
import { UsersUpdateContext } from "./context/UsersUpdate.context";
import { UsersUpdateForm } from "./components/UsersUpdateForm/UsersUpdateForm";
import { UsersUpdatePasswordForm } from "./components/UsersUpdatePasswordForm/UsersUpdatePasswordForm";

export const UsersUpdate = () => {
  const [loading, setLoading] = useState(false);

  return (
    <UsersUpdateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {loading && <Loading />}
      <h1>Usuario</h1>
      <UsersUpdateForm />
      <UsersUpdatePasswordForm />
    </UsersUpdateContext.Provider>
  );
};
