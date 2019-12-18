import React from "react";
import Sponsors from "./Sponsors";
import Amizade from "../resources/sponsors/amizade.png";
import Pirinsko from "../resources/sponsors/pirinsko.png";
import Detelina from "../resources/sponsors/detelina2018.png";

import "../static/Sponsors.css";
function Data() {
  return (
    <div className="sponsors">
      <p className="sponsors-title">Sponsors</p>
      <ul>
        <li>
          <Sponsors img={Amizade} alt="Amizade" url="https://www.google.com" />
        </li>
        <li>
          <Sponsors
            img={Pirinsko}
            alt="Pirinsko"
            url="https://www.google.com"
          />
        </li>
        <li>
          <Sponsors
            img={Detelina}
            alt="Detelina"
            url="https://www.google.com"
          />
        </li>
      </ul>
    </div>
  );
}

export default Data;
