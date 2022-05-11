import React from "react";
import Toggler from "./reusability";

function Toggle(props) {
  return (
    <Toggler
      defaultOnValue={false}
      render={function (obj) {
        return (
          <div>
            <p>click here to toggle</p>

            <span onClick={obj.handleClick}>{obj.on ? "💟" : "💗 "}</span>
          </div>
        );
      }}
    />
  );
}

export default Toggle;
