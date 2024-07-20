import { useContext, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { useUserSelector } from "../../../../../redux/user.hooks";
import { Button } from "../../../../../components/Button";
import { FormContainer } from "../../../../../components/Form/FormContainer";
import useFetchAndLoad from "../../../../../hooks/useFetchAndLoad";
import { LoginResponseEntity } from "../../../../../entities";

import { UserFormEntity } from "../../entities/user-form.entity";
import { UsersUpdateContext } from "../../context/UsersUpdate.context";
import { UserUpdateFormApplication } from "../../application/users-update.application";
import { getUsersUpdateFormFields } from "./users-update-form-field";

export const UsersUpdateForm = () => {
  const { setLoading } = useContext(UsersUpdateContext);
  const user = useUserSelector(
    (state) => state.user.user
  ) as LoginResponseEntity;

  const { handleSubmit, register, reset } = useForm<UserFormEntity>();
  const { callEndpoint } = useFetchAndLoad(setLoading);

  const application = new UserUpdateFormApplication(
    user.id,
    reset,
    callEndpoint
  );

  useEffect(()=>{
    application.fillUserForm();
  },[])

  return (
    <div>
      <h2>Datos generales</h2>
      <FormContainer
        onSubmit={handleSubmit(application.handleSubmit)}
        fields={useMemo(() => getUsersUpdateFormFields(register), [])}
      >
        <Button text="Guardar" type="submit" />
      </FormContainer>
    </div>
  );
};
