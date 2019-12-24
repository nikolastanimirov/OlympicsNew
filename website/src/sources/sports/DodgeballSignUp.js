import React, { Component } from "react";
import DodgeballForm from "./DodgeballForm";
import $ from "jquery";
class DodgeballSignUp extends Component {
  render() {
    function shoot() {
      $(".sports-span").css({ opacity: "1" });
    }
    function shoot1() {
      $(".sports-span").css({ opacity: "0" });
    }
    return (
      <div>
        {" "}
        <div class="container-model">
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#myModal"
            onClick={shoot}
          >
            Sign Up
          </button>

          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Dodgeball</h4>
                </div>
                <div class="modal-body">
                  <DodgeballForm />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                    onClick={shoot1}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default DodgeballSignUp;
