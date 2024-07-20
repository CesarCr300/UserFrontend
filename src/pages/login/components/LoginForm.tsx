import { Box, FormControl, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserDispatch } from "../../../redux/user.hooks";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Button } from "../../../components/Button";
import { login as loginReducer } from "../../../redux/user.slice";
import { LoginEntity } from "../entities/login.entity";
import { login } from "../application/login.application";
import { useContext } from "react";
import { LoginContext } from "../context/login.context";

export const LoginForm = () => {
  const { setLoading } = useContext(LoginContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register, handleSubmit } = useForm<LoginEntity>();
  const dispatch = useUserDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginEntity> = (data) => {
    login(
      data.email,
      data.password,
      dispatch,
      loginReducer,
      navigate,
      callEndpoint
    );
  };
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </Box>
  );
};
