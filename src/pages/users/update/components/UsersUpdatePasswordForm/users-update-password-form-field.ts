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
      registerOptions: {
        required: "La contraseña original es requerida",
      },
    },
    {
      label: "Contraseña nueva",
      name: "newPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        required: "La nueva contraseña es requerida",
        minLength: {
          value: 6,
          message: "La nueva contraseña debe tener al menos 6 caracteres",
        },
      },
    },
  ];
};
