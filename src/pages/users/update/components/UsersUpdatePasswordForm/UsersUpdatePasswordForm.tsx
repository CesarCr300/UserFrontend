import { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";

import { FormContainer } from "../../../../../components/Form/FormContainer";
import { Button } from "../../../../../components/Button";
import { useUserSelector } from "../../../../../redux/user.hooks";
import { UsersUpdateContext } from "../../context/UsersUpdate.context";
import useFetchAndLoad from "../../../../../hooks/useFetchAndLoad";
import { LoginResponseEntity } from "../../../../../entities";

import { UserFormPasswordEntity } from "../../entities/user-form-password.entity";
import { getUsersUpdatePasswordFormFields } from "./users-update-password-form-field";
import { updateUserPassword } from "../../application/users-update.application";
import { LoggerUtil } from "../../../../../utils/logger.util";

export const UsersUpdatePasswordForm = () => {
  const { setLoading } = useContext(UsersUpdateContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);

  const user = useUserSelector(
    (state) => state.user.user
  ) as LoginResponseEntity;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserFormPasswordEntity>();

  const onSubmit = (data: UserFormPasswordEntity) => {
    try {
      updateUserPassword(user.id, data, callEndpoint, reset);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  };

  return (
    <div>
      <h2>Actualizar contraseña</h2>
      <FormContainer
        fields={useMemo(() => getUsersUpdatePasswordFormFields(register), [])}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
      >
        <Button text="Cambiar contraseña" type="submit" />
      </FormContainer>
    </div>
  );
};
