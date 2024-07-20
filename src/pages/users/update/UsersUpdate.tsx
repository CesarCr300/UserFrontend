import { useState } from "react";
import { UsersUpdateContext } from "./context/UsersUpdate.context";

export const UsersUpdate = () => {
  const [loading, setLoading] = useState(false);

  return (
    <UsersUpdateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    ></UsersUpdateContext.Provider>
  );
};
