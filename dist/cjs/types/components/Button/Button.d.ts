import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
}
declare const Button: ({ label, type, className, children, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
