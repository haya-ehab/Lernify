import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ variant = "primary", className, type, ...props }, ref) => {
  const base = "px-4 py-2 rounded font-medium";
   const styles =
     variant === "primary" ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 hover:bg-gray-300";
   const finalClassName = [base, styles, className].filter(Boolean).join(" ");
   return <button ref={ref} type={type ?? "button"} className={finalClassName} {...props} />;
 }
);
Button.displayName = "Button";
