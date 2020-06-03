import React from "react";
import "../static/SportsData.css";
import DodgeballSignUp from "./sports/Dodgeball/DodgeballSignUp";

function SportsData(props) {
  function shoot() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

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
    <li>
      <div
        class="carreaux_presentation_light"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
        <div class="shadow_swhow_mini">
          <div class="deroul_titre">{props.text}</div>
          <div class="deroul_soustitre">
            {" "}
            <button onClick={shoot} id="myBtn" className="btn">
              <h5>Sign up</h5>
            </button>
          </div>
        </div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <DodgeballSignUp />
          </div>
        </div>
      </div>
    </li>
  );
}

export default SportsData;
