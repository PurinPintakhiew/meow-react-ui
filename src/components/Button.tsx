import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  severity?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
}

const Button = ({ className, type, children, severity, ...props }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
