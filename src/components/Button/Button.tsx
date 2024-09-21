import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ label, type, className, children, ...props }: ButtonProps) => {
  return (
    <button type={type} className={className} {...props}>
      {label ? label : children}
    </button>
  );
};

export default Button;
