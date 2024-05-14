import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
const FormInputSelect = ({
  name,
  data,
  control,
  defaultValue,
  label,
  errors,
  handleDropdownChange,
}) => {
  return (
    <FormControl fullWidth className="selectController">
      <InputLabel>Location</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            label={label}
            onChange={(e) => {
              field.onChange(e);
              handleDropdownChange(e.target.value);
            }}
          >
            {data.map((option) => (
              <MenuItem
                className="capitalize"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
export default FormInputSelect;
