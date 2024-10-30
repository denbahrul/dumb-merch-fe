import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";
import { useLoginForm } from "../hooks/use-login-form";

export default function Login() {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-4 text-2xl font-bold">Login</p>
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
      <Button
        otherStyle="mt-5"
        type="submit"
        title="Login"
        color="red"
        h="12"
      />
    </form>
  );
}
