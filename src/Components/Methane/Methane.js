import React from "react";
import "./Methane.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Line } from "react-chartjs-2";

import { methaneTime } from "../FetchData";
import { newArrayMethane } from "../FetchData";
const Methane = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MethaneSection></MethaneSection>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default Methane;

export const MethaneSection = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">Methane</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            Methane is a potent greenhouse gas whose emissions are affected from
            industrial, agricultural activities and natural processes. This gas
            contributes greatly to global warming by retaining the heat in the
            atmosphere. Its impact is reflected in the greenhouse effect
            amplified and in release from ice deposits and permafrost. Reducing
            methane emissions is crucial to mitigating the climate change and
            preserve the balance of our planet.
          </p>
        </div>

        {/* ---------- graphic ------------ */}
      </div>
    </div>
  );
};

//-------------- graphic ---------------

const setupChartMethane = {
  labels: methaneTime,
  datasets: [
    {
      label: "Methane",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayMethane,
      borderWidth: 1, // Change the thickness of the line
      fill: false, //  Prevents underlined fill
      pointBorderWidth: -5, //  Change the radius of the point apexes
      pointRadius: 1.5,
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 1500, // Set the minium value of the y-axis
      max: 2000, // Set the maximum value of the y-axis
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of X-axis lines
      },
    },
  },
  plugins: {
    zoom: {
      pan: {
        enabled: true,
        mode: "xy",
      },
      zoom: {
        enabled: true,
        mode: "xy",
      },
    },
  },
};

const LineChart = (data, options) => {
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <Line
          className="graphic"
          data={setupChartMethane}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
