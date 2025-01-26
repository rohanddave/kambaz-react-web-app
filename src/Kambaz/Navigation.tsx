import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="list-group wd rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <br />
      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>
      <br />
      <NavLink
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "active" : "bg-black text-white"
          }`
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </NavLink>
      <br />
      <NavLink
        to="/Kambaz/Courses/123"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "active" : "bg-black text-white"
          }`
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </NavLink>
      <br />
      <NavLink
        to="/Kambaz/Calendar"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "active" : "bg-black text-white"
          }`
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>
      <br />

      <NavLink
        to="/Kambaz/Inbox"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "active" : "bg-black text-white"
          }`
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>
      <br />

      <NavLink
        to="/Labs"
        id="wd-course-link"
        className={({ isActive }) =>
          `list-group-item text-center border-0 ${
            isActive ? "active" : "bg-black text-white"
          }`
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </NavLink>
    </div>
  );
}
