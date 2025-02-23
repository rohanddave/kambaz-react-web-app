import { ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { assignments } from "../../Database";
import { useSelector } from "react-redux";

type Assignment = {
  _id: string;
  title: string;
  course: string;
};

function AssignmentCard({ assignment }: { assignment: Assignment }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();

  return (
    <ListGroup
      key={assignment._id}
      className="wd-assignment-list-item rounded-0"
    >
      <ListGroup.Item
        className="wd-lesson p-3 ps-1"
        onClick={() => {
          if (currentUser.role === "FACULTY")
            navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`);
        }}
      >
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <div className="assignment-details">
            <div className="assignment-title">{assignment.title}</div>
            <div className="assignment-meta">
              {/* TODO */}
              {/* <span>{assignment.available}</span> | <b>Due</b>{" "}
                {assignment.due} | <span>{assignment.points} pts</span> */}
            </div>
          </div>
          <div className="ms-auto">
            <LessonControlButtons />
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseAssignments: Assignment[] = assignments.filter(
    (assignment: any) => assignment.course == cid
  );

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

        {currentUser.role === "FACULTY" && (
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
        )}
      </div>
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments
            {/* <ModuleControlButtons
              moduleId={module._id}
              deleteModule={(moduleId) => {
                dispatch(deleteModule(moduleId));
              }}
              editModule={(moduleId) => dispatch(editModule(moduleId))}
            /> */}
          </div>
          {courseAssignments.map((assignment: any) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
