import React from "react";
import "../static/carousel.css";
import scrollTo from "./scrollToAnimate";
import TeamMembers from "./TeamMembers";
import ArrLeft from "../resources/arrow-left.svg";
import ArrRight from "../resources/arrow-right.svg";
import Headline from "../sources/Headline";
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
          type="button"
          class="btn btn-link"
          className="slider-nav slider-left-nav"
          onClick={this.handleLeftNav}
        >
          <img class="nav-arrow" src={ArrLeft} alt="nav-arrow" />
        </button>
        <div className="slider-viewport" ref="sliderViewport">
          {this.renderSlides()}
        </div>
        <button
          type="button"
          class="btn btn-link"
          className="slider-nav slider-right-nav"
          onClick={this.handleRightNav}
        >
          <img class="nav-arrow" src={ArrRight} alt="nav-arrow" />
        </button>
      </div>
    );
  }
}

export default Carousel;
