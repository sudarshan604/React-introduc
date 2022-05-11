import React from "react";
import Toggle from "./reusability";

function Main() {
  return (
    <Toggle
      render={function (obj) {
        return (
          <div>
            <button onClick={obj.handleClick}>
              {obj.on ? "Show" : "Hide"}Slide{" "}
            </button>

            <div style={{ display: obj.on ? "block" : "none" }}>
              <p>hello my name</p>
              <p>
                hello my naem is sudarshan kshetri.currently purchasing degree
                in university of pokhara university from nepal
              </p>
            </div>
          </div>
        );
      }}
    />
  );
}
export default Main;

// export default withTogggler(Main);
