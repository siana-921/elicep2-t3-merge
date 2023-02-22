import React from "react";
import { Input } from "antd";

const FormRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <Input type={type} value={value} name={name} onChange={handleChange} />
    </div>
  );
};

export default FormRow;
