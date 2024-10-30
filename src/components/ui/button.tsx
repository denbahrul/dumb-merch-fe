import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  h: "12" | "10";
  color: "red" | "green";
  otherStyle: string;
}

export default function Button({
  title,
  color,
  h,
  otherStyle,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`h-${h} ${otherStyle} rounded-lg px-6 bg-${color}`}
      {...props}
    >
      {title}
    </button>
  );
}
