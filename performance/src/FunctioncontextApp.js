import themeContext from "./Theme";

function Context() {
  return (
    <themeContext.Consumer>{(theme) => <h1>{theme}</h1>}</themeContext.Consumer>
  );
}

export default Context;
