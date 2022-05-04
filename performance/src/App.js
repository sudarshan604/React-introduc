import React from "react";
// import Grand from "./components/GrandParent";
// import Context from "./FunctioncontextApp";

import { ThemeContextConsumer } from "./Theme";
import Header from "./Header";
function App() {
  // static contextType = themeContext;                                             // const theme = this.context;
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {(name) => (
          <div>
            {/* <Context /> */}
            <button onClick={name.toggle}>switch Theme</button>
          </div>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

export default App;
