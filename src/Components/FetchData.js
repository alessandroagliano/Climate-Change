import "./fetchData.css";

import axios from "axios";
import Chart from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

const apiTemperatura = "https://global-warming.org/api/temperature-api";
export const newArrayTime = [];
export const newArrayTemperature = [];

await axios
  .get(apiTemperatura)
  .then((response) => {
    let datiApi = response.data.result;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        newArrayTime.push(item.time); // Esempio di trasformazione e aggiunta
        newArrayTemperature.push(item.station);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//------------------------- METANO -------------------------

const apiMetano = "https://global-warming.org/api/methane-api";
export const metanoTime = [];
export const newArrayMetano = [];
await axios
  .get(apiMetano)
  .then((response) => {
    let datiApi = response.data.methane;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        metanoTime.push(item.date); // Esempio di trasformazione e aggiunta
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
export const co2Time = [];
export const newArrayCO2 = [];
await axios
  .get(apiCO2)
  .then((response) => {
    console.log(response);
    let datiApi = response.data.co2;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        co2Time.push(item.year); // Esempio di trasformazione e aggiunta
        newArrayCO2.push(item.trend);
      }
    });
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });

//------------------------- GHIACCIO POLARE -------------------------

const apiGhiacciai = "https://global-warming.org/api/arctic-api";
export const ghiacciaiTime = [];
export const newArrayGhiacciaiArea = [];
export const newArrayGhiacciaiExtent = [];

await axios
  .get(apiGhiacciai)
  .then((response) => {
    console.log(response);
    let datiApi = response.data.arcticData;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        ghiacciaiTime.push(item.year); // Esempio di trasformazione e aggiunta
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
export const No2Time = [];
export const newArrayNo2 = [];

await axios
  .get(apiNO2)
  .then((response) => {
    let datiApi = response.data.nitrous;
    console.log(datiApi);

    datiApi.forEach((item, index) => {
      if (index % 2 === 0) {
        No2Time.push(item.date); // Esempio di trasformazione e aggiunta
        newArrayNo2.push(item.average);
      }
    });
    console.log(newArrayNo2);
    console.log(No2Time);
  })

  .catch((error) => {
    console.error("Errore nella richiesta:", error);
  });
