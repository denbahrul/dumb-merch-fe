import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="m-auto max-w-[1280px] items-center justify-between gap-10 px-8 pb-16 pt-16 md:flex md:h-[100vh] md:pt-0">
      <div className="md:w-[60%]">
        <img src="dm-logo.svg" alt="dumb merch logo" className="h-64" />
        <p className="text-white mt-4 text-5xl font-medium">
          Easy, Fast and Reliable
        </p>
        <p className="text-gray-textA mt-2 text-xl font-light">
          Go shopping for merchandise, just go to dumb merch shopping, the
          biggest merchandise in <span className="font-bold">Indonesia</span>
        </p>
        <div className="mt-8 flex gap-4 md:mt-24">
          <Link to="/login">
            <div className="bg-red rounded-md px-8 py-2 text-lg">Login</div>
          </Link>
          <Link to="/register">
            <div className="text-gray-textC rounded-md px-8 py-2 text-lg">
              Register
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-background-secondary mt-14 rounded-xl p-8 md:mt-0 md:w-[40%]">
        <Outlet />
      </div>
    </div>
  );
}
