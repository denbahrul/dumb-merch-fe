import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        className="h-12 rounded-lg border-[1px] border-border-primary bg-background-teritery p-5"
        {...props}
      />
    );
  },
);

export default FormInput;
