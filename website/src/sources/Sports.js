import React from "react";

function Sport(props) {
  return (
    <div>
      <div class="container1">
        <img src={props.img} alt={props.alt} />
        <div class="overlay1">
          <div class="text1">{props.title}</div>
        </div>
      </div>
    </div>
  );
}
export default Sport;
