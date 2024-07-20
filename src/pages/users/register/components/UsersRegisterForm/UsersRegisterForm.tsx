import { useForm } from "react-hook-form";
import { UserRegisterFormEntity } from "../../entities/user-register-form.entity";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import { getUsersRegisterFormFields } from "./users-register-form-field";
import { Button } from "../../../../../components/Button";
import { useContext } from "react";
import { UsersRegisterContext } from "../../context/UsersRegister.context";
import useFetchAndLoad from "../../../../../hooks/useFetchAndLoad";
import { UsersRegisterApplication } from "../../application/users-register.application";
import { useNavigate } from "react-router-dom";

export const UsersRegisterForm = () => {
  const { setLoading } = useContext(UsersRegisterContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormEntity>({
    mode: "onBlur",
  });

  const application = new UsersRegisterApplication(callEndpoint, navigate);

  return (
    <FormContainer
      fields={getUsersRegisterFormFields(register)}
      onSubmit={handleSubmit(application.handleSubmit.bind(application))}
      errors={errors}
    >
      <Button text="Registrar" type="submit" />
    </FormContainer>
  );
};
