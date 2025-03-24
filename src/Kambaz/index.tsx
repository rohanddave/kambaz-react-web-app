import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useDispatch, useSelector } from "react-redux";
import * as enrollmentClient from "./Courses/Enrollments/client";
import { enroll, setEnrollments, unenroll } from "./Courses/reducer";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrolledCourses = await userClient.findMyCourses();
      console.log("printing enrollments from find my courses");
      console.log(enrolledCourses);
      console.log("printing current user");
      console.log(currentUser);
      const en = enrolledCourses.map((c: any) => ({
        _id: c._id,
        user: currentUser._id,
        course: c._id,
      }));
      console.log("before setting enrollments");
      console.log(en);
      dispatch(setEnrollments({ enrollments: en }));
    } catch (e) {
      console.error(e);
    }
  };

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const enrollCourse = async (courseId: string) => {
    await enrollmentClient.enrollUser(courseId);
    dispatch(
      enroll({
        courseId,
        userId: currentUser._id,
      })
    );
  };

  const unenrollCourse = async (courseId: string) => {
    await enrollmentClient.unenrollUser(courseId);
    dispatch(
      unenroll({
        courseId,
        userId: currentUser._id,
      })
    );
  };

  useEffect(() => {
    fetchCourses();
    console.log("printing enrollments");
    console.log(enrollments);
    if (currentUser) fetchEnrollments();
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <h1>Kambaz</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz/Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrollCourse={enrollCourse}
                    unenrollCourse={unenrollCourse}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
