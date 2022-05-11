import React from "react";

class Toggler extends React.Component {
  state = {
    isShown: this.props.defaultOnValue,
  };

  handleClick = () => {
    this.setState((prev) => {
      return {
        isShown: !prev.isShown,
      };
    });
  };

  static defaultProps = {
    defaultOnValue: true,
  };

  render() {
    return (
      <div>
        {this.props.render({
          on: this.state.isShown,
          handleClick: this.handleClick,
        })}
      </div>
    );
  }
}

// function withToggler(component) {
//   return function (props) {
//     return <Toggler component={component} {...props} />;
//   };
// }

// export default withToggler;

export default Toggler;
