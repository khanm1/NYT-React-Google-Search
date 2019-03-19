import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/books";
import Saved from "./pages/saved";
 
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
       <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
     
      </Switch>
    </div>
  </Router>
);

export default App;
