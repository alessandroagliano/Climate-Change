import React from "react";
import "./NO2.css";
import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { Line } from "react-chartjs-2";
import { No2Time, newArrayNo2 } from "../FetchData";
const NO2 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <NO2Section></NO2Section>
      <LineChart></LineChart>
      <Footer></Footer>
    </div>
  );
};

export default NO2;

export const NO2Section = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        <h1 className="display-4 fw-bold ">N02</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            L'ossido di azoto (NO2) è un gas inquinante dell'aria prodotto
            principalmente dalle attività umane legate alla combustione dei
            combustibili fossili, come l'industria, il trasporto su strada e
            l'agricoltura intensiva.
          </p>
          <p className="lead mb-4">
            L'NO2 ha un impatto diretto sul cambiamento climatico e
            sull'ambiente. In primo luogo, è un gas serra relativamente potente,
            trattenendo il calore nell'atmosfera e contribuendo al riscaldamento
            globale. Inoltre, l'NO2 reagisce con altri composti chimici
            nell'atmosfera, formando particelle di aerosol e acido nitrico, che
            influenzano la qualità dell'aria e la salute umana.
          </p>

          <p className="lead mb-4">
            Le conseguenze del maggior riscaldamento dovuto all'NO2 includono lo
            scioglimento dei ghiacciai e dei poli, l'innalzamento del livello
            del mare e l'aumento degli eventi climatici estremi. Inoltre, l'NO2
            è collegato all'acidificazione del suolo e delle acque, influenzando
            gli ecosistemi terrestri e acquatici.
          </p>
        </div>

        {/* ---------- GRAFICO ------------ */}
      </div>
    </div>
  );
};

//-------------- Grafico ---------------

const setupChartNo2 = {
  labels: No2Time,
  datasets: [
    {
      label: "NO2",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: newArrayNo2,
      borderWidth: 2, // //Change the thickness of the line
      fill: false, //  Prevents underlined fill
      pointBorderWidth: -5, // Change the radius of the point apexes
    },
  ],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      min: 310, // Set the minimum value of the y-axis
      max: 340, // Set the maximum value of the y-axis
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
      <div className="d-flex justify-content-center">
        <Line className="grafico" data={setupChartNo2} options={optionsChart} />
      </div>
    </div>
  );
};
