import { FaPlus } from "react-icons/fa6";
import { Button, Dropdown } from "react-bootstrap";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser.role === "FACULTY" && (
        <>
          <Button
            variant="danger"
            size="lg"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Module
          </Button>
          <Dropdown className="float-end me-2">
            <Dropdown.Toggle
              variant="secondary"
              size="lg"
              id="wd-publish-all-btn"
            >
              <GreenCheckmark /> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="wd-publish-all">
                <GreenCheckmark /> Publish All
              </Dropdown.Item>
              <Dropdown.Item id="wd-publish-all-modules-and-items">
                <GreenCheckmark /> Publish all modules and items
              </Dropdown.Item>
              <Dropdown.Item id="wd-publish-modules-only">
                <GreenCheckmark /> Publish modules only
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}

      <Button className="float-end me-2" variant="secondary" size="lg">
        View Progress
      </Button>
      <Button className="float-end me-2" variant="secondary" size="lg">
        Collapse All
      </Button>
      {currentUser.role === "FACULTY" && (
        <ModuleEditor
          dialogTitle="Add Module"
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={addModule}
        />
      )}
    </div>
  );
}
