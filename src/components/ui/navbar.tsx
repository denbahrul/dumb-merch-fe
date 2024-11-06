import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Cookies from "js-cookie";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link, NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 2,
    border: `1px solid`,
    padding: "0",
    backgroundColor: "#F74D4D",
  },
}));

interface INavbar {
  navRole: any[];
  home: string;
  role: "ADMIN" | "CUSTOMER";
  chartItemNumber?: number;
}

function Navbar({ navRole, home, role, chartItemNumber }: INavbar) {
  return (
    <div className="fixed z-10 m-auto w-[100%] bg-background-primary">
      <div className="m-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        <div>
          <Link to={`/${home}`}>
            <img src="/dm-logo.svg" alt="dumb merch logo" className="h-14" />
          </Link>
        </div>
        <div className="flex gap-6">
          {navRole.map(({ name, path }: { name: string; path: string }) => {
            return (
              <NavLink to={path} key={path}>
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
        </div>
        <div className="flex items-center gap-4">
          {role === "CUSTOMER" ? (
            <Link to={"/cart"}>
              <div>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={chartItemNumber} color="success">
                    <ShoppingCartOutlinedIcon
                      fontSize="medium"
                      className="h-8 text-white"
                    />
                  </StyledBadge>
                </IconButton>
              </div>
            </Link>
          ) : null}
          <p>|</p>
          <Link to="/login">
            <p
              className="text-lg font-semibold"
              onClick={() => {
                Cookies.remove("token");
              }}
            >
              Logout
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
