import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  const people = [
    {
      firstName: "Tony",
      lastName: "Stack",
      loginId: 123,
      section: "S101",
      role: "Student",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      firstName: "Bruce",
      lastName: "Wayne",
      loginId: 123,
      section: "S101",
      role: "Student",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
    {
      firstName: "Natasha",
      lastName: "Romanoff",
      loginId: 123,
      section: "S101",
      role: "Student",
      lastActivity: "2020-10-01",
      totalActivity: "10:21:32",
    },
  ];
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{person.firstName}</span>{" "}
                <span className="wd-last-name">{person.lastName}</span>
              </td>
              <td className="wd-login-id">{person.loginId}</td>
              <td className="wd-section">{person.section}</td>
              <td className="wd-role">{person.role}</td>
              <td className="wd-last-activity">{person.lastActivity}</td>
              <td className="wd-total-activity">{person.totalActivity}</td>
            </tr>
          ))}

          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>
      </Table>
    </div>
  );
}
