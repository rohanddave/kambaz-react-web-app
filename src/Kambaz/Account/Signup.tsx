import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, _] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };

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
      <button
        id="wd-signup-btn"
        onClick={signup}
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </button>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
