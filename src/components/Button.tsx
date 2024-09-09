import React from "react";
import { cn } from "../libs/cn";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  severity?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
}

const Button = ({ className, type, children, severity, ...props }: ButtonProps) => {
  const severityColor = (color: any) => {
    if (color == "secondary") {
      return { "bg-gray-500": true, "text-white": true, "hover:bg-gray-800": true };
    } else if (color == "success") {
      return { "bg-green-500": true, "text-white": true, "hover:bg-green-800": true };
    } else if (color == "info") {
      return { "bg-purple-500": true, "text-white": true, "hover:bg-purple-800": true };
    } else if (color == "warning") {
      return { "bg-yellow-500": true, "text-white": true, "hover:bg-yellow-800": true };
    } else if (color == "danger") {
      return { "bg-red-500": true, "text-white": true, "hover:bg-red-800": true };
    } else {
      return { "bg-blue-500": true, "text-white": true, "hover:bg-blue-800": true };
    }
  };

  return (
    <button type={type} className={cn("w-20 p-2 rounded-md", className, severityColor(severity))} {...props}>
      {children}
    </button>
  );
};

export default Button;
