import React from "react";

// Import all Components
import Home from "./Home/Home";
import CO2 from "./Components/CO2/CO2";
import Glaciers from "./Components/Glaciers/Glaciers";
import Methane from "./Components/Methane/Methane";
import NO2 from "./Components/NO2/NO2";
import Temperature from "./Components/Temperature/Temperature";
import WhoIAm from "./Components/Who I Am/WhoIAm";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import react-router

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Temperature" exact element={<Temperature />} />
          <Route path="/Glaciers" exact element={<Glaciers />} />
          <Route path="/CO2" exact element={<CO2 />} />
          <Route path="/Methane" exact element={<Methane />} />
          <Route path="/NO2" exact element={<NO2 />} />
          <Route path="/WhoIAm" exact element={<WhoIAm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
