import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";

const FormInputDropdown = ({
  name,
  control,
  label,
  data,
  errors,
  required,

  classParams,
  handleDropdownChange,
  defaultValue,
}) => {
  const generateSelectOptions = () => {
    return data.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          required={required}
          error={!!errors?.[name]}
          helperText={errors?.[name]?.message}
          className={`${classParams} inputOuter muiSelectDrop`}
          id={name}
          select
          // label={label}
          fullWidth
          onChange={(event) => {
            const selectedValue = event.target.value;
            field.onChange(selectedValue); // Update form value
            handleDropdownChange && handleDropdownChange(event.target.value); // Execute callback with selected value
          }}
        >
          {generateSelectOptions()}
        </TextField>
      )}
    />
  );
};

export default FormInputDropdown;
