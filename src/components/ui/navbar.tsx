import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link, NavLink } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar({ navRole, home }: { navRole: any[]; home: string }) {
  return (
    <div className="fixed m-auto w-[100%] bg-background-primary">
      <div className="m-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        <div>
          <Link to={`/${home}`}>
            <img src="/dm-logo.svg" alt="dumb merch logo" className="h-14" />
          </Link>
        </div>
        <div className="flex gap-6">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="primary" />
            </StyledBadge>
          </IconButton>
          {navRole.map(({ name, path }: { name: string; path: string }) => {
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
  );
}

export default Navbar;
