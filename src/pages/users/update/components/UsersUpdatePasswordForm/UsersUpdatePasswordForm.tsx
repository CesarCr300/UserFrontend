import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { FormContainer } from "../../../../../components/Form/FormContainer";
import { Button } from "../../../../../components/Button";

import { UserFormPasswordEntity } from "../../entities/user-form-password.entity";
import { getUsersUpdatePasswordFormFields } from "./users-update-password-form-field";

export const UsersUpdatePasswordForm = () => {
  const { register, handleSubmit } = useForm<UserFormPasswordEntity>();
  return (
    <div>
      <h2>Actualizar contraseña</h2>
      <FormContainer
        fields={useMemo(() => getUsersUpdatePasswordFormFields(register), [])}
        onSubmit={handleSubmit}
      >
        <Button text="Cambiar contraseña" type="submit" />
      </FormContainer>
    </div>
  );
};
