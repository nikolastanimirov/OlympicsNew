import React from "react";

function Sport(props) {
  return (
    <div>
      <div class="container1">
        <a href={props.url}>
          <img src={props.img} alt={props.alt} />
        </a>
        <div class="overlay1">
          <div class="text1">
            {props.title}
            <button class="btn btn-warning" name="">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sport;
