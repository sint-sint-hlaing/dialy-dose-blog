import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Card from "./components/Card";

export default function App() {
  return (
    <div className=" font-raleway">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/blog" component={Cards} />

          <Route path="/blog/:id" component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.
