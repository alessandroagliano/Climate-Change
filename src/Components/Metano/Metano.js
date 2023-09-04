import React from "react";
import "./Metano.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Line } from "react-chartjs-2";

import { metanoTime } from "../FetchData";
import { newArrayMetano } from "../FetchData";
const Metano = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MetanoSection></MetanoSection>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default Metano;

export const MetanoSection = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">Metano</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            Il metano è un potente gas serra le cui emissioni sono influenzate
            da attività industriali, agricole e processi naturali. Questo gas
            contribuisce notevolmente al riscaldamento globale, trattenendo il
            calore nell'atmosfera. Il suo impatto si riflette nell'effetto serra
            amplificato e nel rilascio da depositi di ghiaccio e permafrost.
            Ridurre le emissioni di metano è cruciale per mitigare il
            cambiamento climatico e preservare l'equilibrio del nostro pianeta.
          </p>
        </div>

        {/* ---------- GRAFICO ------------ */}
      </div>
    </div>
  );
};

//-------------- Grafico ---------------

const setupChartMetano = {
  labels: metanoTime,
  datasets: [
    {
      label: "Metano",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayMetano,
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
          className="grafico"
          data={setupChartMetano}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
