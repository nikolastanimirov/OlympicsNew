import React from "react";

function Member(props) {
  return (
    <div class="container">
      <img src={props.img} alt={props.alt} />
      <div class="overlay">
        <div class="text">{props.name}</div>
        <span class="title">{props.title}</span>
      </div>
    </div>
  );
}
export default Member;
