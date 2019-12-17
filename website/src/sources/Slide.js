import React from "react";
import "../static/carousel.css";
class Slide extends React.Component {
  render() {
    const { name } = this.props;
    return <div className="slide">{name}</div>;
  }
}

export default Slide;
