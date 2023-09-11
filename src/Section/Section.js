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
                On this site you can find statistics for the following data:{" "}
              </h2>
            </div>
          </div>
          {/*  DIV CARD */}
          <div className="row">
            {" "}
            {/* CARD METHANE */}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Methane"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Methane </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* CARD TEMPERATURE */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Temperature"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Temperature </h4>
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
            {/* CARD GlLACIER */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Glaciers"}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">Glacier </h4>
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
