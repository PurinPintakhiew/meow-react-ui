import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "reset" | "submit";
}

const Button = (props: ButtonProps) => {
  return <button type={props.type}>{props.label}</button>;
};

export default Button;
