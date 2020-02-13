import React, { Component } from "react";
import "../static/Contact.css";
import EmailIcon from "../resources/icons/email.png";
import LocationIcon from "../resources/icons/location.png";
import PhoneIcon from "../resources/icons/phone.png";
import Headline from "../sources/Headline";
import axios from "axios";
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handleSumit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      message
    });
  }
  render() {
    return (
      <div id="contact-us" className="contact-container">
        <Headline title="Contact us" />
        <h4 className="contact-us-memo">
          If you have any qustions, do not hesitate to contact us @:
        </h4>
        <div class="container-contact-info">
          <div class="row">
            <div class="col-sm">
              <div class="number">
                <img src={PhoneIcon} />
                <h4>64564545645</h4>
              </div>
            </div>
            <div class="col-sm">
              <div class="email">
                <img src={EmailIcon} />
                <h4> aubgolympicscommittee@gmail.com</h4>
              </div>
            </div>
            <div class="col-sm">
              <div class="number">
                <img src={LocationIcon} />
                <h4>
                  {" "}
                  ул. „Свобода Бъчварова“ 6, 2700 Южна промишлена зона,
                  Благоевград
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* {{msg}} */}
        <form class="contact-form" onSubmit={this.handleSumit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Name</label>
              <input
                type="text"
                class="form-control"
                id="text"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputAddress">Message</label>
              <input
                type="textarea"
                class="form-control"
                id="inputAddress"
                name="message"
                placeholder="Message ..."
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div class="form-row">
            <button type="submit" class="btn btn-warning">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
