import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <br />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <br />
      <Form.Control
        id="wd-confirm-password"
        placeholder="confirm password"
        type="password"
        className="mb-2"
      />
      <br />
      <Link
        id="wd-signup-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
