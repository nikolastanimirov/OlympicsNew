import React, { Component } from "react";
import Running from "./RunningAPI";
class SwimmingSignupDisplay extends Component {
  render() {
    function shoot2() {
      var modal = document.getElementById("myModal2");
      var btn = document.getElementById("myBtn2");
      var span = document.getElementsByClassName("close2")[0];

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
            <button onClick={shoot2} id="myBtn2" className="btn">
              <h5>Running</h5>
            </button>
            <div id="myModal2" class="modal">
              <div class="modal-content">
                <span class="close2">&times;</span>
                <Running />
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default SwimmingSignupDisplay;
