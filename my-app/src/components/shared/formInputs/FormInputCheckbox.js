import React from "react";

import { Controller } from "react-hook-form";

const InputCheckBox = ({ name, options, control }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <label className="checkboxOuter	" key={option.value}>
            <Controller
              name={`${name}`}
              control={control}
              defaultValue={index === 0 ? true : false}
              render={({ field }) => (
                <input
                  type="checkbox"
                  {...field}
                  checked={field.value}
                  value={option.value}
                />
              )}
            />

            {option.label}
          </label>
        );
      })}
    </div>
  );
};

export default InputCheckBox;
