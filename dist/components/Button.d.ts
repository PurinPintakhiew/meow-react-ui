import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    severity?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
}
declare const Button: ({ className, type, children, severity, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map