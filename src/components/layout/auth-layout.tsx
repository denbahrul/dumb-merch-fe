import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="m-auto max-w-[1280px] items-center justify-between gap-10 px-8 pb-16 pt-16 md:flex md:h-[100vh] md:pt-0">
      <div className="md:w-[60%]">
        <img src="dm-logo.svg" alt="dumb merch logo" className="h-64" />
        <p className="mt-4 text-5xl font-medium text-white">
          Easy, Fast and Reliable
        </p>
        <p className="mt-2 text-xl font-light text-gray-textA">
          Go shopping for merchandise, just go to dumb merch shopping, the
          biggest merchandise in <span className="font-bold">Indonesia</span>
        </p>
        <div className="mt-8 flex gap-4 md:mt-24">
          <Link to="/login">
            <div className="flex h-12 items-center rounded-md bg-red px-10 text-lg">
              Login
            </div>
          </Link>
          <Link to="/register">
            <div className="flex h-12 items-center rounded-md px-10 text-lg text-gray-textC">
              Register
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-14 rounded-xl bg-background-secondary p-8 md:mt-0 md:w-[40%]">
        <Outlet />
      </div>
    </div>
  );
}
