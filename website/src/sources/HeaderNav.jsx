import React, { Component } from "react";
import "../static/HeaderNav.css";
import $ from "jquery";
import Logo from "../resources/Logo2019.png";

class HeaderNav extends Component {
  render() {
    $(window).scroll(function() {
      if ($(document).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });
    return (
      <div class="headerNav">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"> </span>
            <img class="logo" src={Logo} alt="Olympics" />
            <div class="w-100 text-right">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar7"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse " id="myNavbar7">
            <ul class="navbar-nav ml-auto flex-nowrap">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Sports
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Crew
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Sponsors
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link disabled"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>{" "}
      </div>
    );
  }
}

export default HeaderNav;
