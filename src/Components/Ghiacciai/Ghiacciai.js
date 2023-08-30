import React from "react";
import "./Ghiacciai.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { Line } from "react-chartjs-2";
import {
  newArrayGhiacciaiArea,
  newArrayGhiacciaiExtent,
  ghiacciaiTime,
} from "../FetchData";

const Ghiacciai = () => {
  return (
    <div>
      <Navbar></Navbar>
      <GhiacciaiSection></GhiacciaiSection>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default Ghiacciai;

export const GhiacciaiSection = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">Ghiaccio Polare</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            Lo scioglimento accelerato dei ghiacciai è causato principalmente
            dall'aumento delle temperature globali. Questo fenomeno è alimentato
            dalle emissioni di gas serra, come il metano, prodotto da attività
            umane e processi naturali. L'effetto serra trattiene il calore
            nell'atmosfera, innescando scioglimenti ghiacciati. Le conseguenze
            includono l'innalzamento dei mari, modifiche negli ecosistemi e
            impatti climatici estremi. È cruciale agire riducendo le emissioni e
            adottando soluzioni sostenibili per affrontare questa sfida.
          </p>
        </div>

        {/* ---------- GRAFICO ------------ */}
      </div>
    </div>
  );
};

//--------------- GRAFICO ---------------
const setupChartGhiacciai = {
  labels: ghiacciaiTime,
  datasets: [
    {
      label: "Area",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayGhiacciaiArea,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Imposta la curvatura delle linee
    },
    {
      label: "Estensione",
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgb(54, 162, 235)",
      data: newArrayGhiacciaiExtent,
      borderWidth: 2,
      fill: false,
      pointBorderWidth: -5,
      pointRadius: 1.5,
      lineTension: 0.4, // Imposta la curvatura delle linee
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
        color: "rgba(255, 255, 255, 0.2)", // Colore e opacità delle linee dell'asse X
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Colore e opacità delle linee dell'asse X
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
          data={setupChartGhiacciai}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
