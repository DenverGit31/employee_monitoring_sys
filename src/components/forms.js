import React from "react";
import { Form, Input, Typography } from "antd";
import { Controller } from "react-hook-form";
const inputForm = (
  {
    name,
    errors,
    required,
    label,
    type,
    value,
    disabled,
    placeholder,

    allowSpaceBelow,
  },
  control
) => {
  const errorBorderStyle = errors[name] ? { border: "1px solid #ff4d4f" } : {};
  console.log(errors);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Form.Item
          style={{ marginBottom: allowSpaceBelow ? 24 : 0 }}
          label={
            <>
              <label htmlFor={label} className="mr-2">
                {label}
              </label>
            </>
          }
          required={required}
        >
          <Input
            allowClear
            placeholder={placeholder}
            {...field}
            value={value}
            type={type}
            disabled={disabled}
            style={errorBorderStyle}
          />

          <br />
          <div>
            <h2 style={{ color: "red" }}>{errors[name]?.message}</h2>
          </div>
        </Form.Item>
      )}
    />
  );
};

export default inputForm;
