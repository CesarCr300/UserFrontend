import { useContext } from "react";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useUserDispatch } from "../../../redux/user.hooks";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Button } from "../../../components/Button";
import { login as loginReducer } from "../../../redux/user.slice";
import { LoginContext } from "../context/login.context";

import { LoginEntity } from "../entities/login.entity";
import { LoginApplication } from "../application/login.application";
import { CustomeLink } from "../../../components/CustomeLink";
import { routes } from "../../../variables/routes.variables";

export const LoginForm = () => {
  const { setLoading } = useContext(LoginContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register, handleSubmit } = useForm<LoginEntity>();
  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  const application = new LoginApplication(
    dispatch,
    loginReducer,
    navigate,
    callEndpoint
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth="300px"
      sx={{
        borderRadius: "8px",
        padding: "40px 20px",
        backgroundColor: "white",
      }}
      boxShadow={10}
    >
      <form
        onSubmit={handleSubmit((d) => {
          application.login(d.email, d.password);
        })}
      >
        <Typography component="h1" variant="h4" textAlign={"center"}>
          Inicio de sesión
        </Typography>
        <Box display="flex" flexDirection="column" gap="30px" mt="40px">
          <FormControl>
            <TextField
              id="email"
              label="Correo electrónico o usuario"
              {...register("email")}
              size="small"
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Contraseña"
              id="password"
              type="password"
              {...register("password")}
              size="small"
            />
          </FormControl>
          <Button text="Ingresar" type="submit" />
        </Box>
      </form>
      <CustomeLink
        to={routes.register}
        text="¿No tienes una cuenta? Presiona aquí para registrarte"
      />
    </Box>
  );
};
