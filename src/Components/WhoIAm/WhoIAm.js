import React from "react";
import "./WhoIAm.css"; //css

import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";

const WhoIAm = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SectionWhoIAm></SectionWhoIAm>
      <Footer></Footer>
    </div>
  );
};

export default WhoIAm;

export const SectionWhoIAm = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        {/* TITLE */}
        <h1 className="display-4 fw-bold ">Who I Am</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            Hi, I'm Alessandro Aglianò, a committed young enthusiast in raising
            awareness on climate change through the analysis of data provided by
            authoritative sources, such as the website{" "}
            <a href="https://global-warming.org/">Global Warming</a>. My mission
            is to shed light on the critical changes that are taking place
            occurring on our planet due to human activity and share clear and
            accessible information that helps us to understand the urgency to
            act.
          </p>
          <h2 className="pt-4">Exploring the Drivers of Climate Change </h2>
          <p className="lead mb-4">
            Through the processing and visualization of the incoming data from
            reliable sources such as{" "}
            <a href="https://global-warming.org/"> Global Warming</a>, work to
            accurately track and illustrate the evolution of main factors
            contributing to climate change. This data is key to providing a
            clear overview of changes taking place, allowing for a greater
            understanding of their implications and an open dialogue on how to
            mitigate the effects negative.
          </p>
          <h2 className="pt-4">The Urgency of Climate Change</h2>

          <p className="lead mb-4">
            Climate change is no longer an abstract threat; it's a tangible
            reality that is having a devastating impact on ours planet. Extreme
            weather phenomena, the loss of biodiversity and sea level rise are
            just a few of the consequences we are facing. It is essential that
            we understand how our daily actions affect the climate and we
            recognize our responsibility in taking measures mitigation
          </p>
          <h2 className="pt-4">Why Should We Care?</h2>

          <p className="lead mb-4">
            Climate change is not just an environmental issue, but one complex
            challenge that concerns our survival, the economy, the health and
            well-being of future generations. Every little action matters: from
            carbon reduction to use sustainable of resources. Protecting our
            planet is a duty moral and practical, as the choices we make today
            will shape the world that we will leave to future generations
          </p>
          <h2 className="pt-4">Sources of Insight</h2>

          <p className="lead mb-4">
            If you would like to delve further into the topic of change climate
            and better understand its relevance, I advise you to consult some
            authoritative sources:
          </p>
          <ul>
            <li>
              <a href="https://www.ipcc.ch/">
                IPCC - Intergovernmental Panel on Climate Change{" "}
              </a>
              <p>
                A scientific organization that provides comprehensive
                assessments on the state of knowledge on climate change.
              </p>
            </li>
            <li>
              <a href="https://climate.nasa.gov/evidence/">
                NASA - Climate Change: Evidence{" "}
              </a>
              <p>
                A NASA resource that presents scientific evidence of the climate
                change.
              </p>
            </li>
            <li>
              <a href="https://www.wri.org/">World Resources Institute </a>
              <p>
                An organization that offers data and analysis on challenges
                global environments, including climate change.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
