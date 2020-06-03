import React from "react";
import { Link } from "react-scroll";

function Sport(props) {
  return (
    <div class="container-navscroll">
      <div>
        {" "}
        <Link
          activeClass="active"
          to={props.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {" "}
          {props.name}
        </Link>
      </div>
    </div>
  );
}
export default Sport;
