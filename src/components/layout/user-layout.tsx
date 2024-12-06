import { roleEnum } from "@/entities/user";
import { useAppSelector } from "@/features/complain/hooks/use-store";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../ui/navbar";
import { userNav } from "./constant";

export default function UserLayout() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.entities);
  const loading = useAppSelector((state) => state.auth.loading);

  const cartItemCount = useAppSelector(
    (state) => state.auth.entities?.cart._count.cartItem,
  );

  if (!auth?.role && loading !== "pending") {
    navigate("/login");
  } else if (auth?.role === roleEnum.ADMIN) {
    navigate("/admin/dashboard");
  }

  return (
    <div>
      <Navbar
        role="CUSTOMER"
        navRole={userNav}
        home=""
        chartItemNumber={cartItemCount}
      />
      <div className="m-auto h-[100vh] max-w-[1280px]">
        <div className="h-[100%] pt-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
