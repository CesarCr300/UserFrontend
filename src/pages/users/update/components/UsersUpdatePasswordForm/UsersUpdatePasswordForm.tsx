import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { FormContainer } from "../../../../../components/Form/FormContainer";
import { Button } from "../../../../../components/Button";

import { UserFormPasswordEntity } from "../../entities/user-form-password.entity";
import { getUsersUpdatePasswordFormFields } from "./users-update-password-form-field";

export const UsersUpdatePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormPasswordEntity>();

  const onSubmit = (data: UserFormPasswordEntity) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Actualizar contraseña</h2>
      <FormContainer
        fields={useMemo(
          () => getUsersUpdatePasswordFormFields(register),
          []
        )}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
      >
        <Button text="Cambiar contraseña" type="submit" />
      </FormContainer>
    </div>
  );
};
