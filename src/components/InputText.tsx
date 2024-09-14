import { cn } from "@/libs/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputText = ({ className, ...props }: InputProps) => {
  return <input type="text" className={cn("border h-8 !text-black rounded-sm", className)} {...props} />;
};

export default InputText;
