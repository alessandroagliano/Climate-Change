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
            Nitrous oxide (NO2) is a gas produced air pollutant mainly from
            human activities related to the combustion of fossil fuels, such as
            industry, road transport and intensive agriculture.
          </p>
          <p className="lead mb-4">
            NO2 has a direct impact on climate change and on the environment.
            First, it is a relatively potent greenhouse gas, retaining heat in
            the atmosphere and contributing to warming global. Additionally, NO2
            reacts with other chemical compounds into the atmosphere, forming
            aerosol particles and nitric acid, which affect air quality and
            human health.
          </p>

          <p className="lead mb-4">
            The consequences of increased warming due to NO2 include the melting
            of glaciers and poles, rising levels of the sea and the increase in
            extreme climate events. Furthermore, NO2 is linked to acidification
            of soil and water, influencing terrestrial and aquatic ecosystems.
          </p>
        </div>

        {/* ---------- graphic ------------ */}
      </div>
    </div>
  );
};

//-------------- graphic ---------------

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
        <Line className="graphic" data={setupChartNo2} options={optionsChart} />
      </div>
    </div>
  );
};
