import React from "react";
import { Controller, FieldError, RegisterOptions } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import { SelectOptions } from "../../entities/select-options.entity";

interface ISelectProps {
  name: string;
  control: any;
  label: string;
  options: SelectOptions[];
  defaultValue?: string | number;
  error?: FieldError;
  registerOptions?: RegisterOptions;
}

export const SelectComponent: React.FC<ISelectProps> = ({
  name,
  control,
  label,
  options,
  defaultValue = "",
  error,
  registerOptions,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: registerOptions?.required ? true : false,
      }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            select
            label={label}
            variant="outlined"
            defaultValue={defaultValue}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {error != undefined && <p>{registerOptions?.required?.toString()}</p>}
        </>
      )}
    />
  );
};
