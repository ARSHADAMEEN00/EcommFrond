import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FromContainer.js";
import { register } from "../actions/userActions";
import FromContainer from "../components/FromContainer.js";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div>
      <FromContainer>
        <h1>Sign Up</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="email">Password</label>
            <input
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              value={confirmPassword}
              placeholder="Confirm PlaceHolder"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit">Register</button>
        </form>

        {message ? <h1>{message}</h1> : '' }

        <div>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </div>
      </FromContainer>
      {loading ? <Loader /> : ""}
      {error ? <h1>{error}</h1> : ""}
    </div>
  );
};

export default RegisterScreen;
