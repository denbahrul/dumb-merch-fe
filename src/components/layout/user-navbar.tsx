import { Link, NavLink, Outlet } from "react-router-dom";
import { userNav } from "./constant";

function UserNavbar() {
  return (
    <div className="m-auto max-w-[1280px]">
      <div className="flex justify-between p-8">
        <div>
          <Link to="/">
            <img src="dm-logo.svg" alt="dumb merch logo" className="h-14" />
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
      <Outlet />
    </div>
  );
}

export default UserNavbar;
