import React from "react";
import "./Glaciers.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { Line } from "react-chartjs-2";
import {
  newArrayGlaciersArea,
  newArrayGlaciersExtent,
  glaciersTime,
} from "../FetchData";

const Glaciers = () => {
  return (
    <div>
      <Navbar></Navbar>
      <GlaciersSection></GlaciersSection>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default Glaciers;

export const GlaciersSection = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">Polar Ice</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            The accelerated melting of glaciers is mainly caused by the increase
            in global temperatures. This phenomenon is fueled from emissions of
            greenhouse gases, such as methane, produced by activities human and
            natural processes. The greenhouse effect retains heat into the
            atmosphere, triggering icy melts. The consequences include rising
            seas, changes in ecosystems and extreme climate impacts. It is
            crucial to act by reducing emissions and adopting sustainable
            solutions to address this challenge.
          </p>
        </div>

        {/* ---------- Graphic ------------ */}
      </div>
    </div>
  );
};

//--------------- Graphic ---------------
const setupChartGlaciers = {
  labels: glaciersTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayGlaciersArea,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
    {
      label: "Extension",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: newArrayGlaciersExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Set the curvature of the lines
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
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
    <div className="d-flex justify-content-center">
      <div>
        <Line
          className="grafico"
          data={setupChartGlaciers}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
