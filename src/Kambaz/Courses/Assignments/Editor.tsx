import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router";
import { useRef, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment as updateAssignmentOnServer } from "./client";
import { createAssignmentForCourse } from "../client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const initialAssignment = assignments.find((a: any) => a._id === aid);
  const isEditingRef = useRef(!!initialAssignment);

  const [assignment, setAssignment] = useState<any | undefined>(
    initialAssignment
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editAssignment = async (assignment: any) => {
    const updatedAssignment = await updateAssignmentOnServer(assignment);
    dispatch(updateAssignment(updatedAssignment));
  };

  const createAssignment = async (assignment: any) => {
    if (cid) {
      const createdAssignment = await createAssignmentForCourse(
        cid,
        assignment
      );
      dispatch(addAssignment({ ...createdAssignment, course: cid }));
    }
  };

  const handleSaveClick = () => {
    console.log("handle save click called");
    if (isEditingRef.current) {
      editAssignment(assignment);
    } else {
      createAssignment(assignment);
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            defaultValue={assignment?.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>
        <br />
        <br />
        <Form.Group controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            id="wd-description"
            as="textarea"
            defaultValue={assignment?.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            rows={4}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="wd-points">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Points</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                id="wd-points"
                type="number"
                defaultValue={assignment?.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: parseInt(e.target.value),
                  })
                }
              />
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-group">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Assignment Group</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                name="group"
                id="wd-group"
                as="select"
                defaultValue="assignment"
              >
                <option value="assignment">ASSIGNMENTS</option>
                <option value="quiz">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="project">PROJECT</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-display-grade-as">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Display Grade As</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                name="grade"
                id="wd-display-grade-as"
                as="select"
                defaultValue="percentage"
              >
                <option value="percentage">Percentage</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-submission-type">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Submission Type</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Control
                name="grade"
                id="wd-submission-type"
                as="select"
                defaultValue="online"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </Form.Control>

              <div className="mt-3">
                <h5>Online Entry Options</h5>
                <Form.Check
                  type="checkbox"
                  label="Text Entry"
                  id="wd-text-entry"
                />
                <Form.Check
                  type="checkbox"
                  label="Website URL"
                  id="wd-website-url"
                />
                <Form.Check
                  type="checkbox"
                  label="Media Recordings"
                  id="wd-media-recordings"
                />
                <Form.Check
                  type="checkbox"
                  label="Student Annotation"
                  id="wd-student-annotation"
                />
                <Form.Check
                  type="checkbox"
                  label="File Uploads"
                  id="wd-file-upload"
                />
              </div>
            </Col>
          </Row>
        </Form.Group>

        <br />

        <Form.Group controlId="wd-assign-to">
          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Form.Label>Assign</Form.Label>
            </Col>
            <Col md={6}>
              <Form.Label>Assign To</Form.Label>
              <Form.Control
                id="wd-assign-to"
                type="text"
                defaultValue="Everyone"
              />

              <br />

              <Form.Group controlId="wd-due-date">
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" defaultValue="2025-01-02" />
              </Form.Group>

              <br />

              <Row>
                <Col md={6}>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label>Available from</Form.Label>
                    <Form.Control
                      id="wd-available-from"
                      type="date"
                      defaultValue={assignment?.available_date}
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          available_date: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label>Until</Form.Label>
                    <Form.Control
                      id="wd-available-until"
                      type="date"
                      defaultValue="2025-01-02"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form.Group>
        <br />

        <hr />

        <Container className="d-flex justify-content-end">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-secondary text-dark me-2"
          >
            Cancel
          </Link>
          <button
            onClick={() => {
              handleSaveClick();
            }}
            className="btn btn-danger text-white"
          >
            Save
          </button>
        </Container>
      </Form>
    </Container>
  );
}
