import { SubmitHandler, useForm } from "react-hook-form";
import { UserFormEntity } from "../../entities/user-form.entity";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import { useMemo } from "react";
import { getUsersUpdateFormFields } from "./users-update-form-field";
import { Button } from "../../../../../components/Button";

export const UsersUpdateForm = () => {
  const { handleSubmit, register } = useForm<UserFormEntity>();

  const onSubmit: SubmitHandler<UserFormEntity> = (data) => {};

  return (
    <FormContainer
      onSubmit={handleSubmit(onSubmit)}
      fields={useMemo(() => getUsersUpdateFormFields(register), [])}
    >
      <Button text="Guardar" type="submit" />
    </FormContainer>
  );
};
