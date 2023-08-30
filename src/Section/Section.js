import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default Section;

export const Navbar = () => {
  return (
    <div>
      {/* ---------- section prova -------------- */}
      <section className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              {/*  <h1 className="display-4 font-weight-bolder">
                In questo sito puoi trovare statistiche per i seguenti dati:{" "}
              </h1> */}
              <h2 className="lead">
                In questo sito puoi trovare statistiche per i seguenti dati:
              </h2>
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Metano"}>
                <div
                  className="card text-dark card-has-bg click-col"
                  /* style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/600x900/?tech,street")',
                 }} */
                >
                  {/* <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                /> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">
                        <a
                          className="text-dark"
                          herf="https://creativemanner.com"
                        >
                          Metano{" "}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* TEMPERATURA */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Temperature"}>
                <div
                  className="card text-dark card-has-bg click-col"
                  /* style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/600x900/?tech,street")',
                 }} */
                >
                  {/* <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                /> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">
                        <a
                          className="text-dark"
                          herf="https://creativemanner.com"
                        >
                          Temperatura{" "}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* NO2 */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./NO2"}>
                <div
                  className="card text-dark card-has-bg click-col"
                  /* style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/600x900/?tech,street")',
                 }} */
                >
                  {/* <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                /> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">
                        <a
                          className="text-dark"
                          herf="https://creativemanner.com"
                        >
                          NO2{" "}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* co2 */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./CO2"}>
                <div
                  className="card text-dark card-has-bg click-col"
                  /* style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/600x900/?tech,street")',
                 }} */
                >
                  {/* <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                /> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">
                        <a
                          className="text-dark"
                          herf="https://creativemanner.com"
                        >
                          CO2{" "}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* TEMPERATURA */}{" "}
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Link to={"./Ghiacciai"}>
                <div
                  className="card text-dark card-has-bg click-col"
                  /* style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/600x900/?tech,street")',
                 }} */
                >
                  {/* <img
                  className="card-img d-none"
                  src="https://source.unsplash.com/600x900/?tech,street"
                  alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                /> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <h4 className="card-title mt-0 ">
                        <a
                          className="text-dark"
                          herf="https://creativemanner.com"
                        >
                          Ghiaccio Polare{" "}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
