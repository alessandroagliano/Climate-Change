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
            CO2, or carbon dioxide, is a naturally occurring gas in the
            atmosphere which plays a vital role in thermal regulation of the
            planet. However, human activities, such as the use of fuels fossils
            and deforestation have increased significantly its atmospheric
            concentrations. This increase has an impact directly on climate
            change.
          </p>

          <p className="lead mb-4">
            The accumulation of CO2 in the atmosphere acts like a thermal
            blanket, trapping heat and causing the greenhouse effect.
            Consequentially, global temperatures increase, leading to extreme
            phenomena such as heat waves, more intense storms and prolonged
            droughts. Furthermore, global warming accelerates the melting of
            glaciers and contributes to sea level rise, threatening coastal
            communities
          </p>
        </div>
      </div>
    </div>
  );
};

//--------- graphic ---------

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
          className="graphic"
          data={setupChartTemperatura}
          options={optionsChart}
        />
      </div>
    </div>
  );
};
