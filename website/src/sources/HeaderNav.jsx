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
      <div className="headerNav">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"> </span>
            <img className="logo" src={Logo} alt="Olympics" />
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar7"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse " id="myNavbar7">
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Crew
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link disabled"
                  tabIndex="-1"
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
