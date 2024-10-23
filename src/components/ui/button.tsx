import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  h: "12" | "10";
  color: "red" | "green";
}

export default function Button({ title, color, h, ...props }: ButtonProps) {
  return (
    <button className={`mt-5 h-${h} rounded-lg bg-${color}`} {...props}>
      {title}
    </button>
  );
}
