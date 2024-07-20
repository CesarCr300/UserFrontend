import { useState } from "react";
import { UsersUpdateContext } from "./context/UsersUpdate.context";
import { UsersUpdateForm } from "./components/UsersUpdateForm/UsersUpdateForm";

export const UsersUpdate = () => {
  const [loading, setLoading] = useState(false);

  return (
    <UsersUpdateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <UsersUpdateForm />
    </UsersUpdateContext.Provider>
  );
};
