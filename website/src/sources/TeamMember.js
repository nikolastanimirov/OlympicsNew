import React from "react";

function Member(props) {
  return (
    <div>
      <a href={props.url}>
        <img src={props.img} alt={props.alt} />
      </a>
    </div>
  );
}
export default Member;