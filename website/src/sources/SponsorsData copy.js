import React from "react";
import Sponsors from "./Sponsors";
import Amizade from "../sources/sponsors/amizade.png";
import Pirinsko from "../sources/sponsors/pirinsko.png";
import Detelina from "../sources/sponsors/detelina2018.png";

import "../css/Sponsors.css";
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
