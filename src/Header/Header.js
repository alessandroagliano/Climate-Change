import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./cover.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa il pacchetto JavaScript di Bootstrap

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>{" "}
      {/* <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Features
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="px-3">
          <h1>Climate Change 360.</h1>
          <p className="lead">
            Portale dove comparare la variazioni dei parametri che portano al
            cambiamento Climatico
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              Learn more
            </a>
          </p>
        </main>
        <footer className="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div> */}
      <div className="container2 text-center align-item-center immagine-sfondo">
        <div className="col-6 title " /* inutilizzato title */>
          {" "}
          <h1>ClimateChange360</h1>;
          <p>Analisi Statistiche per il Cambiamento Climatico</p>
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
              {/* justify-content-end */}
              <li class="nav-item">
                <Link to={"/"}>
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#www.google.it"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Statistiche
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to={"/Temperature"}>Temperatura</Link>
                  </li>
                  <li>
                    <Link to={"/CO2"}>Co2</Link>
                  </li>
                  <li>
                    <Link to={"/Ghiacciai"}>Ghiacciai</Link>
                  </li>
                  <li>
                    <Link to={"/Metano"}>Metano</Link>
                  </li>
                  <li>
                    <Link to="/NO2">NO2</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link to={"./ChiSono"}>
                  <a class="nav-link" href="#https://www.google.it">
                    Chi siamo
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
