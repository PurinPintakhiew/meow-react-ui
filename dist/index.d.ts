import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
}
declare const Button: ({ label, type, className, children, ...props }: ButtonProps) => React.JSX.Element;

interface InputProps$1 extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const InputText: ({ className, ...props }: InputProps$1) => React.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const InputNumber: ({ className, ...props }: InputProps) => React.JSX.Element;

export { Button, InputNumber, InputText };
