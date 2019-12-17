import React from "react";

function Sport(props) {
  return (
    <div>
      <a href={props.url}>
        <img src={props.img} alt={props.alt} />
      </a>
      <h2>{props.title}</h2>
    </div>
  );
}
export default Sport;
