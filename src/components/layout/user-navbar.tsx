import { Link, NavLink, Outlet } from "react-router-dom";
import { userNav } from "./constant";

function UserNavbar() {
  return (
    <div>
      <div className="fixed m-auto w-[100%] bg-background-primary">
        <div className="m-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
          <div>
            <Link to="/">
              <img src="/dm-logo.svg" alt="dumb merch logo" className="h-14" />
            </Link>
          </div>
          <div className="flex gap-6">
            {userNav.map(({ name, path }: { name: string; path: string }) => {
              return (
                <NavLink to={path}>
                  {({ isActive }) => (
                    <p
                      className={`text-lg font-semibold ${isActive ? "text-red" : ""}`}
                    >
                      {name}
                    </p>
                  )}
                </NavLink>
              );
            })}

            <Link to="/login">
              <p className="text-lg font-semibold">Logout</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-auto h-[100vh] max-w-[1280px]">
        <div className="h-[100%] pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
