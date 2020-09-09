import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
// import Nav from "./Nav";
// import Banner from "./Banner";
// import Card from "./Card";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout"></Route>
          <Route path="/login"></Route>
          <Route path="/">
            <Header />
            {/* <Nav />
      <Banner />
      <Card /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
