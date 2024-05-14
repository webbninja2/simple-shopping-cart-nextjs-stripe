import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

const FormBasicDatePicker = ({ name, control, label, inputFormat }) => {
  const [initialDate, setInitialDate] = useState(moment().format("YYYY-MM-DD"));
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={initialDate}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              inputFormat={inputFormat}
              label={label}
              className={"w-full inputOuter"}
              value={value || initialDate}
              onChange={(newValue) => onChange(newValue.format("YYYY-MM-DD"))}
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

export default FormBasicDatePicker;
