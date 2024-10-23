import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button";
import FormInput from "../../../components/ui/form-input";

export default function Login() {
  const navigate = useNavigate();
  function onClick() {
    navigate("/");
  }
  return (
    <form className="flex flex-col gap-4">
      <p className="mb-4 text-2xl font-bold">Login</p>
      <FormInput placeholder="Email" type="email" />
      <FormInput placeholder="Password" type="password" />
      <Button onClick={onClick} title="Login" color="red" h="12" />
    </form>
  );
}
