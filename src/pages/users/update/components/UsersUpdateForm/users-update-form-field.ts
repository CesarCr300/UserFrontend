import { UseFormRegister } from "react-hook-form";
import { IFormFieldRender } from "../../../../../components/Form/FormFieldsRender";
import { UserFormEntity } from "../../entities/user-form.entity";

export const getUsersUpdateFormFields = (
  register: UseFormRegister<UserFormEntity>
): IFormFieldRender[] => {
  return [
    {
      label: "Correo electrónico",
      name: "email",
      type: "text",
      register,
      hasAsyncronousDefaultValue: true,
      disabled: true,
    },
    {
      label: "Nombre de usuario",
      name: "username",
      type: "text",
      register,
      disabled: true,
      hasAsyncronousDefaultValue: true,
    },
    {
      label: "Nombres",
      name: "name",
      type: "text",
      register,
      hasAsyncronousDefaultValue: true,
    },
    {
      label: "Apellidos",
      name: "lastname",
      type: "text",
      register,
      hasAsyncronousDefaultValue: true,
    },
  ];
};
