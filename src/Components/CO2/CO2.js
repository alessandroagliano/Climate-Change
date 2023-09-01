import React from "react";
import "./CO2.css";
import { Line } from "react-chartjs-2";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { co2Time, newArrayCO2 } from "../FetchData";

const CO2 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CO2Section></CO2Section>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default CO2;

export const CO2Section = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">C02</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            La CO2, o anidride carbonica, è un gas naturale presente
            nell'atmosfera che svolge un ruolo vitale nella regolazione termica
            del pianeta. Tuttavia, le attività umane, come l'uso di carburanti
            fossili e la deforestazione, hanno aumentato in modo significativo
            le sue concentrazioni atmosferiche. Questo aumento ha un impatto
            diretto sul cambiamento climatico.
          </p>

          <p className="lead mb-4">
            L'accumulo di CO2 nell'atmosfera agisce come una coperta termica,
            intrappolando il calore e causando l'effetto serra. Di conseguenza,
            le temperature globali aumentano, portando a fenomeni estremi come
            ondate di calore, tempeste più intense e siccità prolungate.
            Inoltre, il riscaldamento globale accelera lo scioglimento dei
            ghiacciai e contribuisce all'innalzamento del livello del mare,
            minacciando le comunità costiere
          </p>
        </div>
      </div>
    </div>
  );
};

//--------- grafico ---------

const setupChartTemperatura = {
  labels: co2Time, // y-axis dates
  datasets: [
    {
      label: "CO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayCO2, // y-axis dates
      borderWidth: 1, // Change the thickness of the line
      fill: false, // Prevents underlined fill
      pointBorderWidth: -5, //Change the thickness of the superscript points
      pointRadius: 1.5,
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,

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
  scales: {
    y: {
      min: 370, // Set the minimum value of the x-axis
      max: 440, // Set the minimum value of the y-axis
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of Y-axis lines
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Color and opacity of X-axis lines
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
          data={setupChartTemperatura}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
