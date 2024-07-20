import { useState } from "react";
import { UsersRegisterContext } from "./context/UsersRegister.context";
import { UsersRegisterForm } from "./components/UsersRegisterForm/UsersRegisterForm";
import { Typography } from "@mui/material";
import { CustomeLink } from "../../../components/CustomeLink";
import { routes } from "../../../variables/routes.variables";

export const UsersRegister = () => {
  const [loading, setLoading] = useState(false);
  return (
    <UsersRegisterContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <div style={{ marginTop: "25px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="div">
            <Typography component="h1" variant="h4" textAlign={"center"}>
              Registro
            </Typography>
          </div>
          <UsersRegisterForm />
          <CustomeLink
            text="¿Ya tienes una cuenta? Presiona aquí"
            to={routes.login}
          />
        </div>
      </div>
    </UsersRegisterContext.Provider>
  );
};
