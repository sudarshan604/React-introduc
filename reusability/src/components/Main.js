import React from "react";
import withTogggler from "./reusability";

class Main extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? "Show" : "Hide"}Slide{" "}
        </button>

        <div style={{ display: this.props.on ? "block" : "none" }}>
          <p>hello my name</p>
          <p>
            hello my naem is sudarshan kshetri.currently purchasing degree in
            university of pokhara university from nepal
          </p>
        </div>
      </div>
    );
  }
}

export default withTogggler(Main);
