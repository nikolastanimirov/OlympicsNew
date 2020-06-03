import React from "react";
import slide_image_1 from "../resources/slider/1.png";
import slide_image_2 from "../resources/slider/2.png";
import slide_image_3 from "../resources/slider/3.png";
import "../static/Main.css";

function Main() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="slideImage" src={slide_image_1} alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h2>Olympiad</h2>
            <h5>2017</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img class="slideImage" src={slide_image_3} alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h2>Olympiad</h2>
            <h5>2017</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img class="slideImage" src={slide_image_2} alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h2>Olympiad</h2>
            <h5>2017</h5>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Main;
