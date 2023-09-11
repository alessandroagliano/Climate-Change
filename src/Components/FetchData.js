import "./fetchData.css";

import axios from "axios";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);
/* I create 2 arrays: 1 for x-axis data (time) and for y-axis (value).

Then I make a call to the API and from there I extract the data I need and
 add them to the arrays using the '.push()' array method.

I will then use these values ​​to create the graph of each respective component. */

//------------------------- TEMPERATURE -------------------------

const apiTemperature = "https://global-warming.org/api/temperature-api";
export const newArrayTime = []; // x axis
export const newArrayTemperature = []; // y axis

await axios
  .get(apiTemperature)
  .then((response) => {
    let dataApi = response.data.result;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.time);
        newArrayTemperature.push(item.station);
      }
    });
  })

  .catch((error) => {
    console.error("Error in request:", error);
  });

//------------------------- Methane -------------------------

const apiMethane = "https://global-warming.org/api/methane-api";
export const methaneTime = []; // x axis
export const newArrayMethane = []; // y axis
await axios
  .get(apiMethane)
  .then((response) => {
    let dataApi = response.data.methane;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        methaneTime.push(item.date);
        newArrayMethane.push(item.average);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request", error);
  });
console.log(newArrayTime);
console.log(newArrayTemperature);

//------------------------- CO2 -------------------------

const apiCO2 = "https://global-warming.org/api/co2-api";
export const co2Time = []; // x axis
export const newArrayCO2 = []; // y axis
await axios
  .get(apiCO2)
  .then((response) => {
    console.log(response);
    let dataApi = response.data.co2;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        co2Time.push(item.year);
        newArrayCO2.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request", error);
  });

//------------------------- Polar Ice -------------------------

/*  for polar ice I extrapolated both 'area' and 'extent'.
In the graph I will form two lines.*/

const apiGlaciers = "https://global-warming.org/api/arctic-api";
export const glaciersTime = []; // x axis
export const newArrayGlaciersArea = []; // y axis
export const newArrayGlaciersExtent = []; // y axis

await axios
  .get(apiGlaciers)
  .then((response) => {
    console.log(response);
    let dataApi = response.data.arcticData;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        glaciersTime.push(item.year);
        newArrayGlaciersArea.push(item.area);
        newArrayGlaciersExtent.push(item.extent);
      }
    });
  })

  .catch((error) => {
    console.error("Error in the request:", error);
  });

//------------------------- NO2 -------------------------

const apiNO2 = "https://global-warming.org/api/nitrous-oxide-api";
export const No2Time = []; // x axis
export const newArrayNo2 = []; // y axis

await axios
  .get(apiNO2)
  .then((response) => {
    let dataApi = response.data.nitrous;
    console.log(dataApi);

    dataApi.forEach((item, index) => {
      if (index % 2 === 0) {
        No2Time.push(item.date);
        newArrayNo2.push(item.average);
      }
    });
    console.log(newArrayNo2);
    console.log(No2Time);
  })

  .catch((error) => {
    console.error("Error in the request:", error);
  });
