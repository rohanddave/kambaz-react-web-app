import { ListGroup } from "react-bootstrap";
import { Link } from "react-router";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

type Assignment = {
  id: number;
  title: string;
  available: string;
  due: string;
  points: number;
};

function AssignmentCard({ assignment }: { assignment: Assignment }) {
  return (
    <Link
      to="/Kambaz/Courses/1234/Assignments/123"
      className="wd-assignment-link"
      style={{ textDecoration: "none" }}
    >
      <ListGroup
        key={assignment.id}
        className="wd-assignment-list-item rounded-0"
      >
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <div className="assignment-details">
              <div className="assignment-title">{assignment.title}</div>
              <div className="assignment-meta">
                <span>{assignment.available}</span> | <b>Due</b>{" "}
                {assignment.due} | <span>{assignment.points} pts</span>
              </div>
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Link>
  );
}

export default function Assignments() {
  const assignments: Assignment[] = [
    {
      id: 1,
      title: "A1 - ENV + HTML",
      available: "6 May at 12:00am",
      due: "May 20 at 11:59pm",
      points: 100,
    },
  ];

  return (
    <div id="wd-assignments">
      <div className="wd-search-container d-flex align-items-center mb-3">
        <div className="position-relative">
          <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search..."
          />
        </div>

        <div className="ms-auto d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-light border me-2 d-inline-flex align-items-center px-3 py-2"
          >
            <span className="me-1">+</span> Group
          </button>

          <button
            id="wd-add-assignment"
            className="btn btn-danger text-white d-inline-flex align-items-center px-3 py-2"
          >
            <span className="me-1">+</span> Assignment
          </button>
        </div>
      </div>
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments
            <ModuleControlButtons />
          </div>
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} assignment={assignment} />
          ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
