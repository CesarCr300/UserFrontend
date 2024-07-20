import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";
import { Box } from "@mui/material";

import { FormFieldsRender, IFormFieldRender } from "./FormFieldsRender";

interface IFormContainer {
  onSubmit: any;
  gap?: string;
  children?: ReactNode;
  fields: IFormFieldRender[];
  errors?: FieldErrors;
}

export const FormContainer = ({
  onSubmit,
  gap = "10px",
  children,
  fields,
  errors = {},
}: IFormContainer) => {
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={gap}
      onSubmit={onSubmit}
    >
      {fields.map((field) => (
        <FormFieldsRender
          key={field.name + field.label}
          {...field}
          errors={errors}
        />
      ))}
      {children}
    </Box>
  );
};
