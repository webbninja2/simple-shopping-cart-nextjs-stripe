import TextField from "@mui/material/TextField";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { Controller } from "react-hook-form";

const FormBasicTimePicker = ({ name, control, label, inputFormat }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              inputFormat={inputFormat}
              label={label}
              className="w-full inputOuter"
              value={value || null}
              onChange={onChange}
              renderInput={(params) => (
                <TextField onKeyDown={(e) => e.preventDefault()} {...params} />
              )}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default FormBasicTimePicker;
