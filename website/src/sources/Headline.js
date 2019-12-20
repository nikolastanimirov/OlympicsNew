import React from "react";

function Headline(props) {
  return (
    <div>
      <div className="headline">{props.title}</div>
      <hr size="2px" width="75%" />
    </div>
  );
}
export default Headline;
