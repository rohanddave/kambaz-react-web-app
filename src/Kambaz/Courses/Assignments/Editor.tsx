import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = assignments.find(
    (assignment: any) => assignment._id == aid
  );
  return (
    <Container id="wd-assignments-editor">
      <Form>
        <Form.Group controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            defaultValue={assignment?.title}
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
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-danger text-white"
          >
            Save
          </Link>
        </Container>
      </Form>
    </Container>
  );
}
