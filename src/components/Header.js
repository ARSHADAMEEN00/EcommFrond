import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { useEffect } from "react";

const Header = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <header style={{ backgroundColor: "grey" }} className=" flex-r">
      <div className="logo">
        <Link to="/">
          <h1>MYSHOP</h1>
        </Link>
      </div>

      <div className="left flex-r" style={{ marginLeft: "" }}>
        <Link to="/cart">Cart</Link>
        {userInfo ? <div style={{display : 'flex', flexDirection: 'row'}} ><li style={{listStyle: 'none'}} >{userInfo.name}</li>  <li style={{listStyle: 'none'}} onClick={logoutHandler} >Logout</li> <Link to='/profile' >Profile</Link> </div> : 
        <Link to="/login">Log In</Link>}
      </div>
    </header>
  );
};

export default Header;
