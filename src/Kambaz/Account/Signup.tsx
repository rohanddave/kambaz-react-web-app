import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    if (user.password !== user.confirmedPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!user.username || !user.password) {
      alert("Please enter a username and password");
      return;
    }
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <Form.Control
        id="wd-confirm-password"
        placeholder="confirm password"
        type="password"
        className="mb-2"
        onChange={(e) =>
          setUser({ ...user, confirmedPassword: e.target.value })
        }
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
