import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div>
      <section className="wrapper">
        <div className="container">
          {/* DESCRIPTION */}
          <div className="row">
            <div className="col text-center mb-5">
              <h2 className="lead">
                In questo sito puoi trovare statistiche per i seguenti dati:
              </h2>
            </div>
          </div>
          {/*  DIV CARD */}
          <div className="row">
            {" "}
            {/* CARD METANO */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Metano"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Metano </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* CARD TEMPERATURA */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Temperature"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Temperatura </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* CARD NO2 */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./NO2"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">NO2 </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./CO2"}>
                {/* CARD CO2 */}
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">CO2 </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* CARD GHIACCIO POLARE */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Ghiacciai"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Ghiaccio Polare </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Section;
