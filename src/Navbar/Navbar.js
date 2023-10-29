import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_first_container">
        <img src={logo} alt="logo" />
        <h1>Validation Tool</h1>
      </div>
      <div className="navbar_second_container">
        <NavButton path={""} text="LGD Modal" />
        <NavButton path={""} text="ED Modal" />
        <NavButton path={"/panel"} text="PD Modal" />
      </div>
    </div>
  );
};

const NavButton = ({ text, path }) => {
  return <NavLink  to={path}>{text}</NavLink>;
};

export default Navbar;
