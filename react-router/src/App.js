import React from "react";
import ServiceList from "./services/ServicesList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/services">{ServiceList}</Route>
      </Switch>
    </div>
  );
}

export default App;
