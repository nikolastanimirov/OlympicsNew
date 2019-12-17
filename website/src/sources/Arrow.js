import React from "react";
import arrow from "../resources/arrow.png";
function Arrow() {
  return (
    <a href="www.google.com">
      <img src={arrow} alt="arrow" className="arrow" />
    </a>
  );
}

export default Arrow;
