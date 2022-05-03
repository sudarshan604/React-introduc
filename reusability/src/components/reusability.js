import React from "react";

class Toggler extends React.Component {
  state = {
    isShown: true,
  };

  handleClick = () => {
    this.setState((prev) => {
      return {
        isShown: !prev.isShown,
      };
    });
  };

  render() {
    const Component = this.props.component;

    return (
      <Component
        on={this.state.isShown}
        toggle={this.handleClick}
        {...this.props}
      />
    );
  }
}

function withToggler(component) {
  return function (props) {
    return <Toggler component={component} {...props} />;
  };
}

export default withToggler;
