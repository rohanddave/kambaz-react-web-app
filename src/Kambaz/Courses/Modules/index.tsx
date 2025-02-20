import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      {modules
        .filter((module: any) => module.course == cid)
        .map((module: any) => (
          <ListGroup className="rounded-0 mb-5" id="wd-modules">
            <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}
                <ModuleControlButtons />
              </div>
            </ListGroup.Item>
            {module.lessons &&
              module.lessons.map((lesson: any) => (
                <ListGroup className="wd-lessons rounded-0">
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                </ListGroup>
              ))}
          </ListGroup>
        ))}
    </div>
  );
}
