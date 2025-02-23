import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import CourseProtectedRoute from "./ProtectedRoute";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const url = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {url.pathname.trim().split("/").pop()}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route
              path="Home"
              element={
                <CourseProtectedRoute>
                  <Home />
                </CourseProtectedRoute>
              }
            />
            <Route
              path="Modules"
              element={
                <CourseProtectedRoute>
                  <Modules />
                </CourseProtectedRoute>
              }
            />
            <Route
              path="Assignments"
              element={
                <CourseProtectedRoute>
                  <Assignments />
                </CourseProtectedRoute>
              }
            />
            <Route
              path="Assignments/:aid"
              element={
                <CourseProtectedRoute>
                  <AssignmentEditor />
                </CourseProtectedRoute>
              }
            />
            <Route
              path="People"
              element={
                <CourseProtectedRoute>
                  <PeopleTable />
                </CourseProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
