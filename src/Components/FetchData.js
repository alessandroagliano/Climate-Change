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

const apiTemperatura = "https://global-warming.org/api/temperature-api";
export const newArrayTime = []; // x axis
export const newArrayTemperature = []; // y axis

await axios
  .get(apiTemperatura)
  .then((response) => {
    let datiApi = response.data.result;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.time);
        newArrayTemperature.push(item.station);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//------------------------- METANO -------------------------

const apiMetano = "https://global-warming.org/api/methane-api";
export const metanoTime = []; // x axis
export const newArrayMetano = []; // y axis
await axios
  .get(apiMetano)
  .then((response) => {
    let datiApi = response.data.methane;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        metanoTime.push(item.date);
        newArrayMetano.push(item.average);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
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
    let datiApi = response.data.co2;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        co2Time.push(item.year);
        newArrayCO2.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//------------------------- GHIACCIO POLARE -------------------------

/*  for polar ice I extrapolated both 'area' and 'extent'.
In the graph I will form two lines.*/

const apiGhiacciai = "https://global-warming.org/api/arctic-api";
export const ghiacciaiTime = []; // x axis
export const newArrayGhiacciaiArea = []; // y axis
export const newArrayGhiacciaiExtent = []; // y axis

await axios
  .get(apiGhiacciai)
  .then((response) => {
    console.log(response);
    let datiApi = response.data.arcticData;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        ghiacciaiTime.push(item.year);
        newArrayGhiacciaiArea.push(item.area);
        newArrayGhiacciaiExtent.push(item.extent);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//------------------------- NO2 -------------------------

const apiNO2 = "https://global-warming.org/api/nitrous-oxide-api";
export const No2Time = []; // x axis
export const newArrayNo2 = []; // y axis

await axios
  .get(apiNO2)
  .then((response) => {
    let datiApi = response.data.nitrous;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        No2Time.push(item.date);
        newArrayNo2.push(item.average);
      }
    });
    console.log(newArrayNo2);
    console.log(No2Time);
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });
