import React from "react";
import "./ChiSono.css"; //css

import { Navbar } from "../../Header/Header";
import Footer from "../../Footer/Footer";

const ChiSono = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SectionChiSono></SectionChiSono>
      <Footer></Footer>
    </div>
  );
};

export default ChiSono;

export const SectionChiSono = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center ">
        {/* TITLE */}
        <h1 className="display-4 fw-bold ">Chi sono</h1>
        <div className="col-lg-9 mx-auto">
          <p className="lead mb-4">
            {" "}
            Ciao, sono Alessandro Aglianò , un giovane appassionato impegnato
            nella sensibilizzazione sul cambiamento climatico attraverso
            l'analisi dei dati forniti da fonti autorevoli, come il sito web{" "}
            <a href="https://global-warming.org/">Global Warming</a>. La mia
            missione è quella di gettare luce sui cambiamenti critici che stanno
            avvenendo nel nostro pianeta a causa dell'attività umana e di
            condividere informazioni chiare e accessibili che ci aiutino a
            comprendere l'urgenza di agire.
          </p>
          <h2 className="pt-4">
            Esplorando i Fattori del Cambiamento Climatico
          </h2>
          <p className="lead mb-4">
            Attraverso l'elaborazione e la visualizzazione dei dati provenienti
            da fonti affidabili come{" "}
            <a href="https://global-warming.org/"> Global Warming</a>, lavoro
            per tracciare e illustrare in modo accurato l'evoluzione dei
            principali fattori che contribuiscono al cambiamento climatico.
            Questi dati sono fondamentali per fornire una panoramica chiara dei
            cambiamenti in atto, consentendo una maggiore comprensione delle
            loro implicazioni e un aperto dialogo su come mitigare gli effetti
            negativi.
          </p>
          <h2 className="pt-4">L'Urgenza del Cambiamento Climatico</h2>

          <p className="lead mb-4">
            Il cambiamento climatico non è più una minaccia astratta; è una
            realtà tangibile che sta avendo un impatto devastante sul nostro
            pianeta. I fenomeni meteorologici estremi, la perdita di
            biodiversità e l'innalzamento del livello del mare sono solo alcune
            delle conseguenze che stiamo affrontando. È essenziale che
            comprendiamo come le nostre azioni quotidiane influenzino il clima e
            riconosciamo la nostra responsabilità nell'adottare misure di
            mitigazione
          </p>
          <h2 className="pt-4">Perché Dovrebbe Importarci?</h2>

          <p className="lead mb-4">
            Il cambiamento climatico non è solo una questione ambientale, ma una
            sfida complessa che riguarda la nostra sopravvivenza, l'economia, la
            salute e il benessere delle generazioni future. Ogni piccola azione
            conta: dalla riduzione delle emissioni di carbonio all'uso
            sostenibile delle risorse. Proteggere il nostro pianeta è un dovere
            morale e pratico, poiché le scelte che facciamo oggi plasmeranno il
            mondo che lasceremo alle prossime generazioni
          </p>
          <h2 className="pt-4">Fonti per Approfondire</h2>

          <p className="lead mb-4">
            Se desideri approfondire ulteriormente il tema del cambiamento
            climatico e comprendere meglio la sua rilevanza, ti consiglio di
            consultare alcune fonti autorevoli:
          </p>
          <ul>
            <li>
              <a href="https://www.ipcc.ch/">
                IPCC - Gruppo Intergovernativo sul Cambiamento Climatico{" "}
              </a>
              <p>
                Un'organizzazione scientifica che fornisce valutazioni complete
                sullo stato delle conoscenze sul cambiamento climatico.
              </p>
            </li>
            <li>
              <a href="https://climate.nasa.gov/evidence/">
                NASA - Cambiamento Climatico: Evidenze
              </a>
              <p>
                Una risorsa della NASA che presenta evidenze scientifiche del
                cambiamento climatico.
              </p>
            </li>
            <li>
              <a href="https://www.wri.org/">World Resources Institute </a>
              <p>
                Un'organizzazione che offre dati e analisi sulle sfide
                ambientali globali, incluso il cambiamento climatico.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
