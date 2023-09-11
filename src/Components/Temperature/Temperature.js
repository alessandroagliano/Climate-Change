import React from "react";

import "./Temperature.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { Line } from "react-chartjs-2";
import { newArrayTemperature, newArrayTime } from "../FetchData";

const Temperature = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TemperatureSection></TemperatureSection>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export const TemperatureSection = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">Temperature</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            The rise in global temperatures is mainly triggered from the
            excessive emission of greenhouse gases, such as carbon dioxide and
            methane, due to human activities such as industry and transport.
            These gases trap heat in the atmosphere, creating the effect
            greenhouse and leading to significant climate change.
          </p>

          <p className="lead mb-4">
            The consequences are multiple: the melting of glaciers contributes
            to sea level rise, threatening the coasts and coastal populations.
            Extreme weather events such as storms and heat waves are
            increasingly frequent, causing damage to infrastructure and
            agriculture. Vital ecosystems, such as coral reefs, are in danger,
            and this affects the biodiversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;

/* SETUP CHART */
const setupChartTemperature = {
  labels: newArrayTime,
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayTemperature,
      borderWidth: 1, //Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
      pointRadius: 1.5,
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
        color: "rgba(255, 255, 255, 0.2)", // Color and opacity of y-axis lines
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
    <div className="d-flex justify-content-center ">
      <div>
        <Line
          className="graphic"
          data={setupChartTemperature}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
