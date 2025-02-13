import { NavLink, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, _) => (
        <NavLink
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={({ isActive }) =>
            `list-group-item ${
              isActive ? "active" : "text-danger"
            } border border-0`
          }
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
