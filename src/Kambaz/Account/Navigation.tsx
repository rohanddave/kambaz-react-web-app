import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active text-black" : "text-danger"
          }`
        }
        to={`/Kambaz/Account/Signin`}
      >
        Signin
      </NavLink>
      <br />
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active text-black" : "text-danger"
          }`
        }
        to={`/Kambaz/Account/Signup`}
      >
        Signup
      </NavLink>
      <br />
      <NavLink
        className={({ isActive }) =>
          `list-group-item border border-0 ${
            isActive ? "active text-black" : "text-danger"
          }`
        }
        to={`/Kambaz/Account/Profile`}
      >
        Profile
      </NavLink>
      <br />
    </div>
  );
}
