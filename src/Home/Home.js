import React from "react";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
/* import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 */

function Home() {
  return (
    <div>
      <Header></Header>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
