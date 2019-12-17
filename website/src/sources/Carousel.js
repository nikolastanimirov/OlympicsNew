import React from "react";
import "../static/carousel.css";
import scrollTo from "./scrollToAnimate";
import TeamMembers from "./TeamMembers";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.onResize = this.onResize.bind(this);
    this.state = {
      numOfSlidesTOscroll: 4
    };
  }
  onResize() {}
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.onResize);
  }
  checkNumOfSlidesToScroll() {
    var numOfSlidesTOscroll;
    if (window.innerWidth < 900) {
      numOfSlidesTOscroll = 2;
    } else {
      numOfSlidesTOscroll = 4;
    }
    if (this.state.numOfSlidesTOscroll !== numOfSlidesTOscroll)
      this.setState({ numOfSlidesTOscroll });
  }
  handleLeftNav = e => {
    const { sliderViewport } = this.refs;
    var numOfSlidesTOscroll = this.state.numOfSlidesTOscroll;
    var widthofSlide = 150;
    var newPos = sliderViewport.scrollLeft - widthofSlide * numOfSlidesTOscroll;
    var timeToMoveOnSlide = 200;
    var totalTimeToMove = Math.min(
      numOfSlidesTOscroll * timeToMoveOnSlide,
      500
    );
    scrollTo(sliderViewport, newPos, totalTimeToMove, "scrollLeft");
  };
  handleRightNav = e => {
    const { sliderViewport } = this.refs;
    var numOfSlidesTOscroll = this.state.numOfSlidesTOscroll;
    var widthofSlide = 120;
    var newPos = sliderViewport.scrollLeft + widthofSlide * numOfSlidesTOscroll;
    var timeToMoveOnSlide = 200;
    var totalTimeToMove = Math.min(
      numOfSlidesTOscroll * timeToMoveOnSlide,
      500
    );
    scrollTo(sliderViewport, newPos, totalTimeToMove, "scrollLeft");
  };
  renderSlides() {
    return <TeamMembers />;
  }

  render() {
    return (
      <div className="slider-container">
        <button
          className="slider-nav slider-left-nav"
          onClick={this.handleLeftNav}
        >
          &#60;
        </button>
        <div className="slider-viewport" ref="sliderViewport">
          {this.renderSlides()}
        </div>
        <button
          className="slider-nav slider-right-nav"
          onClick={this.handleRightNav}
        >
          &#62;
        </button>
      </div>
    );
  }
}

export default Carousel;
