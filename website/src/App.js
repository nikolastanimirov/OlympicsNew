import React from "react";
import "./static/App.css";
import Header from "./sources/header";
import "bootstrap/dist/css/bootstrap.min.css";
import backgrd from "./resources/1.png";
import Countdown from "./countdown/Coutdown";

import TeamMember from "./sources/TeamMembers";
import Carousel from "./sources/Carousel";

import Main from "./sources/Main";
import Fire from "./resources/flame.gif";
import Home from "./sources/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <Carousel />
    </div>
  );
}

export default App;
