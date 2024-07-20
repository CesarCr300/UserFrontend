import { useForm } from "react-hook-form";
import { UserRegisterFormEntity } from "../../entities/user-register-form.entity";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import { getUsersRegisterFormFields } from "./users-register-form-field";
import { Button } from "../../../../../components/Button";

export const UsersRegisterForm = () => {
  const { register, handleSubmit } = useForm<UserRegisterFormEntity>();
  return (
    <FormContainer
      fields={getUsersRegisterFormFields(register)}
      onSubmit={handleSubmit((e) => {
        console.log(e);
      })}
    >
      <Button text="Registrar" type="submit" />
    </FormContainer>
  );
};
