import React from "react";
import "./InputText.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = ({ className, ...props }: InputProps) => {
  return <input type="text" className={"meow-input-text " + className} {...props} />;
};

export default InputText;
