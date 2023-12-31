import React from "react";
import { Link } from "react-router-dom"; // Import Link for react-router

import "./Header.css";
import "./cover.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Javascript

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>{" "}
      <div className="container2 text-center align-item-center background-image">
        <div className="col-6 title ">
          {" "}
          <h1>ClimateChange360</h1>;
          <p>Statistical Analysis for Climate Change</p>
        </div>
        <div className="col-6 "></div>
      </div>{" "}
    </div>
  );
};

export default Header;

export const Navbar = () => {
  return (
    <div>
      {" "}
      {/* NAVBAR */}
      <nav className="d-flex navbar  " data-bs-theme="dark">
        <div className="container-fluid">
          <Link to={"/"}>
            <a className="navbar-brand" href="#home">
              ClimateChange360
            </a>
          </Link>

          <div>
            {" "}
            <ul class="nav ">
              {" "}
              <li class="nav-item">
                <Link to={"/"}>
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </Link>
              </li>
              {/* DROPDOWN */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#www.google.it"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Statistics
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to={"/Temperature"}>Temperature</Link>
                  </li>
                  <li>
                    <Link to={"/CO2"}>Co2</Link>
                  </li>
                  <li>
                    <Link to={"/Glaciers"}>Glaciers</Link>
                  </li>
                  <li>
                    <Link to={"/Methane"}>Methane</Link>
                  </li>
                  <li>
                    <Link to="/NO2">NO2</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to={"/WhoIAm"}>
                  <a class="nav-link" href="#https://www.google.it">
                    Who I Am
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
