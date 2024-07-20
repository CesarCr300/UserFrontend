import { UseFormRegister } from "react-hook-form";

import { IFormFieldRender } from "../../../../../components/Form/FormFieldsRender";

import { UserFormPasswordEntity } from "../../entities/user-form-password.entity";

export const getUsersUpdatePasswordFormFields = (
  register: UseFormRegister<UserFormPasswordEntity>
): IFormFieldRender[] => {
  return [
    {
      label: "Contraseña original",
      name: "originalPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Contraseña nueva",
      name: "newPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
};
