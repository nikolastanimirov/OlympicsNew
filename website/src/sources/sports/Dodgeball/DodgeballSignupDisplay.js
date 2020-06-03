import React, { Component } from "react";
import Dodgeball from "./DodgeballAPI";
class componentName extends Component {
  render() {
    function shoot1() {
      var modal = document.getElementById("myModal1");
      var btn = document.getElementById("myBtn1");
      var span = document.getElementsByClassName("close1")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
    return (
      <div>
        {" "}
        <li class="nav-item">
          <div class="alert alert-dark" role="alert">
            <button onClick={shoot1} id="myBtn1" className="btn">
              <h5>Dodgeball</h5>
            </button>
            <div id="myModal1" class="modal">
              <div class="modal-content">
                <span class="close1">&times;</span>
                <Dodgeball />
              </div>
            </div>
          </div>
        </li>{" "}
      </div>
    );
  }
}

export default componentName;
