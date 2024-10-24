import React from "react";
import "./style.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const InputText: ({ className, ...props }: InputProps) => React.JSX.Element;
export default InputText;
