import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FromContainer from "../components/FromContainer";
import { redirect } from "express/lib/response";

const LoginScreen = ({location}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const riderect = location.search ? location.search.split('=')[1]: '/'
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return <div>
    <FromContainer>
        <h1>Sign In</h1>
        <form  onSubmit={submitHandler}>
        <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} placeholder='Email' onChange={(e) => {
            setEmail(e.target.value)
        }} />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input placeholder="Enter Password" value={password} onChange={(e) => {
            setPassword(e.target.value)
        }} />
        </div>
        <button type="submit">SignIN</button>
        </form>

        <div>
            New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} ></Link>
        </div>
    </FromContainer>
  </div>;
};

export default LoginScreen;
