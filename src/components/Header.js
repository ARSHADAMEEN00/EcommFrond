import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "grey" }} className=" flex-r">
      <div className="logo">
        <Link to="/">
          <h1>PROSHOP</h1>
        </Link>
      </div>

      <div className="left" style={{ marginLeft: "" }}>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Log In</Link>
      </div>
    </header>
  );
};

export default Header;
