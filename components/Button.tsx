import React from "react";

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
  className?: String
}
export default function Button({ variant, children , className}: ButtonProps) {
  return (
    <button className={`${className} ${variant === "secondary" ? "bg-none border border-primary text-primary" : "bg-primary"} p-4 rounded-xl font-bold text-xl`}>
      {children}
    </button>
  );
}
