import React, { Component } from "react";
import DodgeballForm from "./DodgeballForm";
class DodgeballSignUp extends Component {
  render() {
    return (
      <div>
        {" "}
        <div class="container-model">
          <button
            type="button"
            class="btn btn-warning"
            data-toggle="modal"
            data-target="#myModal"
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
                    class="btn btn-default"
                    data-dismiss="modal"
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
