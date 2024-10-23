import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { userNav } from "./constant";

export default function UserLayout() {
  return (
    <div>
      <Navbar navRole={userNav} home="" />
      <div className="m-auto h-[100vh] max-w-[1280px]">
        <div className="h-[100%] pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
