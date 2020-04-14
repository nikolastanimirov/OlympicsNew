import React, { Component } from "react";
import "../static/HeaderNav.css";
import $ from "jquery";
import Logo from "../resources/icons/logo.png";
import NavScroll from "../sources/NavScroll";

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
                <NavScroll className="nav-link" link="home" name="Home" />
              </li>
              <li className="nav-item">
                <NavScroll className="nav-link" link="about" name="About" />
              </li>
              <li className="nav-item">
                <NavScroll className="nav-link" link="sports" name="Sport" />
              </li>
              <li className="nav-item">
                <NavScroll
                  className="nav-link"
                  link="sponsors"
                  name="Sponsors"
                />
              </li>
              <li className="nav-item">
                <NavScroll className="nav-link" link="crew" name="Crew" />
              </li>
              <li className="nav-item">
                <NavScroll
                  className="nav-link"
                  link="contact-us"
                  name="Contacts"
                />
              </li>
              <li className="nav-item">
                <NavScroll className="nav-link" link="sign-up" name="Sign-up" />
              </li>
            </ul>
          </div>
        </nav>{" "}
      </div>
    );
  }
}

export default HeaderNav;
