import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput({ ...props }: InputProps) {
  return (
    <input
      className="h-12 rounded-lg border-[1px] border-border-primary bg-background-teritery p-5"
      {...props}
    />
  );
}
