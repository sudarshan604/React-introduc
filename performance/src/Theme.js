import React from "react";

const { Provider, Consumer } = React.createContext();

class ThemeContextProvide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
  }
  stateFlipflop = () => {
    this.setState((prevS) => {
      return {
        theme: prevS.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    return (
      <Provider value={{ theme: this.state.theme, toggle: this.stateFlipflop }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvide, Consumer as ThemeContextConsumer };

// import React from "react";

// const themeContext = React.createContext();

// export default themeContext;
