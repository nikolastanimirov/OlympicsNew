import React, { Component } from "react";
import Footer from "./sources/Footer";
import "./static/NotFound.css";
class NotFound extends Component {
  render() {
    return (
      <div>
        <div class="not-found">
          <h1>Error... 404 PAGE NOT FOUND</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
