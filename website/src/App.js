import React from "react";
import "./static/App.css";
import Header from "./sources/header";
import "bootstrap/dist/css/bootstrap.min.css";
import backgrd from "./resources/1.png";
import Countdown from "./countdown/Coutdown";
import Sponsors from "./sources/SponsorsData";
import TeamMember from "./sources/TeamMembers";
import Carousel from "./sources/Carousel";
import SportsData from "./sources/SportsData";
import Main from "./sources/Main";
import About from "./sources/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Sponsors />
      <Carousel />
      <SportsData />
    </div>
  );
}

export default App;
