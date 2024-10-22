export default function Login() {
  return (
    <form className="flex flex-col gap-4">
      <p className="mb-4 text-2xl font-bold">Login</p>
      <input
        placeholder="Email"
        type="email"
        className="bg-background-teritery border-border-primary h-12 rounded-lg border-[1px] p-5"
      />
      <input
        placeholder="Password"
        type="password"
        className="bg-background-teritery border-border-primary h-12 rounded-lg border-[1px] p-5"
      />
      <button className="bg-red mt-5 h-12 rounded-lg">Login</button>
    </form>
  );
}
