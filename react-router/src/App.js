import React from "react";
import ServiceList from "./services/ServicesList";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import ServiceDetails from "./services/ServiceDetail";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Services">
          <ServiceList />
        </Route>
        <Route path="/Services/:userId">
          <ServiceDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
