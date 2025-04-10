import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link}
          className={({ isActive }) =>
            `list-group-item border border-0 ${
              isActive ? "active text-black" : "text-danger"
            }`
          }
          to={`/Kambaz/Account/${link}`}
        >
          {link}
        </NavLink>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kambaz/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
    </div>
  );
}
