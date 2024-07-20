import { useContext, useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useUserSelector } from "../../../../../redux/user.hooks";
import { Button } from "../../../../../components/Button";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import useFetchAndLoad from "../../../../../hooks/useFetchAndLoad";
import { LoginResponseEntity } from "../../../../../entities";

import { UserFormEntity } from "../../entities/user-form.entity";
import { UsersUpdateContext } from "../../context/UsersUpdate.context";
import { fillUserForm } from "../../application/users-update.application";
import { getUsersUpdateFormFields } from "./users-update-form-field";
import { LoggerUtil } from "../../../../../utils/logger.util";

export const UsersUpdateForm = () => {
  const { setLoading } = useContext(UsersUpdateContext);
  const user = useUserSelector(
    (state) => state.user.user
  ) as LoginResponseEntity;

  const { handleSubmit, register, reset } = useForm<UserFormEntity>();
  const { callEndpoint } = useFetchAndLoad(setLoading);

  const onSubmit: SubmitHandler<UserFormEntity> = (data) => {};

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
