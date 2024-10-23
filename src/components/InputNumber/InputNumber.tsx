import React from "react";
import "./style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputNumber = ({ className, ...props }: InputProps) => {
  return <input type="number" className={className} {...props} />;
};

export default InputNumber;
