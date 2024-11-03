import { roleEnum } from "@/entities/user";
import { useAppSelector } from "@/features/complain/hooks/use-store";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../ui/navbar";
import { adminNav } from "./constant";

export default function AdminLayout() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.entities);
  const loading = useAppSelector((state) => state.auth.loading);

  if (!auth?.role && loading !== "pending") {
    navigate("/login");
  } else if (auth?.role === roleEnum.CUSTOMER) {
    navigate("/");
  } else if (auth?.role === roleEnum.ADMIN) {
    return (
      <div>
        <Navbar role="ADMIN" navRole={adminNav} home="admin/home" />
        <div className="m-auto h-[100vh] max-w-[1280px]">
          <div className="h-[100%] pt-20">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
