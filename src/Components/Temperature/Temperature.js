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
        <h1 className="display-4 fw-bold ">Temperatura</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            L'aumento delle temperature globali è innescato principalmente
            dall'emissione eccessiva di gas serra, quali anidride carbonica e
            metano, dovuta alle attività umane come industria e trasporti.
            Questi gas intrappolano il calore nell'atmosfera, creando l'effetto
            serra e portando a cambiamenti climatici significativi.
          </p>

          <p className="lead mb-4">
            Le conseguenze sono molteplici: lo scioglimento dei ghiacciai
            contribuisce all'innalzamento del livello del mare, minacciando le
            coste e le popolazioni costiere. Eventi meteorologici estremi come
            tempeste e ondate di calore sono sempre più frequenti, causando
            danni a infrastrutture e agricoltura. Ecosistemi vitali, come le
            barriere coralline, sono in pericolo, e ciò incide sulla
            biodiversità.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;

/* SETUP CHART */
const setupChartTemperatura = {
  labels: newArrayTime,
  datasets: [
    {
      label: "Temperatura",
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
          className="grafico"
          data={setupChartTemperatura}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
