import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="blue darken-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">SFS</Link>

        {/* <a h
        ref="#" className="brand-logo left">SFS</a> */}
        <a href="#" data-activates="mobile-demo" className="button-collapse right">
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Who we are</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
