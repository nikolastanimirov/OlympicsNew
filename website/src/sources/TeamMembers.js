import React from "react";
import Member from "./TeamMember";
import Headline from "../sources/Headline";
import NikiS from "../resources/crew/NikiSFinal.jpg";
import NikiPoh from "../resources/crew/NikiPohFinal.jpg";
import Natalia from "../resources/crew/NataliaFinal.jpg";

import "../static/Crew.css";
function Data() {
  return (
    <div id="crew" className="crew">
      <Headline title="Crew" />
      <ul>
        <li>
          <Member
            img={NikiS}
            alt="NikiS"
            name="Nikola Stanimirov"
            title="President"
          />
        </li>
        <li>
          <Member img={NikiPoh} alt="Pirinsko" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
        <li>
          <Member img={Natalia} alt="Detelina" url="https://www.google.com" />
        </li>
      </ul>
    </div>
  );
}

export default Data;
