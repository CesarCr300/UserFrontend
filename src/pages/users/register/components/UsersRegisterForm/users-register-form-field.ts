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
      registerOptions: {
        required: "Este campo es requerido",
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Correo electrónico inválido",
        },
      },
    },
    {
      label: "Nombre de usuario",
      name: "username",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        required: "Este campo es requerido",
        minLength: {
          value: 4,
          message: "El nombre de usuario debe tener al menos 4 caracteres",
        },
      },
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        required: "Este campo es requerido",
        minLength: {
          value: 6,
          message: "La contraseña debe tener al menos 6 caracteres",
        },
      },
    },
    {
      label: "Nombres",
      name: "name",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        required: "Este campo es requerido",
      },
    },
    {
      label: "Apellidos",
      name: "lastname",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        required: "Este campo es requerido",
      },
    },
  ];
};
