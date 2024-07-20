import { useState } from "react";
import { UsersUpdateContext } from "./context/UsersUpdate.context";
import { UsersUpdateForm } from "./components/UsersUpdateForm/UsersUpdateForm";
import { Loading } from "../../../components/Loading";

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
      <UsersUpdateForm />
    </UsersUpdateContext.Provider>
  );
};
