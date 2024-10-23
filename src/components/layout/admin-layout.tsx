import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import { adminNav } from "./constant";

export default function AdminLayout() {
  return (
    <div>
      <Navbar navRole={adminNav} home="admin/home" />
      <div className="m-auto h-[100vh] max-w-[1280px]">
        <div className="h-[100%] pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
