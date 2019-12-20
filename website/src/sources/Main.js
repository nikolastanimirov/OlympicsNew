import React from "react";
import Dodgeball from "../resources/sports/dodgeball.jpg";
import Arm from "../resources/sports/arm.jpg";
import Bowling from "../resources/sports/bowling.jpg";
import "../static/Main.css";

function Main() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="slideImage" src={Dodgeball} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="slideImage" src={Dodgeball} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="slideImage" src={Dodgeball} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>...</h5>
            <p>...</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Main;
