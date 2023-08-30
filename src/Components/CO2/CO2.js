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

        {/* ---------- GRAFICO ------------ */}
      </div>
    </div>
  );
};

//--------- grafico ---------

const setupChartTemperatura = {
  labels: co2Time,
  datasets: [
    {
      label: "CO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayCO2,
      borderWidth: 1, // Cambia lo spessore della linea
      fill: false, // Impedisce il riempimento sottolineato
      pointBorderWidth: -5, // Cambia lo spessore degli apici dei punti
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
      min: 350, // Imposta il valore minimo dell'asse y
      max: 450, // Imposta il valore massimo dell'asse y
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Colore e opacità delle linee dell'asse X
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.3)", // Colore e opacità delle linee dell'asse X
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
