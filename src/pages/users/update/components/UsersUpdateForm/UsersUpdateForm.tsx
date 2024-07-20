import { useContext, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserSelector } from "../../../../../redux/user.hooks";
import { Button } from "../../../../../components/Button";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import useFetchAndLoad from "../../../../../hooks/useFetchAndLoad";
import { LoginResponseEntity } from "../../../../../entities";
import { LoggerUtil } from "../../../../../utils/logger.util";

import { UserFormEntity } from "../../entities/user-form.entity";
import { UsersUpdateContext } from "../../context/UsersUpdate.context";
import { fillUserForm, updateUser } from "../../application/users-update.application";
import { getUsersUpdateFormFields } from "./users-update-form-field";

export const UsersUpdateForm = () => {
  const { setLoading } = useContext(UsersUpdateContext);
  const user = useUserSelector(
    (state) => state.user.user
  ) as LoginResponseEntity;

  const { handleSubmit, register, reset } = useForm<UserFormEntity>();
  const { callEndpoint } = useFetchAndLoad(setLoading);

  const onSubmit: SubmitHandler<UserFormEntity> = (data) => {
    try {
      updateUser(user.id, data, callEndpoint);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  };

  useEffect(() => {
    try {
      fillUserForm(user.id, reset, callEndpoint);
    } catch (error) {
      LoggerUtil.logError(error);
    }
  }, []);

  return (
    <FormContainer
      onSubmit={handleSubmit(onSubmit)}
      fields={useMemo(() => getUsersUpdateFormFields(register), [])}
    >
      <Button text="Guardar" type="submit" />
    </FormContainer>
  );
};
