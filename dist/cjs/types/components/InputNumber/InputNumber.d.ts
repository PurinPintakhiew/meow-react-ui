import React from "react";
import "./style.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const InputNumber: ({ className, ...props }: InputProps) => React.JSX.Element;
export default InputNumber;
