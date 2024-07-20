import {
  Control,
  FieldError,
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import { SelectComponent } from "./Select";
import { FormField } from "./FormField";
import { SelectOptions } from "../../entities/select-options.entity";

export interface IFormFieldRender {
  name: string;
  label: string;
  size?: string;
  type?: "text" | "number" | "password";
  inputType?: "input" | "select";
  defaultValue?: string | number;
  register: UseFormRegister<any>;
  selectOptions?: SelectOptions[];
  control?: Control<any, any>;
  hasAsyncronousDefaultValue?: boolean;
  registerOptions?: RegisterOptions;
  errors?: FieldErrors;
  disabled?: boolean;
}

export const FormFieldsRender = ({
  name,
  label,
  selectOptions,
  control,
  register,
  inputType = "input",
  size = "small",
  defaultValue = "",
  type = "text",
  hasAsyncronousDefaultValue = true,
  errors,
  registerOptions,
  disabled = false,
}: IFormFieldRender) => {
  switch (inputType) {
    case "select":
      return (
        <SelectComponent
          key={name + label}
          name={name}
          label={label}
          options={selectOptions as SelectOptions[]}
          control={control}
          error={errors ? (errors[name] as FieldError) : undefined}
          registerOptions={registerOptions}
        />
      );
    case "input":
      return (
        <FormField
          key={name + label}
          name={name}
          label={label}
          register={register}
          size={size}
          hasAsyncronousDefaultValue={hasAsyncronousDefaultValue}
          defaultValue={defaultValue}
          type={type}
          error={errors ? (errors[name] as FieldError) : undefined}
          registerOptions={registerOptions}
          disabled={disabled}
        />
      );
    default:
      return <p>INVALID INPUT TYPE</p>;
  }
};
