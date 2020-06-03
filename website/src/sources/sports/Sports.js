import React, { Component } from "react";

import DodgeballSignupDisplay from "./Dodgeball/DodgeballSignupDisplay";
import SwimmingSignupDisplay from "./Swimming/SwimmingSignupDisplay";
import RunningSignupDisplay from "./Running/RunningSignipDisplay";
import VolleyballSignupDisplay from "./Volleyball/VolleyballSignupDisplay";
import FootballSignupDisplay from "./Football/FootballSignipDisplay";
import "../../static/SportsNavigation.css";
class Sport extends Component {
  render() {
    return (
      <div>
        {" "}
        <ul class="nav flex-column">
          <div className="sports-navigation">
            <DodgeballSignupDisplay />
            <SwimmingSignupDisplay />
            <RunningSignupDisplay />
            <VolleyballSignupDisplay />
            <FootballSignupDisplay />
          </div>
        </ul>
      </div>
    );
  }
}

export default Sport;
