import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import { useRegisterForm } from "../hooks/use-register-form";

export default function Register() {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-4 text-2xl font-bold">Register</p>
      <FormInput {...register("fullName")} placeholder="Name" type="text" />
      {errors.fullName && (
        <p className="text-rose-600">* {errors.fullName.message}</p>
      )}
      <FormInput {...register("email")} placeholder="Email" type="email" />
      {errors.email && (
        <p className="text-rose-600">* {errors.email.message}</p>
      )}
      <FormInput
        {...register("password")}
        placeholder="Password"
        type="password"
      />
      {errors.password && (
        <p className="text-rose-600">* {errors.password.message}</p>
      )}
      <Button type="submit" title="Register" color="red" h="12" />
    </form>
  );
}
