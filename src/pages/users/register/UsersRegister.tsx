import { useState } from "react";
import { UsersRegisterContext } from "./context/UsersRegister.context";
import { UsersRegisterForm } from "./components/UsersRegisterForm/UsersRegisterForm";

export const UsersRegister = () => {
  const [loading, setLoading] = useState(false);
  return (
    <UsersRegisterContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <UsersRegisterForm />
    </UsersRegisterContext.Provider>
  );
};
