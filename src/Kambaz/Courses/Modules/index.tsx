import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
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
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
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
