import React from "react";
import withToggler from "./reusability";
class Toggle extends React.Component {
  render() {
    return (
      <div>
        <p>click here to toggle</p>

        <span onClick={this.props.toggle}>{this.props.on ? "💟" : "💗 "}</span>
      </div>
    );
  }
}

export default withToggler(Toggle);
