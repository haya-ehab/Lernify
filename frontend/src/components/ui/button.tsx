import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded font-medium";
  const styles = variant === "primary" ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 hover:bg-gray-300";
  
  return <button className={`${base} ${styles}`} {...props} />;
};
