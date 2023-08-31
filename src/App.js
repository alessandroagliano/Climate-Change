import React from "react";

import Home from "./Home/Home";
import CO2 from "./Components/CO2/CO2";
import Ghiacciai from "./Components/Ghiacciai/Ghiacciai";
import Metano from "./Components/Metano/Metano";
import NO2 from "./Components/NO2/NO2";
import Temperature from "./Components/Temperature/Temperature";
import ChiSono from "./Components/Chi sono/ChiSono";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Temperature" exact element={<Temperature />} />
          <Route path="/Ghiacciai" exact element={<Ghiacciai />} />
          <Route path="/CO2" exact element={<CO2 />} />
          <Route path="/Metano" exact element={<Metano />} />
          <Route path="/NO2" exact element={<NO2 />} />
          <Route path="/ChiSono" exact element={<ChiSono />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
