import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrollCourse,
  unenrollCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrollCourse: (courseId: string) => void;
  unenrollCourse: (courseId: string) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [displayedCourses, setDisplayedCourses] = useState<any[]>([]);
  const [mode, setMode] = useState<"all" | "enrolled">("all");

  useEffect(() => {
    if (!currentUser || !courses.length || !enrollments.length) return;

    const updatedCourses = courses.map((course) => ({
      ...course,
      enrolled: enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      ),
    }));

    if (mode === "enrolled") {
      setDisplayedCourses(updatedCourses.filter((course) => course.enrolled));
    } else {
      setDisplayedCourses(updatedCourses);
    }
  }, [mode, currentUser, courses, enrollments]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      {currentUser.role === "STUDENT" && (
        <>
          <button
            onClick={() => setMode(mode === "enrolled" ? "all" : "enrolled")}
          >
            {mode === "enrolled" ? "All" : "Enrolled"}
          </button>
        </>
      )}
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <br />
          </h5>
          <hr />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-5">
          {displayedCourses.map((course, index) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "270px" }}
              key={index}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src="/images/react.png"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                    {currentUser.role === "STUDENT" && (
                      <>
                        {course.enrolled ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              unenrollCourse(course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              enrollCourse(course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
