import React, { Component } from "react";
import { Link } from "react-router-dom";
import Foto from "../../assets/foto.jpg";

export default class Menu extends Component {
  render() {
    const { pathname } = window.location;
    return (
      <div className="menu">
        <div className="Logo">
          <img
            className="Avatar"
            src={Foto} 
            alt="avatar"
          />
        </div>
        <Link to="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link
          to="/experiance"
          className={pathname === "/experiance" ? "active" : ""}
        >
          Experiance
        </Link>
        <Link
          to="/educations"
          className={pathname === "/educations" ? "active" : ""}
        >
          Educations
        </Link>
        <Link to="/skills" className={pathname === "/skills" ? "active" : ""}>
          Skills
        </Link>
        <Link
          to="/interest"
          className={pathname === "/interest" ? "active" : ""}
        >
          Interests
        </Link>
        <Link to="/awards" className={pathname === "/awards" ? "active" : ""}>
          Awards
        </Link>
      </div>
    );
  }
}
