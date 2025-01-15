import { Link } from "react-router";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <p>
            <Link
              to="/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A1 - ENV + HTML
            </Link>
            <br />
            Multiple Modules | <b>Not available until</b> 6 May at 12:00am |{" "}
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <p>
            <Link
              to="/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A2 - CSS + BOOTSTRAP
            </Link>
            <br />
            Multiple Modules | <b>Not available until</b> 13 May at 12:00am |
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </p>
        </li>

        <li className="wd-assignment-list-item">
          <p>
            <Link
              to="/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link"
            >
              A3 - JAVASCRIPT + REACT
            </Link>
            <br />
            Multiple Modules | <b>Not available until</b> 20 May at 12:00am |
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}
