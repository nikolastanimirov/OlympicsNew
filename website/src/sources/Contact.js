import React, { Component } from "react";
import "../static/Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h2>Contact us</h2>
        <h4>If you have any qustions, do not hesitate to contact us @:</h4>
        <form class="contact-form">
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputPassword4">Name</label>
              <input
                type="text"
                class="form-control"
                id="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputAddress">Message</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Message ..."
              />
            </div>
          </div>
          <div class="form-row">
            <button type="submit" class="btn btn-warning">
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
