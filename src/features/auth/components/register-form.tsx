import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";

export default function Register() {
  return (
    <form className="flex flex-col gap-4">
      <p className="mb-4 text-2xl font-bold">Register</p>
      <FormInput placeholder="Name" type="text" />
      <FormInput placeholder="Email" type="email" />
      <FormInput placeholder="Password" type="password" />
      <Button title="Register" color="red" h="12" />
    </form>
  );
}
