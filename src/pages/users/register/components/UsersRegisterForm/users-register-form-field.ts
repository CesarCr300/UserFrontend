import { UseFormRegister } from "react-hook-form";
import { IFormFieldRender } from "../../../../../components/Form/FormFieldsRender";
import { UserRegisterFormEntity } from "../../entities/user-register-form.entity";

export const getUsersRegisterFormFields = (
  register: UseFormRegister<UserRegisterFormEntity>
): IFormFieldRender[] => {
  return [
    {
      label: "Correo electrónico",
      name: "email",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Nombre de usuario",
      name: "username",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Nombres",
      name: "name",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Apellidos",
      name: "lastname",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
};
