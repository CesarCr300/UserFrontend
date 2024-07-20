import { FormControl, TextField } from "@mui/material";
import { FieldError, RegisterOptions } from "react-hook-form";

export interface IFormInput {
  name: string;
  label: string;
  register: any;
  registerOptions?: RegisterOptions;
  size?: string;
  type?: "text" | "number" | "password";
  defaultValue?: string | number;
  hasAsyncronousDefaultValue?: boolean;
  error?: FieldError;
  disabled?: boolean;
}

export const FormField = ({
  name,
  label,
  register,
  type = "text",
  size = "small",
  defaultValue = "",
  hasAsyncronousDefaultValue = true,
  registerOptions = {},
  error,
  disabled = false,
}: IFormInput) => {
  return (
    <FormControl key={name + label}>
      <TextField
        disabled={disabled}
        label={label}
        {...register(name, {
          valueAsNumber: type == "number",
          ...registerOptions,
        })}
        size={size}
        type={type}
        defaultValue={
          hasAsyncronousDefaultValue
            ? type == "text"
              ? "_"
              : type == "number"
              ? 0
              : undefined
            : defaultValue
        }
        {...(type == "number" && {
          inputProps: {
            step: "0.1",
          },
        })}
      />
      {error != undefined && <p>{error?.message?.toString()}</p>}
    </FormControl>
  );
};
