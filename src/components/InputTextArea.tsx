import React from "react";
import { cn } from "@/libs/cn";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputTextArea = ({ className, ...props }: InputProps) => {
  return <textarea className={cn("border !text-black rounded-sm", className)} {...props} />;
};

export default InputTextArea;
