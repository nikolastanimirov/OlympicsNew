import React from "react";
import SportsDisplay from "./SportsDisplay";
import swimming from "../resources/sports/swimming.png";
import dodgeball from "../resources/sports/dodgeball.png";
import Footbal from "../resources/sports/Football.png";
import volleyball from "../resources/sports/volleyball.png";
import running from "../resources/sports/running.png";
import Headline from "../sources/Headline";
import "../static/SportsData.css";

function SportsData() {
  return (
    <div id="sports" className="sports">
      <Headline title="Sports" />
      <ul>
        <li>
          <SportsDisplay img={dodgeball} text={"Dodgeball"} />
        </li>
        <li>
          <SportsDisplay img={swimming} text={"Swimming"} />
        </li>
        <li>
          <SportsDisplay img={running} text={"Running"} />
        </li>
        <li>
          <SportsDisplay img={volleyball} text={"Volleyball"} />
        </li>
        <li>
          <SportsDisplay img={Footbal} text={"Football"} />
        </li>
      </ul>
    </div>
  );
}

export default SportsData;
